//TODO: Exercice:
// Créer un composant (SigninForm) formulaire qui demande : username, email et password.
// Utiliser les variables d’état pour stocker les entrées de l’utilisateur.
// Ajouter un bouton qui affiche le ‘username’ et ‘email’ dans une boîte d’alerte.

import { useState } from "react";

export default function SignuForm() {
  //1. Creér une variable d'état pour chaque input
  const [username, setUserName] = useState("");

  // Créer une variable d'état pour un message d'état pour afficher un message d'erreur
  const [usernameError, setusernameError] = useState('')

  //2. Créer une fonction qui va changer la variable d'état pour chaque input
  function getUserName(e) {
    setUserName(e.target.value);
    setusernameError('')
  }

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState('')
  function getEmail(e) {
    setEmail(e.target.value);
    setEmailError('')
  }

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState('')
  function getPassword(e) {
    setPassword(e.target.value);
    setPasswordError('')
  }

  //3. Créer la fonction qui s'execute quand on clique sur le bouton
  function displayUser(e) {
    e.preventDefault()
    if (username === '' || email === '' || password === '') {
        setusernameError('please enter your name');
        setEmailError('please enter you email')
        setPasswordError('please enter your password')
        return;
    }
    // alert(username + " " + email);
    alert(`salut ${username} ${email}`);
  }

  //4. Lier les variables et les fonctions avec les éléments html
  return (
    <div>
      <form style={{ marginBlock: "30px" }}>
        <label htmlFor="name">Username: </label>
        <input
          type="text"
          id="name"
          placeholder="enter your name"
          onChange={(e) => getUserName(e)}
        />
        <p style={{color:'red'}}>{usernameError}</p>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          placeholder="enter your email"
          onChange={(e) => getEmail(e)}
        />
        <p style={{color:'red'}}>{emailError}</p>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          placeholder="enter your password"
          onChange={(e) => getPassword(e)}
        />
        <p style={{color:'red'}}>{passwordError}</p>
        <button onClick={displayUser}>Submit</button>
      </form>
    </div>
  );
}
