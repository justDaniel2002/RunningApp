import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { CheckIcon, Icon, Select } from "native-base";
import { tasksData2 } from "@/constants/data";
import { deleteService, getService } from "@/api/services";
import { get_post_put_communities } from "@/api/apis";
import { useRecoilState } from "recoil";
import { accountState } from "@/state/accountState";

export default function Community({ navigation }: any) {
  const [communities, setCommunities] = useState([]);
  const [account, setAccount]: any = useRecoilState(accountState);

  useEffect(() => {
    getService(get_post_put_communities).then((res) => setCommunities(res));
  }, [navigation]);
  return (
    <SafeAreaView className="py-10 px-5 bg-white min-h-screen">
      <ScrollView>
        <Text className="text-2xl font-bold mb-2">Community</Text>
        <View className="flex flex-row mb-2 justify-between">
          <TextInput
            placeholder="Enter your community"
            className="p-1 w-3/4 font-bold bg-neutral-200 mr-1"
          />
          <TouchableOpacity>
            <LinearGradient
              // Button Linear Gradient
              colors={["#6500e0", "#b000e0"]}
              className="p-1 rounded-md"
            >
              <Text className="text-white font-semibold text-center text-lg">
                Search
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View className="flex flex-row justify-end mb-3">
          <Select
            shadow={2}
            minWidth="150"
            accessibilityLabel="All"
            placeholder="All"
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
            <Select.Item
              shadow={2}
              label="Backend Development"
              value="backend"
            />
          </Select>
        </View>

        {communities.map((task: any) => (
          <TouchableOpacity
            onPress={() =>navigation.navigate('TaskDetail',{community: task})}
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
      <TouchableOpacity
        onPress={() => navigation.navigate("CreateCommunity")}
        className="absolute bottom-3 right-3 flex justify-center flex-row "
      >
        {/* <Icon name="home" className="text-white"/> */}
        <Text className="text-white font-semibold text-5xl rounded-full px-3 pt-1 bg-green-400">
          +
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
