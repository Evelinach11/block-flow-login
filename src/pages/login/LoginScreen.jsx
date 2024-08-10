import {
  View,
  Text,
  TextInput,
  Dimensions,
  Alert,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import styles from "./login-style";
import React, { useState } from "react";

const LoginScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const screenHeight = Dimensions.get("window").height;

  const handleLogin = () => {
    if (phoneNumber.length === 10) {
      navigation.navigate("Profile");
    } else if (phoneNumber.length < 10) {
      Alert.alert("Error", "Your phone number must be exactly 10 digits long");
    } else {
      Alert.alert("Error", "Please enter a valid 10-digit phone number");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.container, { paddingTop: screenHeight * 0.15 }]}>
        <Text style={styles.headerText}>Welcome to App</Text>
        <Text style={styles.secondaryText}>
          Please enter your phone number.
        </Text>
        <Text style={styles.label}>Phome number</Text>

        <TextInput
          style={styles.input}
          placeholder="+38 066 00 00 000"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.linkContainer}>
          <Text style={styles.linkText}>Don’t have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("RegistrationScreen")}
          >
            <Text style={styles.link}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
