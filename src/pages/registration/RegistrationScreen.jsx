import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";
import styles from "./registration-style";
import { useForm, Controller } from "react-hook-form";
import { sendVerificationCode } from "../../service/api";

const RegistrationScreen = ({ navigation }) => {
  const { control, handleSubmit } = useForm();

  const screenHeight = Dimensions.get("window").height;

  const onSubmit = async (data) => {
    const response = await sendVerificationCode(data.phoneNumber);
    if (response.status === "success") {
      Alert.alert("Success", "Verification code sent.");
      navigation.navigate("Verification");
    } else {
      Alert.alert("Error", response.message);
    }
  };

  const fields = [
    {
      name: "firstName",
      placeholder: "Enter your first name",
      label: "First Name",
      keyboardType: "default",
      rules: { required: "First name is required" },
    },
    {
      name: "lastName",
      placeholder: "Enter your last name",
      label: "Last Name",
      keyboardType: "default",
      rules: { required: "Last name is required" },
    },
    {
      name: "phoneNumber",
      placeholder: "+38 066 00 00 000",
      label: "Phone Number",
      keyboardType: "phone-pad",
      rules: { required: "Phone number is required" },
    },
  ];

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.container, { paddingTop: screenHeight * 0.15 }]}>
        <Text style={styles.headerText}>Welcome to App</Text>
        <Text style={styles.secondaryText}>Please enter your details.</Text>
        {fields.map(({ name, placeholder, keyboardType, rules, label }) => (
          <View key={name} style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <Controller
              control={control}
              rules={rules}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder={placeholder}
                  keyboardType={keyboardType}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name={name}
              defaultValue=""
            />
          </View>
        ))}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.buttonText}>Send Code</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.linkContainer}>
          <Text style={styles.linkText}>Do you have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;
