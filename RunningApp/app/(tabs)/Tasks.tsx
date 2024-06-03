import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import React from "react";
import { tasksData } from "@/constants/data";
import { Icon } from "react-native-elements";
import * as Progress from "react-native-progress";

export default function Tasks() {
  return (
    <SafeAreaView className="px-3 py-16">
      <ScrollView>
      <Text className="text-sm mb-10 font-medium">Sun, 1 March 2022</Text>
        <View className="px-5 flex flex-row justify-between items-center mb-5">
          <Text className="text-2xl font-bold">Tasks</Text>
          <Text className="font-bold text-violet-500">See all</Text>
        </View>

        {tasksData.map((task: any) => (
          <View className="mb-5 px-5">
            <View className="flex flex-row items-center justify-between mb-2">
              <Image
                resizeMode="contain"
                className="w-14 h-8"
                source={task.icon}
              />
              <Icon name="more-vert" />
            </View>
            <Text className="font-bold text-lg mb-2">{task.detail}</Text>
            <Progress.Bar className="bg-neutral-200" color="#9700f5" height={13} width={300} progress={0.7} />
            <Text className="my-2">{task.status}</Text>
            <Text className="my-2 text-orange-500">{task.rate}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
