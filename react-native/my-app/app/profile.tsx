import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useContext } from "react";
import { UserContext } from "./_layout";

export default function profile() {
  const user = useContext(UserContext);
  console.log(user);

  return (
    <View style={{ ...userCard.container, ...userCard.shadow }}>
      <Text style={userCard.welcome}>Welcome</Text>
      <Text style={userCard.userEmail}>{user.user.email}</Text>
    </View>
  );
}

const userCard = StyleSheet.create({
  container: {
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    width: 400,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "red",
  },
  shadow: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  welcome: {
    color: "red",
    fontSize: 50,
    // textAlign: "center",
  },
  userEmail: {
    color: "orange",
  },
});

