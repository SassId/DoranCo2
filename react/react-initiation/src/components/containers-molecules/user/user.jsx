// TODO: Exercice:
// Créer un composant User.
// Le composant comprendra 3 autres composants :

//     Avatar : un composant qui affiche une image circulaire.
//     FullName: un composant contenant lui aussi deux composants :
//         FirstName: affiche un prénom.
//             LastName: affiche un nom.
//     Hobbies : un composant contenant une liste de passions/compétences.
//     Contact : Un composant qui affiche l’email et le téléphone  accompagné d'icônes.

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

  return <div>user</div>;
}
