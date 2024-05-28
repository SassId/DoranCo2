import {
  View,
  Text,
  TextInput,
  KeyboardTypeOptions,
  StyleSheet,
} from "react-native";

type InputProps = {
  placeholder: string;
  action: (text: string) => void;
  type: KeyboardTypeOptions;
  error: string;
};

const InputWithError = ({ placeholder, action, type, error }: InputProps) => {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        onChangeText={action}
        keyboardType={type}
        style={InputWithErrorStyle.input}
      ></TextInput>
      <Text style={InputWithErrorStyle.text}>{error}</Text>
    </View>
  );
};

// ! React Native doesn't accept one lined shorcuts for css rule
// ! React Native doesn't take dimension value as string but as numbers
const InputWithErrorStyle = StyleSheet.create({
  input: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 10,
  },
  text: {
    color: "palevioletred",
  },
});

export default InputWithError;
