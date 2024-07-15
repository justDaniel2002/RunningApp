import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Link, useFocusEffect } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { ProgressChart } from "react-native-chart-kit";
import { tasksData } from "@/constants/data";
import { Icon } from "react-native-elements";
import { deleteService, getService } from "@/api/services";
import { get_post_put_communities } from "@/api/apis";
import { useRecoilState } from "recoil";
import { accountState } from "@/state/accountState";

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

export default function HomePage({navigation, route}:any) {
  const [communities, setCommunities] = useState([])
  const [account, setAccount]:any = useRecoilState(accountState)

  
  useFocusEffect(() => {
    getService(get_post_put_communities).then(res => setCommunities(res))
  })
  return (
    <SafeAreaView className="px-3 py-16">
      <ScrollView>
        <Text className="text-sm mb-1 font-medium">Sun, 1 March 2022</Text>
        <Text className="text-3xl mb-5">
          Hello, <Text className="text-violet-700">{account?.user?.name}!</Text>
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
          <TouchableOpacity onPress={() => navigation.navigate("Community")}><Text className="font-bold text-violet-500">See all</Text></TouchableOpacity>
        </View>

        {communities.slice(0,2).map((task: any) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('TaskDetail',{community: task})}
            className="mb-5 py-2 px-3 bg-neutral-200 rounded-xl flex flex-row justify-between items-center"
          >
            <View className="flex flex-row items-center">
              <Image
                resizeMode="contain"
                className="w-12 h-7 mr-3"
                source={require("@/assets/icons/book.png")}
              />
              <View>
                <Text className="font-bold mb-2">{task.groupName}</Text>
                <Text>{task.numOfMember} members</Text>
              </View>
            </View>
            {task?.createdBy == account?.user?.id &&  <TouchableOpacity onPress={() => navigation.navigate("EditCommunity",{community: task})}>
              <Text className={`px-2 py-1 rounded-full text-white bg-green-600`}>
              Edit
            </Text></TouchableOpacity>}
            {task?.createdBy == account?.user?.id &&  <TouchableOpacity onPress={() => {
              deleteService(`${get_post_put_communities}`,{},[task?.id]).then(() => {
                getService(get_post_put_communities).then(res => setCommunities(res))
              })
            }}>
              <Text className={`px-2 py-1 rounded-full text-white bg-red-600`}>
              Delete
            </Text></TouchableOpacity>}
            <Text className={`px-2 py-1 rounded-full text-white bg-indigo-600`}>
              Join
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
