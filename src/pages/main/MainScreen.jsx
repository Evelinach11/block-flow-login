import React from "react";
import styles from "./main-style";
import { View, Text, TouchableOpacity, Image } from "react-native";

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.containerMainScreen}>
      <Image source={require("../../../assets/images/main-icon.png")} />
      <Text style={styles.welcome}>Welcome to App</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet consectetur. A ut pellentesque amet phasellus
        augue. Neque at felis pulvinar malesuada varius egestas dis cras.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("LoginScreen")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.transparentButton}
        onPress={() => navigation.navigate("RegistrationScreen")}
      >
        <Text style={styles.transparentButtonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainScreen;
