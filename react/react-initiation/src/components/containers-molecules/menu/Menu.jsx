//TODO: Exercice:
// Créez un composant ‘Menu’ contenant un bouton.
// Ajouter un gestionnaire d’événement au bouton de tel sort à afficher ou cacher un menu.

// Créer un composant Menu:
// Recevoir en props children(Element a cacher), titre: tire a afficher.
// Afficher le titre dans un h3
// Créer une var d'état initialiser a false
// Utiliser un op ternaire pour afficher ou cacher les children suivant l'etat de variable
// Ajouter un bouton, quand on clique dessus, il va inverser la variable d'état.

import { useState } from "react";

export default function Menu({ children, titre }) {
  const [isOpen, setIsOpen] = useState(false);
  function openMenu() {
    setIsOpen(!isOpen);
    
  }

  return (
    <div>
      <h3>{titre}</h3>
      <button onClick={() => openMenu()}>{isOpen ? "Less" : "More"}</button>
      <div>
        {isOpen ? children : null}</div>
      
    </div>
  );
}
