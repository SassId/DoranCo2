// * Library to manage the states
import React from "react";
// *Library to render the application in the html et to updtate elements
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// *SPA = Single Page Application (a website created dynmically with react)
// *SSR = Server Side Rendering (the website is created dynamically in react and then constructed on the server's side and then the html is sent to the web browser

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

// Create an objet 'user with 2 keys: firstname and lastname
const user = {
  firstname: "Roo",
  age: 223,
};

// *  A component is a React Function taking an object as a parameter and that returns JSX
function Button(props) {
  return (
    <button style={{ backgroundColor: "royalblue", color: "white" }}>
      {props.label}
    </button>
  );
}

function ContactForm() {
  return (
    <form>
      <input type="text" placeholder="name" />
      <input type="text" placeholder="age" />
      {Button({ label: "Validate" })}
    </form>
  );
}

// ! we can also use variable like so
// function ContactForm() {
//  const buttonProps = {label: 'validate'}
//   return (
//     <form>
//       <input type="text" placeholder='name' />
//       <input type="text" placeholder='age' />
//       {Button(buttonProps)}
//     </form>
//   )
// }

// ?Ternary Function is a conditon written in one line:
//age > 18 ? "Majeur" : "Mineur"

// *Rendering of the app inside the html page by using the ReactDOM library
// *This is called the App's Entry Point
ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <Titre text="Created in JSX with React"></Titre>
    <Titre>Hello World</Titre>
    {/* equals to */}
    {/* {Titre({text: 'Created in JSX with React'})}  */}
    <p>{user.age > 18 ? "Legal" : "Mineur"}</p>
    {ContactForm()}
    {Button({ label: "Contact me" })}
    <Button label="Delete"></Button>
    <Btn text="Change" type="primary"></Btn>
    <Btn text="Unchange" type="danger"></Btn>
    <Card>
      <Titre>Hello World</Titre>
      <Btn text="Change" type="primary"></Btn>
      <Btn text="Unchange" type="danger"></Btn>
    </Card>
  </div>
);

// TODO: Exercice
// Créer un composant Titre qui reçoit un parametre de type objet avec la clé text.
// Modifier le composant pour utiliser children
// Dans le composant affiché un h1 en utilisant l'objet reçue en props pour le text du titre
// Ajouter Du style au titre pour changer sa couleur et sa taille
// Utiliser le composant dans le render pour l'afficher

// function Titre(props){
//   const myStyle = {color: "red", fontSize: "100px"}
// return (
//   <h1 style={myStyle}>{props.text}</h1>
// )
// }

// ! We can add text direclty inside the jsx component tags like so:
function Titre({ children }) {
  return <h1>{children}</h1>;
}

// TODO: Exercice2
// Créer un composant: Btn: qui recoit en paramètre 2 clé:
// - text: string
// - type: "primary": blue, 'secondary': blanc, 'danger': rouge.

// Utiliser des condition/op ternaire/switch case. pour determiner la couleur du bouton
// return button avec le text la couleur.

// Afficher deux bouton dans l'applicaion un rouge et un bleu

// ?Method #1
// function Btn(props) {
//   let couleur = ''
//   if (props.type == 'primary'){
//     couleur = "blue"
//   } else if (props.type == 'secondary'){
//     couleur = "white"
//   } else {
//     couleur = "red"
//   }
//   return (
//     <button style = {{backgroundColor: couleur}}>{props.text}</button>
//   )
// }

// ?Method1b (the cleanest one)

function Btn(props) {
  console.log(props);
  function getColor() {
    if (props.type === "primary") return "blue";
    if (props.type === "secondary") return "white";
    if (props.type === "danger") return "red";
  }
  console.log(getColor());
  return <button style={{ backgroundColor: getColor() }}>{props.text}</button>;
}

// ?Method #2
// function Btn(props) {
//   let color = props.type == 'primary' ? 'blue' : props.type == 'secondary' ? 'white' : props.type == 'danger' ? 'red':"green"

// return (
//   <button style = {{backgroundColor:color}} >{props.text}</button>
// )
// }

// // ?Method #3
// function Btn(){
//   let color = ''
//   switch (props.type) {
//     case 'primary':
//       color = 'blue'
//       break;
//     case 'secondary':
//       color = 'white'
//       break;
//     case 'danger':
//       color = 'red'
//     break;
//     default:
//     color = green
//   }
//   return (
//     <button style={{backgroundColor: color}}>{props.text}</button>
//   )
// }

function Div({ direction, children }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction === "horizontal" ? "row" : "column",
      }}
    >
      {children}
    </div>
  );
}

//TODO: Exercice3
// Créer un composant Card qui recoit juste des children
// Le composant va afficher les enfants dans un div avec:
// Une bordure, centrer les élément, de l'ombre, et un padding

function Card({ children }) {
  return (
    <div
      style={{
        border: "solid 1px green",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "5px 5px 10px",
        padding: "20px",
      }}
    >
      {children}
    </div>
  );
}

// ! JSX  elements have to be nested inside a parent. 
//! for example: 
// return (

//   <div>
//     <h1></h1>
//     <p></p>
//   </div>
// )

//! if you don't wanna have a div added to the html, you can use React fragments like so (empty opening and closing tags) :
{/* <>
<h1></h1>
<p></p>
</> */}

// ! When you use the map function of an array, you have to specify a unique key for each element:
// ! either a unique id if you plan on changing the position of the element in the newly returned array (map()) returns a new array
// ! or by using the position parameter
// ! like so
const users = [
  {
    id: "1", 
    firstname: "john",
    lastname: "doe",
  }, 

  {
    id: "2", 
    firstname: "jane", 
    lastname: "nom",
  },
];

return (
  {users.map((user, position) => {
    <p key={position}> {user.firstname} {user.lastname} </p>
  })}
)
return (
  {users.map}
)