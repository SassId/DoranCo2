//TODO: Exercice:
// Créer un composant (SigninForm) formulaire qui demande : username, email et password.
// Utiliser les variables d’état pour stocker les entrées de l’utilisateur.
// Ajouter un bouton qui affiche le ‘username’ et ‘email’ dans une boîte d’alerte.

import { useState } from "react";

export default function SignuForm() {
  const [username, setUserName] = useState("");
  function getUserName(e) {
    setUserName(e.target.value);
  }

  const [email, setEmail] = useState("");
  function getEmail(e) {
    setEmail(e.target.value);
  }

  const [password, setPassword] = useState("");
  function getPassword(e) {
    setPassword(e.target.value);
  }
  
  function displayUser() {
    // alert(username + " " + email);
    alert(`salut ${username} ${email}`);
  }

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
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          placeholder="enter your email"
          onChange={(e) => getEmail(e)}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          placeholder="enter your password"
          onChange={(e) => getPassword(e)}
        />
      </form>
      <button onClick={displayUser}>Click</button>
    </div>
  );
}
