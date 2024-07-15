import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  PermissionsAndroid,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useRecoilState } from "recoil";
import { accountState } from "@/state/accountState";
import * as ImagePicker from "expo-image-picker";
import {
  deleteService,
  multipartService,
  multipartServicePUT,
  postService,
} from "@/api/services";
import { get_post_put_activities } from "@/api/apis";

export default function EditTask({ navigation, route }: any) {
  const { community, task } = route.params;
  const [account, setAccount]: any = useRecoilState(accountState);
  const [description, setDescription] = useState(task?.description ?? "");
  const [image, setImage]: any = useState();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0]);
    }
  };

  const onPut = async () => {
   

    if (description.trim() == "") {
      Alert.alert("Missing property", "Input description", [{ text: "Ok" }]);

      return;
    }
    const formData = new FormData();
    formData.append("id", task?.id);
    formData.append("Description", description);
    if (image) {
      formData.append("ImageFile", {
        uri: image.uri,
        name: "photo.jpg",
        type: "image/jpeg",
      });
    }
    console.log("call api");
    multipartServicePUT(get_post_put_activities, formData, [task?.id])
      .then((res) => {
        navigation.navigate("TaskDetail", { community });
      })
      .catch((error) => console.log(JSON.stringify(error)));
  };

  const onDelete = async () => {
    deleteService(get_post_put_activities, {}, [task?.id])
      .then((res) => {
        navigation.navigate("TaskDetail", { community });
      })
      .catch((error) => console.log(JSON.stringify(error)));
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
        placeholder="Mô tả của bạn..."
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      {image ? (
        <Image
          resizeMode="contain"
          className="w-full h-52 mb-10"
          source={{ uri: image.uri }}
        />
      ) : (
        <Image
          resizeMode="contain"
          className="w-full h-52 mb-10"
          source={{ uri: task?.imageUrl }}
        />
      )}

      <TouchableOpacity onPress={pickImage}>
        <LinearGradient
          // Button Linear Gradient
          colors={["#6500e0", "#b000e0"]}
          className="py-3 mb-5"
        >
          <Text className="text-white font-semibold text-center text-lg">
            Pick an image
          </Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPut}>
        <LinearGradient
          // Button Linear Gradient
          colors={["#6500e0", "#b000e0"]}
          className="py-3 mb-5"
        >
          <Text className="text-white font-semibold text-center text-lg">
            Update your task
          </Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity onPress={onDelete}>
        <LinearGradient
          // Button Linear Gradient
          colors={["#6500e0", "#b000e0"]}
          className="py-3 mb-5"
        >
          <Text className="text-white font-semibold text-center text-lg">
            Remove your task
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}
