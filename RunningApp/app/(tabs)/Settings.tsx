import { View, Text } from "react-native";
import React from "react";

const Settings = () => {
  return (
    <View className="pt-10 px-5 bg-neutral-100">
      <Text className="font-bold text-2xl mb-20">Settings</Text>
      <View className="bg-neutral-200 py-2 px-3 flex flex-row">
        <Text className="font-bold mb-3">Account</Text>
      </View>
      <View className="bg-neutral-200 py-2 px-3 flex flex-row">
        <Text className="font-bold mb-3">Term and Condition</Text>
      </View>
      <View className="bg-neutral-200 py-2 px-3 flex flex-row">
        <Text className="font-bold mb-3">Policy</Text>
      </View>
      <View className="bg-neutral-200 py-2 px-3 flex flex-row">
        <Text className="font-bold mb-3">About App</Text>
      </View>
    </View>
  );
};

export default Settings;
