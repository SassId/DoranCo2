import React from "react";
import { Stack } from "expo-router";

const profileLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Profile",
        }}
      ></Stack.Screen>
    </Stack>
  );
};


export default profileLayout;
