import { View, Text, ScrollView, TextInput, Button, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { GgIcon } from "@/assets/icons/icon";
import { LinearGradient } from "expo-linear-gradient";
import { CheckBox } from "react-native-elements";
import { Checkbox } from "native-base";

const LogIn = ({navigation}:any) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="pt-20 pb-10 px-10 bg-neutral-100">
          <View className="flex justify-between mb-10 flex-row items-center">
            <Text className="text-5xl font-medium">Log In</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}><Text className="text-sm font-medium">Sign In</Text></TouchableOpacity>
          </View>


          <View className="mb-5">
            <Text className="text-sm text-neutral-500 mb-3">Email</Text>
            <TextInput className="bg-white p-1" />
          </View>

          <View className="mb-5">
            <Text className="text-sm text-neutral-500 mb-3">Password</Text>
            <TextInput secureTextEntry={true} className="bg-white p-1" />
          </View>

          <View className="mb-10 flex justify-between items-center flex-row">
            <View className="flex flex-row items-center">

            <Checkbox aria-label="cb" value=""/>

              <Text className="text-neutral-500 font-light ml-2">Remember me</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("EnterEmail")}><Text className="font-medium text-violet-600">Forgot Password ?</Text></TouchableOpacity>
          </View>

          <TouchableOpacity
          onPress={() => {navigation.navigate("Home")}}
          >
            <LinearGradient
              // Button Linear Gradient
              colors={["#6500e0", "#b000e0"]}
              className="py-3 mb-5"
            >
              <Text className="text-white font-semibold text-center text-lg">
                Log In
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* <View className="mb-5 py-4 bg-violet-800">
            <Text className="text-white font-semibold text-center">LOG IN</Text>
          </View> */}

          <View className="mb-5">
            <Text className="text-sm text-center text-neutral-500 font-light">
              Or log in with:
            </Text>
          </View>

          <View className="py-3 flex justify-center flex-row bg-white">
            <Image
              resizeMode="contain"
              className="w-1/12 h-5"
              source={require("@/assets/icons/google.png")}
            />
          </View>

          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LogIn;
