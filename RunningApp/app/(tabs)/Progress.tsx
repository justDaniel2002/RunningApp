import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { CheckIcon, Select } from "native-base";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { habitsData } from "@/constants/data";
import { SafeAreaView } from "react-native";
import { Link } from "expo-router";

const chartConfig = {
  backgroundGradientFrom: "#ffffff",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#ffffff",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(120, 0, 208, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const smallConfig = {
  backgroundGradientFrom: "#ffffff",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#ffffff",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(1, 234, 121,${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

export default function Progress({navigation}:any) {
  const data = {
    labels: ["Habits"], // optional
    data: [0.6],
  };

  return (
    <ScrollView className="px-5 py-10 bg-white">
      <Text className="font-bold text-2xl mb-2">Progress</Text>
      <View className="flex items-center flex-row justify-between mb-10">
        <Text className="font-bold text-lg">Progress Report</Text>
        <Select
          shadow={2}
          minWidth="150"
          accessibilityLabel="This month"
          placeholder="This month"
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

      <View className="px-5 mb-16">
        <View className="flex items-center flex-row justify-between">
          <Text className="text-lg font-bold">Your Goals</Text>
          <Text className="text-violet-500 font-bold">See all</Text>
        </View>
      </View>

      <View className="flex flex-row justify-center mb-5">
        <ProgressChart
          data={data}
          width={400}
          height={220}
          strokeWidth={16}
          radius={96}
          chartConfig={chartConfig}
          hideLegend={false}
        />
      </View>

      <Text className="text-center font-medium text-violet-500 mb-3">
        11 Habits goals has achived
      </Text>
      <Text className="text-center font-medium text-neutral-500 mb-5">
        6 Habits goals hasn't achived
      </Text>

      <View className="mb-5">
        {habitsData.slice(0, 3).map((item: any) => (
          <View
            key={item.name}
            className="flex flex-row justify-between items-center mb-5"
          >
            <ProgressChart
              data={{ data: [item.completedPercent / 100] }}
              width={57}
              height={57}
              strokeWidth={8}
              radius={16}
              chartConfig={smallConfig}
              hideLegend={true}
            />
            <View>
              <Text className="font-bold">{item.name}</Text>
              <Text>{item.detail}</Text>
            </View>
            <View
              className={`px-3 py-1 rounded-3xl ${
                item.status == "Achieved" ? "bg-green-100" : ""
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
        ))}
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("ProgressDetail")} >
        <Text className="text-center pb-20 text-violet-500 font-bold">See all</Text>
      </TouchableOpacity>
     
    </ScrollView>
  );
}
