// TODO: Exercice:
// Créer un composant ‘Header’ contenant un titre, une description, une image et un bouton.
// Styliser le composant en utilisant les module CSS, de manière à qu’il soit responsive.
// Ajouter le header dans App.js, pour l’afficher.

import myClass from "./header.module.css";

function AlertMe(){
  alert('hey there');
}

export default function Header() {
  return (
    <div className={myClass.headerContainer}>
      <h1>Full Moon Sonata</h1>
      <p>
        Under the celestial glow of the full moon, nature orchestrates its own
        sonata, a symphony of light and shadow dancing across the night sky.
      </p>
      <img
        src="https://cdn.mos.cms.futurecdn.net/xXp45gLeBTBt4jPuZcawUJ-970-80.jpg.webp"
        alt="full moon on black background"
      />
      <button onClick={()=> {AlertMe()}} >Enter</button>
    </div>
  );
}

// ! To use images:
// ! - put the image in the /public folder and use /name.jpg in the img src
// ! - put the image in the /assets folder and import it inside the component and then use the src attribute in the img with as an objet
// ! ex: import image from ./... ; 
// ! <img src={image}