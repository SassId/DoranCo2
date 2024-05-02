// TODO: Exercice:
// Créer un composant ‘Header’ contenant un titre, une description, une image et un bouton.
// Styliser le composant en utilisant les module CSS, de manière à qu’il soit responsive.
// Ajouter le header dans App.js, pour l’afficher.

import myClass from "./header.module.css";

export default function Header() {
   return (
    <div className={myClass.headerContainer}><h1>Full Moon Sonata</h1>
    <p>Under the celestial glow of the full moon, nature orchestrates its own sonata, a symphony of light and shadow dancing across the night sky.</p>
    <img src="https://cdn.mos.cms.futurecdn.net/xXp45gLeBTBt4jPuZcawUJ-970-80.jpg.webp" alt="full moon on black background" />
    </div>
   )
}



