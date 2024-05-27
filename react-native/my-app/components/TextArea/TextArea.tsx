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
      ></TextInput>
      <Text>{error}</Text>
    </View>
  );
};

export default TextArea;
