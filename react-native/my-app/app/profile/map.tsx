import { Text, View, StyleSheet } from "react-native";
import MapView from "react-native-maps";

//TODO:
// Exercice:
// 1. Ajouter une nouvelle route dans le dossier profile (map.jsx)
// 2. Utiliser la doc d'Expo pour afficher une carte (MapView)
// 3. Utiliser la doc d'Expo pour récuperer la location de l'utilisateur et l'afficher dans une alerte.

export default function map() {
  return (
    <View style={mapStyle.container}>
      <MapView style={mapStyle.map} mapType="hybrid"></MapView>
    </View>
  );
}

const mapStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
