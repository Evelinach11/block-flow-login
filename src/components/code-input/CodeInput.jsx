import React, { useRef } from "react";
import styles from "./codeInput-style";
import { TextInput, View } from "react-native";

const CodeInput = ({ length, value, disabled, onChange }) => {
  const inputRefs = useRef(Array(length).fill(null));

  const onChangeValue = (text, index) => {
    const newValue = [...value];
    newValue[index] = text;
    onChange(newValue);
  };

  const handleChange = (text, index) => {
    onChangeValue(text, index);

    if (text.length > 0 && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    } else if (text.length === 0 && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleBackspace = (event, index) => {
    if (event.nativeEvent.key === "Backspace" && value[index] === "") {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      {Array.from({ length }).map((_, index) => {
        const inputStyle = value[index]
          ? [styles.input, styles.inputActive]
          : styles.input;

        return (
          <TextInput
            key={index}
            ref={(ref) => (inputRefs.current[index] = ref)}
            maxLength={1}
            contextMenuHidden
            selectTextOnFocus
            editable={!disabled}
            style={inputStyle}
            keyboardType="number-pad"
            value={value[index]}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(event) => handleBackspace(event, index)}
            placeholder={"0"}
          />
        );
      })}
    </View>
  );
};

export default CodeInput;
