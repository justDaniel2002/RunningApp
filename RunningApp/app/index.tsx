import { View, Text, ScrollView, TextInput, Button } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "./(auth)/SignUp";
import LogIn from "./(auth)/LogIn";
import EnterEmail from "./(auth)/EnterEmail";
import EnterOTP from "./(auth)/EnterOTP";
import EnterNewPassword from "./(auth)/EnterNewPassword";
import Home from "./(tabs)/Home";
import Account from "./(auth)/Account";
import ProgressDetail from "./pages/ProgressDetail";
import Schedule from "./pages/Schedule";
import Tasks from "./(tabs)/Tasks";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EnterEmail"
          component={EnterEmail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EnterOTP"
          component={EnterOTP}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EnterNewPassword"
          component={EnterNewPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Account"
          component={Account}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProgressDetail"
          component={ProgressDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Schedule"
          component={Schedule}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tasks"
          component={Tasks}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
