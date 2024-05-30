import React from "react";
import { Tabs } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Log In",
          tabBarIcon: ({ color }) => (
            <Entypo name="login" size={24} color="black" />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="signin"
        options={{
          title: "Sign In",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="sign-in" size={24} color="black" />
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
}
