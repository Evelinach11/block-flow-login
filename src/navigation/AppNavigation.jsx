import React from "react";
import Profile from "../components/Profile";
import MainScreen from "../pages/main/MainScreen";
import LoginScreen from "../pages/login/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Verification from "../components/verification/Verification";
import RegistrationScreen from "../pages/registration/RegistrationScreen";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="MainScreen">
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="Verification" component={Verification} />
      <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
