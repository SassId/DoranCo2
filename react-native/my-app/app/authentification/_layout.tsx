import React from "react";
import { Tabs } from "expo-router";

export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Log In",
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="signin"
        options={{
          title: "Sign In",
        }}
      ></Tabs.Screen>
    </Tabs>
  );
}
