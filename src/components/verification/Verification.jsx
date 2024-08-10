import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import styles from "./verification-style";
import CodeInput from "../code-input/CodeInput";
import React, { useState, useEffect } from "react";
import { sendVerificationCode } from "../../service/api";

const Verification = ({ navigation }) => {
  const [verificationCode, setVerificationCode] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const correctCode = "123456";

  const screenHeight = Dimensions.get("window").height;

  useEffect(() => {
    setIsButtonEnabled(verificationCode.every((code) => code.length > 0));
  }, [verificationCode]);

  const showAlert = (title, message) => {
    Alert.alert(title, message);
  };

  const handleVerifyCode = () => {
    const code = verificationCode.join("");
    if (code === correctCode) {
      showAlert("Code Verified", "The verification code is correct.");
      navigation.navigate("Profile");
    } else if (code) {
      showAlert("Error", "The verification code is incorrect.");
    } else {
      showAlert("Error", "Please enter the verification code.");
    }
  };

  const handleResendCode = async () => {
    try {
      await sendVerificationCode();
      showAlert("Success", "Verification code has been resent.");
    } catch (error) {
      showAlert("Error", "Failed to resend code.");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.container, { paddingTop: screenHeight * 0.15 }]}>
        <Text style={styles.headerText}>Welcome to App</Text>
        <Text style={styles.secondaryText}>
          Enter the confirmation code that was sent{"\n"} to you by SMS
        </Text>
        <Text style={styles.label}>Secure Code</Text>
        <CodeInput
          length={6}
          value={verificationCode}
          disabled={false}
          onChange={setVerificationCode}
        />
        <View style={styles.linkContainer}>
          <TouchableOpacity onPress={handleResendCode}>
            <Text style={styles.link}>Resend the Code</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, { opacity: isButtonEnabled ? 1 : 0.5 }]}
            onPress={handleVerifyCode}
            disabled={!isButtonEnabled}
          >
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Verification;
