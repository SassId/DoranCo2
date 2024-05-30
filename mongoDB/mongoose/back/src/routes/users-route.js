import express from "express";
import { UserModel } from "../database/user.js";
import { PostModel } from "../database/post.js";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

export const usersRouter = express.Router();

usersRouter.post("/inscription", async (req, res) => {
  console.log(req.body);

  // * Step 1: Test the received data
  const { email, password, username } = req.body;

  if (!email.includes("@") || username === "" || password.length < 6) {
    return res.status(400).json({ error: "incorrect data" });
  }

  //   * Step 2: Test if the user exists
  // * Step 2.1: Get the user in the DB
  const userFromDB = await UserModel.find({ email: email });
  console.log(userFromDB);
  // Test if user exists
  if (userFromDB.length > 0) {
    return res.status(401).json({ error: "this user already exists" });
  }

  // * Step 3: Hash the password
  const hashedPassword = await bcrypt.hash(password, 6);
  console.log(hashedPassword);

  // * Step 4: Register the user
  const newUser = new UserModel({
    email,
    hashedPassword,
    username,
  });

  const user = await newUser.save();
  console.log(user);
  return res.json({
    user: {
      email: user.email,
      username: user.username,
      id: user._id,
    },
  });
});

// TODO:
// Exercice:
// Créer une route: /api/user/connexion
//     Verifier si l'email et le mot de passe on ete réçu dans le coprs de la requete sinon retourner un erreur
//     Récuperer l'utilisateur depuis la base de données avec son mail, retourner un erreur si il n'existe pas
//     Verifier si le mot de passe est correcte (utiliser la methode compare de bcrypt)
//     Retourner l'utilisateur dans la réponse

//* Declare a variable for the jsonwebtoken:
const SECRET_KEY = "azerty";

usersRouter.post("/connexion", async (req, res) => {
  console.log(req.body);

  const { email, password } = req.body;

  if (!email || password < 6) {
    return res.status(400).json({ error: "incorrect data" });
  }

  // destructuring the array returned by UserModel.find
  const [userFromDB] = await UserModel.find({ email: email });
  console.log("testuserfromdb");
  console.log(userFromDB);

  if (!userFromDB) {
    return res.status(401).json({ error: "this user doesn't exist" });
  }

  //* Compare passwords

  const isPasswordValid = await bcrypt.compare(
    password,
    userFromDB.hashedPassword
  );

  if (!isPasswordValid) {
    return res.status(401).json({ error: "incorrect credentials" });
  }
  // * Token creation
  const access_token = jsonwebtoken.sign({ id: userFromDB._id }, SECRET_KEY);

  return res.json({ user: userFromDB, access_token });
});

//  * Collect the data and verifies the token
usersRouter.get("/me", async (req, res) => {
  const access_token = req.headers.authorization;
  console.log(req.headers.authorization);

  // *Split the token and leave the 'bearer' part
  const token = access_token.split(" ")[1];

  const verifiedToken = jsonwebtoken.verify(token, SECRET_KEY);

  if (!verifiedToken) {
    return res.status(401).json({ error: "invalid token" });
  }

  const user = await UserModel.findById(verifiedToken.id);

  return res.json({ user });
});

// Etape 12  : Modification du profile
// Implémenter la fonctionnalité permettant a l'utilisateur de changer ses données: username et avatar.
// Dans le front:

//     [v] Ajouter un formulaire pour modifier le username et l'avatar (Donne un URL vers une image)
//     [v]  Lors de la soumission du formulaire, envoyer une requête PUT vers "/api/me"

// Dans la back

//     [v] Ajouter la route PUT sur /api/me
//     [v] Récupérer les données du corps de la requête
//     [v] Valider les données sinon retourner 400
//     [v] Verifier le token de l'utilisateur sinon retourner 401
//     [v] Modifier l'utilisateur dans la base de données
//     [v] Retourner l'utilisateur dans la réponse

usersRouter.put("/me", async (req, res) => {
  const { username, avatarUrl } = req.body;
  const access_token = req.headers.authorization;
  console.log(req.body);
  if (!username) {
    return res.status(400).json("username required");
  }

  if (!access_token) {
    return res.status(401).json({ error: "access token required" });
  }

  const token = access_token.split(" ")[1];
  const verifiedToken = jsonwebtoken.verify(token, SECRET_KEY);

  if (!verifiedToken) {
    return res.status(401).json({ error: "invalid token" });
  }

  // the .select allows to leave (-name) or get (name) the desired properties
  const user = await UserModel.findById(verifiedToken.id).select(
    "-hashedPassword"
  );
  user.username = username;
  user.avatarUrl = avatarUrl;

  await user.save();

  // isolate the hashedPassword and gives us all the other key in "sendUser thanks to the spreadOperator
  // const { hashedPassword, ...sendUser } = user;
  return res.json({ user });
});

// Etape 13  : Créer des posts
// Implémenté la fonctionnalité permettant a l'utilisateur de créer des posts (title, description, content, imageUrl):  (method: POST - URL: `/api/posts)

// Dans le back:

//     [v] Créer un schema et model pour les posts: (id, userID, title, description, imageUrl)
//     [v] Ajouter la route POST /api/posts
//     [v] Récupérer les données dans le corps de la requête
//     [v] Valider les données sinon 400
//     [v] Verifier la validité tu token sinon 401
//     [v] Créer le post dans la base de données
//     [v] Retourner le nouveau post

// Dans le front:

//     [ ] Créer un formulaire avec messages d'erreurs. (title: obligatoire, description: obligatoire)
//     [ ] Envoyer une requête avec les données et le token lors de la soumission du formulaire

usersRouter.post("/me/posts", async (req, res) => {
  const { title, description, imageUrl } = req.body;

  if (!req.body) {
    return res.status(400).json({ error: "bad request" });
  }

  const access_token = req.headers.authorization;

  if (!access_token) {
    return res.status(401).json({ error: "access token required" });
  }

  const token = access_token.split(" ")[1];
  const verifiedToken = jsonwebtoken.verify(token, SECRET_KEY);

  if (!verifiedToken) {
    return res.status(401).json({ error: "invalid token" });
  }

  const newPost = new PostModel({
    userID: verifiedToken.id,
    title: title,
    description: description,
    imageUrl: imageUrl,
  });
  console.log("yoyoyoyoyoyoyoyoyoyoyoyoyoyoyoyoy!!!!!!!");
  console.log(newPost);

  const addedNewPost = await newPost.save();
  console.log(addedNewPost);

  return res.json({ post: addedNewPost });
});

// Etape 14  :  Afficher les posts de l'utilisateur
// Dans le back:

//     [v] Ajouter la route GET /api/me/posts
//     [v] Récupérer et retourner les post dont userID est égal a l'identifiant de l'utilisateur récupérer dans le token

// Dans la page de profile:

//     [ ] Utiliser un useEffect pour Récupérer tous les posts de l'utilisateur (method: GET  - /api/users/me/posts ).
//     [ ] Stocker les articles dans une variables d'état
//     [ ] Utiliser la method map, pour afficher tous les articles

usersRouter.get("/me/posts", async (req, res) => {
  const access_token = req.headers.authorization;

  if (!access_token) {
    return res.status(401).json({ error: "access token required" });
  }

  const token = access_token.split(" ")[1];
  console.log(access_token);
  const verifiedToken = jsonwebtoken.verify(token, SECRET_KEY);

  if (!verifiedToken) {
    return res.status(401).json({ error: "invalid token" });
  }

  const allUserPosts = await PostModel.find({
    userID: verifiedToken.id,
  }).exec();

  return res.json({ documents: allUserPosts });
});
