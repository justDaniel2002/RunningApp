import { View, Text } from "react-native";
import React from "react";
import { CheckIcon, Select } from "native-base";
import {
  BarChart,
  LineChart,
  PieChart,
  PopulationPyramid,
} from "react-native-gifted-charts";
import { FlatList } from "react-native-gesture-handler";
import { habitsData } from "@/constants/data";

export default function Progress() {
  const data = [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }];

  return (
    <View className="px-3 py-5">
      <Text className="font-bold text-2xl mb-2">Progress</Text>
      <View className="flex items-center flex-row justify-between mb-10">
        <Text className="font-bold text-xl">Progress Report</Text>
        <Select
          shadow={2}
          minWidth="200"
          accessibilityLabel="Choose Service"
          placeholder="Choose Service"
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

      <View className="px-10">
        <View className="flex items-center flex-row justify-between">
          <Text className="text-lg font-bold">Your Goals</Text>
          <Text className="text-violet-500 font-bold">See all</Text>
        </View>
      </View>

      <View className="flex flex-row justify-between mb-5">
        <PieChart data={data} donut />
      </View>

      <Text className="text-center font-medium text-violet-500 mb-3">
        11 Habits goals has achived
      </Text>
      <Text className="text-center font-medium text-neutral-500 mb-5">
        6 Habits goals hasn't achived
      </Text>

      <FlatList
        data={habitsData}
        renderItem={({ item }) => (
          <View className="flex flex-row justify-between items-center mb-3">
            <PieChart data={[{ value: item.completedPercent }]} donut />
            <View>
              <Text className="font-bold">{item.name}</Text>
              <Text>{item.detail}</Text>
            </View>
            <View
              className={`px-2 py-1 rounded-3xl ${
                item.status == "Achieved" ? "text-green-200" : ""
              }`}
            >
              <Text
                className={
                  item.status == "Achieved"
                    ? "text-green-500"
                    : "text-neutral-500"
                }
              >
                {item.status}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
