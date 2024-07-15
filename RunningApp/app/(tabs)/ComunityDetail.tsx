import { View, Text, Image, TextInput, TouchableOpacity, PermissionsAndroid } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useRecoilState } from "recoil";
import { accountState } from "@/state/accountState";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

export default function ComunityDetail({ navigation }: any) {
  const [account, setAccount]: any = useRecoilState(accountState);

  const getImage = async () => {
    // You can also use as a promise without 'callback':
    const result = await launchImageLibrary({ mediaType: "photo" }).catch((error) => console.log(error));
    console.log(result)
  };

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Camera permission given");
        const result:any = await launchCamera({mediaType:'photo',cameraType:'front'})
        console.log(result)
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };
  return (
    <View className="pt-16 px-5 bg-white min-h-screen">
      <Text className="text-3xl font-bold mb-1">Hoạt động của bạn</Text>
      <Text className="font-bold text-sm mb-10">
        Hôm nay đã có 4 người cập nhật thành tích của họ
      </Text>

      <View className="flex items-center flex-row mb-1">
        <Image
          resizeMode="contain"
          className="w-12 h-7 mr-1"
          source={require("@/assets/icons/workout.png")}
        />
        <Text className="font-bold">{account?.user?.name}</Text>
      </View>

      <TextInput
        className="bg-neutral-200 rounded-3xl px-1"
        placeholder="Cập nhập trạng thái của bạn..."
      />
      <Image
        resizeMode="contain"
        className="w-full h-52 mb-10"
        source={require("@/assets/images/RunningView.jpg")}
      />
      <TouchableOpacity onPress={requestCameraPermission}>
        <LinearGradient
          // Button Linear Gradient
          colors={["#6500e0", "#b000e0"]}
          className="py-3 mb-5"
        >
          <Text className="text-white font-semibold text-center text-lg">
            Verify your task
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}
