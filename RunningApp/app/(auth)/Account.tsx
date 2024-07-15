import { View, Text, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useRecoilState } from "recoil";
import { accountState } from "@/state/accountState";
import { putService } from "@/api/services";
import { get_post_put_user } from "@/api/apis";

export default function Account() {
  const [account, setAccount]: any = useRecoilState(accountState);
  const [editAccount, setEditAccount]: any = useState(account?.user);

  const onUpdate = () => {
    if (!editAccount?.name || !(editAccount?.name?.length > 0)) {
      Alert.alert("Missing property", "Input name", [{ text: "Ok" }]);

      return;
    }

    if (!editAccount?.email || !(editAccount?.email?.length > 0)) {
      Alert.alert("Missing property", "Input password", [{ text: "Ok" }]);

      return;
    }

    if (!editAccount?.password || !(editAccount?.password?.length > 0)) {
      Alert.alert("Missing property", "Input password", [{ text: "Ok" }]);

      return;
    }

    putService(`${get_post_put_user}`, {
      name: editAccount.name,
      email: editAccount.email,
      password: editAccount.password,
      id: editAccount.id,
      confirmPassword: editAccount.password,
    }, [account.id]).then(res => {
      Alert.alert("Notification", "Cập nhập thành công", [{ text: "Ok" }]);
    });
  };
  return (
    <View className="pt-10 px-5 bg-neutral-100">
      <Text className="font-bold text-2xl mb-20">Account</Text>
      <View className="mb-5">
        <Text className="text-sm text-neutral-500 mb-3">Name</Text>
        <TextInput
          value={editAccount?.name}
          onChangeText={(text) =>
            setEditAccount({ ...editAccount, name: text })
          }
          className="bg-white p-1"
        />
      </View>

      <View className="mb-5">
        <Text className="text-sm text-neutral-500 mb-3">Email</Text>
        <TextInput
          readOnly
          value={editAccount?.email}
          className="bg-white p-1"
        />
      </View>

      <View className="mb-5">
        <Text className="text-sm text-neutral-500 mb-3">Password</Text>
        <TextInput
          value={editAccount?.password}
          onChangeText={(text) =>
            setEditAccount({ ...editAccount, password: text })
          }
          secureTextEntry={true}
          className="bg-white p-1"
        />
      </View>

      <View className="mb-10">
        <Text className="text-sm text-neutral-500 mb-3">
          Password Confirmation
        </Text>
        <TextInput secureTextEntry={true} className="bg-white p-1" />
      </View>

      <View>
        <LinearGradient
          // Button Linear Gradient
          colors={["#6500e0", "#b000e0"]}
          className="py-3 mb-5"
        >
          <Text className="text-white font-semibold text-center text-lg">
            CHANGE
          </Text>
        </LinearGradient>
      </View>
    </View>
  );
}
