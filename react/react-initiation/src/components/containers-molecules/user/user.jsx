// TODO: Exercice:
// Créer un composant User.
// Le composant comprendra 4z autres composants :

//     Avatar : un composant qui affiche une image circulaire.
//     FullName: un composant contenant lui aussi deux composants :
//         FirstName: affiche un prénom.
//             LastName: affiche un nom.
//     Hobbies : un composant contenant une liste de passions/compétences.
//     Contact : Un composant qui affiche l’email et le téléphone  accompagné d'icônes.

import Avatar from "../../ui-atoms/avatar/Avatar";
import FullName from "../../ui-atoms/fullName/FullName";
import Hobbies from "../../ui-atoms/hobbies/Hobbies";
import Contact from "../../ui-atoms/contact/Contact";

export default function User() {
  const userFormDB = {
    avatar: "/tiger.jpg",
    fullname: {
      firstname: "Rajah",
      lastname: "Ashinga",
    },
    hobbies: [
      {
        id: "1",
        title: "HTML",
        exp: "75",
      },
      {
        id: "2",
        title: "CSS",
        exp: "80",
      },
      {
        id: "3",
        title: "JS",
        exp: "80",
      },
      {
        id: "4",
        title: "React",
        exp: "40",
      },
    ],
    contact: {
      email: "roo.rajah@redmail.com",
      tel: "555 7865 0241",
    },
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "20px",
          boxShadow: "5px 5px 10px gray",
          borderRadius: "20px",
          backgroundColor: "royalblue"
        }}
      >
        <Avatar
          url={userFormDB.avatar}
          style={{ borderRadius: "50%", width: "200px" }}
        ></Avatar>
        <FullName fullname={userFormDB.fullname}></FullName>
        <Contact style= {{border: 'solid red',}}
          email={userFormDB.contact.email}
          tel={userFormDB.contact.tel}
        ></Contact>
      </div>
      <Hobbies hobbies={userFormDB.hobbies}></Hobbies>
    </div>
  );
}
