import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { CheckIcon, Select } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

export default function CreateCommunity() {
  return (
    <SafeAreaView className="py-10 px-5">
      <Text className="text-2xl font-bold mb-10">Community</Text>
      <View className="mb-5 py-2 flex flex-row justify-between border-b">
        <Text className="text-lg font-bold">Create New Community</Text>
        <Icon name="close" />
      </View>

      <Text className="mb-1">Group goal</Text>
      <TextInput className="mb-3 border border-neutral-300 p-2"/>
      <Text className="mb-1">Group name</Text>
      <TextInput className="mb-3 border border-neutral-300 p-2"/>

      <View className="mb-3 flex flex-row justify-between items-center">
        <Text>Period</Text>
        <Select
          shadow={2}
          minWidth="150"
          accessibilityLabel="1 Month (30 Days)"
          placeholder="1 Month (30 Days)"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />,
          }}
        >
          <Select.Item shadow={2} label="UX Research" value="ux" />
          <Select.Item shadow={2} label="Web Development" value="web" />
          <Select.Item
            shadow={2}
            label="Cross Platform Development"
            value="cross"
          />
          <Select.Item shadow={2} label="UI Designing" value="ui" />
          <Select.Item shadow={2} label="Backend Development" value="backend" />
        </Select>

      </View>

      <View className="mb-10 flex flex-row justify-between items-center">
        <Text>Habit Type</Text>
        <Select
          shadow={2}
          minWidth="150"
          accessibilityLabel="Education"
          placeholder="Education"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />,
          }}
        >
          <Select.Item shadow={2} label="UX Research" value="ux" />
          <Select.Item shadow={2} label="Web Development" value="web" />
          <Select.Item
            shadow={2}
            label="Cross Platform Development"
            value="cross"
          />
          <Select.Item shadow={2} label="UI Designing" value="ui" />
          <Select.Item shadow={2} label="Backend Development" value="backend" />
        </Select>

      </View>

      <TouchableOpacity
          >
            <LinearGradient
              // Button Linear Gradient
              colors={["#6500e0", "#b000e0"]}
              className="py-3 mb-5"
              
            >
              <Text className="text-white font-semibold text-center text-lg">CREATE NEW GROUP</Text>
            </LinearGradient>
          </TouchableOpacity>
    </SafeAreaView>
  );
}
