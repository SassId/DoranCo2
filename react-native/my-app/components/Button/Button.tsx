import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

// *Store in a variable the type of the button (ButtonProps) so that we can reuse the statement later
type ButtonProps = { action: () => void; label: string; style: object };

// *Declare the types of each props we want to use in the button component
const Button = ({ action, label, style }: ButtonProps) => {
  return (
    <TouchableOpacity style={buttonStyle.button} onPress={action}>
      <Text style={buttonStyle.label}>{label}</Text>
    </TouchableOpacity>
  );
};

// *A good practice is to not use the style as a props in the components but to use a stylesheet for the component name (the name in the .tsx file)
const buttonStyle = StyleSheet.create({
  button: {
    backgroundColor: "slateblue",
    padding: 10,
    borderRadius: 10,
  },
  label: {
    color: "white",
  },
});

export default Button;
