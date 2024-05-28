import { View, Text, TextInput, StyleSheet } from "react-native";

type TextAreaProps = {
  placeholder: string;
  numberOfLines: number;
  error: string;
  action: (text: string) => void;
};

const TextArea = ({
  placeholder,
  numberOfLines,
  error,
  action,
}: TextAreaProps) => {
  return (
    <View>
      <TextInput
        multiline={true}
        placeholder={placeholder}
        numberOfLines={numberOfLines}
        onChangeText={action}
        style={TextAreaStyle.input}
      ></TextInput>
      <Text>{error}</Text>
    </View>
  );
};

const TextAreaStyle = StyleSheet.create({
  input: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 10,
  },
});

export default TextArea;

// TODO: add a stylesheet
