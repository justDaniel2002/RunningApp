import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

import { comments } from "@/constants/data";
import { Icon } from "react-native-elements";
import { getService } from "@/api/services";
import { get_post_put_activities } from "@/api/apis";

export default function TaskDetail({ navigation, route }: any) {
  const { communityId } = route.params;
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getService(`${get_post_put_activities}?communityId=${communityId}`)
      .then((result) => setTasks(result))
      .catch((res) => {
        console.log(res);
      });
  }, [navigation, route]);
  return (
    <SafeAreaView>
      <ScrollView className="px-3 py-16 bg-white">
        <View className="mb-3 flex items-center flex-row justify-between px-5 py-3 bg-neutral-200">
          <Image
            resizeMode="contain"
            className="w-10 h-7"
            source={require("@/assets/icons/running.png")}
          />
          <Text className="text-2xl font-bold text-neutral-500">
            Chạy bộ mỗi sáng.
          </Text>
          <View></View>
        </View>

        <View className="flex mb-10 flex-row items-center">
          <Image
            resizeMode="contain"
            className="w-12 h-7 mr-2"
            source={require("@/assets/icons/workout.png")}
          />
          <TextInput
            className="bg-neutral-300 w-3/5 rounded-xl px-2 mr-1"
            placeholder="How are yout today...?"
          />
          <TouchableOpacity onPress={() => navigation.navigate("ComunityDetail")}>
            
            <LinearGradient
              // Button Linear Gradient
              colors={["#6500e0", "#b000e0"]}
              className="px-2 py-1 rounded-xl"
            >
              <Text className="text-white font-semibold text-center text-lg">
                Post
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {tasks?.map((task: any) => (
          <>
            <View className="bg-neutral-200 rounded-xl p-3 mb-5">
              <View className="mb-1 flex flex-row items-center justify-between">
                <View className="flex flex-row items-center">
                  <Image
                    resizeMode="contain"
                    className="w-5 h-7 mr-2"
                    source={require("@/assets/icons/fitness.png")}
                  />
                  <View>
                    <Text className="font-bold mb-1">Ms. Lina</Text>
                    <Text className="text-sm font-bold text-neutral-500">
                      2 hours ago
                    </Text>
                  </View>
                </View>

                <Icon name="more-horiz" />
              </View>

              <View className="flex flex-row justify-between items-center">
                <Text className="font-bold">{task?.description}</Text>

                <Text className="text-green-500 bg-green-200 rounded-3xl py-1 px-2">
                  Verified
                </Text>
              </View>
              <Image
                resizeMode="contain"
                className="w-full h-52"
                source={{ uri: task?.imageUrl }}
              />
            </View>
            <View className="mb-5 border-b border-t py-1 flex flex-row items-center justify-between">
              <View className="flex flex-row items-center">
                <Icon name="thumb-up" className="mr-1" />
                <Text>{task?.postLikes?.length}</Text>
              </View>

              {/* <View className="flex flex-row items-center">
            <Icon name="chat-bubble" className="mr-1" />
            <Text>Comments</Text>
          </View> */}

              <View className="flex flex-row items-center">
                <Icon name="share" className="mr-1" />

                <Text>Share</Text>
              </View>
            </View>
          </>
        ))}

        {/* <View className="pb-10">
          {comments.map((comment: any) => (
            <View className="mb-5 ml-10 w-full flex flex-row items-center">
              <Image
                resizeMode="contain"
                className="w-16 h-10 mr-1"
                source={comment.avatar}
              />
              <View className="w-full">
                <View className="bg-neutral-300 w-2/3 rounded-xl p-1">
                  <View className="mb-2 flex flex-row justify-between items-center">
                    <Text className="font-bold">{comment.name}</Text>
                    <Icon name="more-horiz" />
                  </View>
                  <Text className="text-sm font-bold">{comment.content}</Text>
                </View>
                <Text className="pl-3 text-xs">{comment.createdtime}</Text>
              </View>
            </View>
          ))}
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}
