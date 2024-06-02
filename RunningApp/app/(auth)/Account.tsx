import { View, Text, TextInput } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function Account() {
  return (
    <View className="pt-10 px-5 bg-neutral-100">
      <Text className="font-bold text-2xl mb-20">Account</Text>
      <View className="mb-5">
        <Text className="text-sm text-neutral-500 mb-3">Name</Text>
        <TextInput className="bg-white p-1" />
      </View>

      <View className="mb-5">
        <Text className="text-sm text-neutral-500 mb-3">Email</Text>
        <TextInput className="bg-white p-1" />
      </View>

      <View className="mb-5">
        <Text className="text-sm text-neutral-500 mb-3">Password</Text>
        <TextInput secureTextEntry={true} className="bg-white p-1" />
      </View>

      <View className="mb-10">
        <Text className="text-sm text-neutral-500 mb-3">
          Password Confirmation
        </Text>
        <TextInput secureTextEntry={true} className="bg-white p-1" />
      </View>

      <View>
        <LinearGradient
          // Button Linear Gradient
          colors={["#6500e0", "#b000e0"]}
          className="py-3 mb-5"
        >
          <Text className="text-white font-semibold text-center text-lg">
            LOG IN
          </Text>
        </LinearGradient>
      </View>
    </View>
  );
}
