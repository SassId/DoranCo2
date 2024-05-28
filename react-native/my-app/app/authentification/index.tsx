import React, { useState } from "react";
import { View, Text } from "react-native";
import InputWithError from "@/components/InputWithError/InputWithErro";
import { getEmailError, getPasswordError } from "@/utilities/validation";
import Button from "@/components/Button/Button";
import { contactStyle } from "@/styles/contact";

export default function index() {
  const [userInput, setUserInput] = useState({
    email: { value: "", error: "" },
    password: { value: "", error: "" },
  });

  function handleInput(key: string, value: string) {
    let error = "";
    if (key === "email") {
      error = getEmailError(value);
    }
    if (key === "password") {
      error = getPasswordError(value);
    }

    setUserInput({
      ...userInput,
      [key]: {
        value: value,
        error: error,
      },
    });
  }

  function submit() {
    alert(userInput.email.value);
  }
  return (
    <View style={contactStyle.formWrapper}>
      <InputWithError
        placeholder="enter your email"
        error={userInput.email.error}
        action={(text) => handleInput("email", text)}
        type="default"
      ></InputWithError>
      <InputWithError
        placeholder="enter your password"
        error={userInput.password.error}
        action={(text) => handleInput("password", text)}
        type="default"
      ></InputWithError>
      <Button style={contactStyle} label="Submit" action={submit}></Button>
    </View>
  );
}
