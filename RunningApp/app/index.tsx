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
import CreateCommunity from "./(tabs)/CreateCommunity";
import ComunityDetail from "./(tabs)/ComunityDetail";
import TaskDetail from "./(tabs)/TaskDetail";
import Community from "./(tabs)/Community";
import { RecoilRoot } from "recoil";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <RecoilRoot>
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
          <Stack.Screen
            name="Community"
            component={Community}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CreateCommunity"
            component={CreateCommunity}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ComunityDetail"
            component={ComunityDetail}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TaskDetail"
            component={TaskDetail}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default App;
