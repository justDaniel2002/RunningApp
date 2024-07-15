import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Alert,
  } from "react-native";
  import React, { useState } from "react";
  import { Icon } from "react-native-elements";
  import { CheckIcon, Select } from "native-base";
  import { LinearGradient } from "expo-linear-gradient";
  import { multipartService, multipartServicePUT, postService } from "@/api/services";
  import { get_post_put_communities } from "@/api/apis";
  
  export default function EditCommunity({ navigation, route }: any) {
    const { community } = route.params;
    const [GroupName, setGroupName] = useState(community.groupName);
    const [GroupGoal, setGroupGoal] = useState(community.groupGoal);
    const [HabitType, setHabitType] = useState(community.habitType);
    const [Period, setPeriod] = useState(community.period);
  
    const update = () => {
      if(GroupName.trim()==''){
        Alert.alert("Missing property", "Input group name", [{ text: "Ok" }]);
  
        return;
      }
  
      if(GroupGoal.trim()==''){
        Alert.alert("Missing property", "Input group goal", [{ text: "Ok" }]);
  
        return;
      }
  
  
      if(GroupName.trim()==''){
        Alert.alert("Missing property", "Input group name", [{ text: "Ok" }]);
  
        return;
      }
  
      if(GroupName.trim()==''){
        Alert.alert("Missing property", "Input group name", [{ text: "Ok" }]);
  
        return;
      }
      const formData = new FormData();
      formData.append('id', community?.id)
      formData.append('GroupName',GroupName)
      formData.append('GroupGoal',GroupGoal)
      formData.append('HabitType',HabitType)
      formData.append('Period',Period)
      
      multipartServicePUT(get_post_put_communities, formData, [community?.id]).then((res) => {
        Alert.alert("Notification", "Update Community Success", [{ text: "Ok" }]);
        console.log(res)
      }).catch(error => console.log(error))
    }
    return (
      <SafeAreaView className="py-10 px-5">
        <Text className="text-2xl font-bold mb-10">Community</Text>
        <View className="mb-5 py-2 flex flex-row justify-between border-b">
          <Text className="text-lg font-bold">Edit Your Community</Text>
          <Icon name="close" />
        </View>
  
        <Text className="mb-1">Group goal</Text>
        <TextInput
          value={GroupGoal}
          onChangeText={(text) => setGroupGoal(text)}
          className="mb-3 border border-neutral-300 p-2"
        />
        <Text className="mb-1">Group name</Text>
        <TextInput
          value={GroupName}
          onChangeText={(text) => setGroupName(text)}
          className="mb-3 border border-neutral-300 p-2"
        />
  
        <View className="mb-3 flex flex-row justify-between items-center">
          <Text>Period</Text>
          <Select
            selectedValue={Period}
            onValueChange={(value) => setPeriod(value)}
            shadow={2}
            minWidth="150"
            accessibilityLabel="1 Month (30 Days)"
            placeholder="1 Month (30 Days)"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
          >
            <Select.Item shadow={2} label="1 Month (30 Days)" value="1" />
            <Select.Item shadow={2} label="3 Month (90 Days)" value="3" />
            <Select.Item shadow={2} label="6 Month (180 Days)" value="6" />
            <Select.Item shadow={2} label="9 Month (270 Days)" value="9" />
            <Select.Item shadow={2} label="12 Month (360 Days)" value="12" />
          </Select>
        </View>
  
        <View className="mb-10 flex flex-row justify-between items-center">
          <Text>Habit Type</Text>
          <Select
            selectedValue={HabitType}
            onValueChange={(value) => setHabitType(value)}
            shadow={2}
            minWidth="150"
            accessibilityLabel="Education"
            placeholder="Education"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
          >
            <Select.Item shadow={2} label="Education" value="Education" />
            <Select.Item shadow={2} label="Health" value="Health" />
            <Select.Item shadow={2} label="Physic" value="Physic" />
            <Select.Item shadow={2} label="Knowledge" value="Knowledge" />
            <Select.Item shadow={2} label="Mental" value="Mental" />
          </Select>
        </View>
  
        <TouchableOpacity onPress={update}>
          <LinearGradient
            // Button Linear Gradient
            colors={["#6500e0", "#b000e0"]}
            className="py-3 mb-5"
          >
            <Text className="text-white font-semibold text-center text-lg">
              EDIT YOUR GROUP
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
  