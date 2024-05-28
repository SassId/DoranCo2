import { useState } from "react";
import React from "react";
import { StyleSheet, Text, View, TextInput, Alert } from "react-native";
import { contactStyle } from "../../styles/contact";
import Button from "@/components/Button/Button";
import InputWithError from "@/components/InputWithError/InputWithErro";
import TextArea from "@/components/TextArea/TextArea";
import { Link } from "expo-router";

export default function contact() {
  const [emailInput, setEmailInput] = useState("");
  const [emailError, setEmailError] = useState("");

  // ! We need to type the props
  function handleEmail(text: string) {
    setEmailError("");
    setEmailInput(text);
    if (text == "") {
      return setEmailError("please enter your email");
    }
    if (!text.includes("@")) {
      setEmailError("please enter a valid email");
    }
  }

  const [messageInput, setMessageInput] = useState("");
  const [messageError, setMessageError] = useState("");

  function handleMessage(text: string) {
    setMessageError("");
    setMessageInput(text);
    if (text == "") {
      setMessageError("please enter your message");
    }
  }

  // Since in JS everything is an object, we can use the array as an object with the keys as indexed to create a dynamic function
  // const [state, setState] = useState({ email: "", message: "" });
  // function handleInput(key, text) {
  //   setState({
  //     ...state,
  //     [key]: text,
  //   });
  // }

  function submit() {
    alert(messageInput);
  }

  return (
    <View>
      <Link href={"/contact/info"}>Informations</Link>
      <Text style={contactStyle.title1}>Join Us Today !</Text>
      <View style={contactStyle.formWrapper}>
        <InputWithError
          placeholder="enter your email"
          error={emailError}
          action={(text) => handleEmail(text)}
          type="default"
        ></InputWithError>
        <InputWithError
          placeholder="enter your message"
          error={messageError}
          action={(text) => handleMessage(text)}
          type="default"
        ></InputWithError>
        <TextArea
          placeholder="pleaser enter your message"
          numberOfLines={10}
          action={(text) => handleMessage(text)}
          error={messageError}
        ></TextArea>

        {/* <TextInput
          style={contactStyle.inputs}
          placeholder="enter your email"
          keyboardType="email-address"
          onChangeText={handleEmail}
        ></TextInput>
        <Text>{emailError}</Text>
        <TextInput
          style={contactStyle.inputs}
          placeholder="enter your message"
          multiline={true}
          numberOfLines={5}
          onChangeText={handleMessage}
        ></TextInput>
        <Text>{messageError}</Text> */}
        <Button style={contactStyle} label="Submit" action={submit}></Button>
      </View>
    </View>
  );
}

// TODO:
// Exercice:
// Créer un formulaire de contact avec:
// Email: obligatoire sinon message d'erreur
// Message: obligatoire sinon message d'erreurs
// Un bouton pour valider le formulaire
// Quand on clique sur le bouton, afficher une alerte avec le message
// Styliser le formulaire

// TODO:
// Exercice:
// Créer le composant InputAvecError (/components/InputAvecError/InputAvecError.jsx):
// Le composant reçoit 4 props:
// Le placeholder, action(fonction a lier avec le onChangeText), type (Le type de clavie), error (Le message d'erreure a afficher sous l'input)

// Remplacer le composant input et son erreur dans contact.jsx

// TODO:
// Exercice:
// Créer le composant TextArea (/components/TextArea/TextArea.jsx):
// Le composant reçoit: placeholder, nombreLignes, error et action
// Stylise le composant
// Remplacer le composant textInput dans contact
