import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={style.container}>
      <Text style={style.title}>Salut</Text>
    </View>
  );
}

// ! There is no more HTML so we have to use Native Components

// ! There is no more CSS either so we have to use Native Stylesheet:

// *Create Classes
const style = StyleSheet.create({
  container: {
    backgroundColor: "slateblue",
  },
  title: {
    color: "white",
    margin: "auto",
  },
});
