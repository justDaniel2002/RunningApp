import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Settings = ({navigation}:any) => {
  return (
    <View className="pt-10 px-5 bg-neutral-100">
      <Text className="font-bold text-2xl mb-16">Settings</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Account")} className="bg-neutral-200 py-2 px-3 flex flex-row mb-7">
        <Text className="font-bold text-xl">Account</Text>
      </TouchableOpacity>
      <View className="bg-neutral-200 py-2 px-3 flex flex-row mb-7">
        <Text className="font-bold text-xl">Term and Condition</Text>
      </View>
      <View className="bg-neutral-200 py-2 px-3 flex flex-row mb-7">
        <Text className="font-bold text-xl">Policy</Text>
      </View>
      <View className="bg-neutral-200 py-2 px-3 flex flex-row mb-7">
        <Text className="font-bold text-xl">About App</Text>
      </View>
    </View>
  );
};

export default Settings;
