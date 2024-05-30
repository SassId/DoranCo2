import { StyleSheet } from "react-native";
export const contactStyle = StyleSheet.create({
  formWrapper: {
    border: "solid slateblue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    padding: "20px",
    margin: "30px",
    borderRadius: "20px",
  },
  inputs: {
    border: "1px solid black",
    borderRadius: "10px",
    padding: "10px",
  },
  //   submitButtons: {
  //     backgroundColor: "slateblue",
  //     padding: "10px",
  //     borderRadius: "10px",
  //     color: "white",
  //   },
  title1: {
    textAlign: "center",
    padding: "10px",
    margin: "20px",
    color: "slateblue",
    fontWeight: "bold",
    fontSize: "2em",
  },
});
