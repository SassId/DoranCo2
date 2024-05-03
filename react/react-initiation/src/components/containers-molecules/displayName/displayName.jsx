//TODO: Exercice:
// Créer AfficheNom
// Input pour entrer un valeur
// Utiliser une variable pour stocker les entrées de l'utilisateur
// Afficher la variable dans un titre

import { useState } from "react";

export default function DisplayName() {
  const [display, setDisplay] = useState("");

  function displayInput(e) {
    console.log(e.target.value);
    setDisplay(e.target.value);
  }

  return (
    <>
      <input type="text" onChange={(e) => displayInput(e)} />
      <h2>{display}</h2>
    </>
  );
}
