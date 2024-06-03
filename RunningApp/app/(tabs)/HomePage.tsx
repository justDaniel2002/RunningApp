import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { ProgressChart } from "react-native-chart-kit";
import { tasksData } from "@/constants/data";
import { Icon } from "react-native-elements";

const chartConfig = {
  backgroundGradientFrom: "transparent",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "transparent",
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(255, 255, 255, 0.6)`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

export default function HomePage({navigation}:any) {
  return (
    <SafeAreaView className="px-3 py-16">
      <ScrollView>
        <Text className="text-sm mb-1 font-medium">Sun, 1 March 2022</Text>
        <Text className="text-3xl mb-5">
          Hello, <Text className="text-violet-700">Thịnh!</Text>
        </Text>
        <LinearGradient
          // Button Linear Gradient
          colors={["#6500e0", "#b000e0"]}
          className="py-3 px-5 mb-5 rounded-xl"
        >
          <View className="flex flex-row justify-between">
            <ProgressChart
              data={{ data: [0.7] }}
              width={160}
              height={220}
              strokeWidth={16}
              radius={55}
              chartConfig={chartConfig}
              hideLegend={false}
            />
            <View>
              <TouchableOpacity onPress={() => navigation.navigate("Tasks")} className="flex flex-row justify-end items-center mb-5">
                <Text className="font-medium text-white">
                  Your tasks
                </Text>
                <Icon name="navigate-next" color={"white"}/>
              </TouchableOpacity>
              <Text className="text-lg text-white font-bold">
                3 of 5 habits
              </Text>
              <Text className="text-lg text-white">Completed Today!</Text>
            </View>
          </View>
        </LinearGradient>

        <View className="flex flex-row items-center justify-between">
          <Text className="text-xl font-bold mb-5">Community</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Tasks")}><Text className="font-bold text-violet-500">See all</Text></TouchableOpacity>
        </View>

        {tasksData.slice(0,2).map((item: any) => (
          <View className="bg-green-100 px-1 py-3 mb-5 flex flex-row justify-between">
            <View className="flex flex-row items-center">
              <Image
                resizeMode="contain"
                className="mr-2 w-10 h-5"
                source={item.icon}
              />
              <View>
                <Text className="font-medium mb-2">{item.name}</Text>
                <Text>{item.members} members</Text>
              </View>
            </View>

            <View className="flex flex-row items-center">
              <Text className="text-white rounded-full px-1 py-2 bg-indigo-700 mr-4">
                View
              </Text>
              <Icon name="more-vert" />
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
