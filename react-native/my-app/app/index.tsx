import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Creates a link */}
      {/* <Link href={"/contact"}
      style={LinkStyle.button}>Contact Us</Link> */}
      <Text>Welcome</Text>
      <Link href={"/authentification"}>Your Account</Link>
    </View>
  );
}

const LinkStyle = StyleSheet.create({
  button: {
    backgroundColor: "slateblue",
    padding: 10,
    borderRadius: 10,
    color: "white",
  },
});

// TODO:
// Exercice:
// Le but de l'exo est d'avoir une page d'authentification (connexion et inscription):

// Créer un dossier authentification avec:
// _layout: utilise la navigation en tab
// index.jsx: Forumaire de connexion
// register.jsx: Formulaire d'inscription
