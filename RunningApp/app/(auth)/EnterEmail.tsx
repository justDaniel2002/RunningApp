import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EnterEmail({navigation}:any) {
  return (
    <SafeAreaView className="bg-neutral-100 pt-20 px-10">
      <Text className="text-sm text-neutral-500 mb-5">
        Enter your email below, we will send intruction to reset your password
      </Text>
      <TextInput className="p-2 bg-white mb-10" />

      <TouchableOpacity
       onPress={() => navigation.navigate('EnterOTP')}
      >
        <LinearGradient
          // Button Linear Gradient
          colors={["#6500e0", "#b000e0"]}
          className="py-3 mb-5"
        >
          <Text className="text-white font-semibold text-center">SUBMIT</Text>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
