import {
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { GgIcon } from "@/assets/icons/icon";
import { LinearGradient } from "expo-linear-gradient";
import { postService } from "@/api/services";
import { get_post_put_user } from "@/api/apis";
const SignUp = ({ navigation }: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setRepassword] = useState("");

  const onSignUp = () => {
    if (name.trim() == "") {
      Alert.alert("Missing property", "Input name", [{ text: "Ok" }]);

      return;
    }

    if (email.trim() == "") {
      Alert.alert("Missing property", "Input email", [{ text: "Ok" }]);

      return;
    }

    if (password.trim() == "") {
      Alert.alert("Missing property", "Input password", [{ text: "Ok" }]);

      return;
    }

    if (password != confirmPassword) {
      Alert.alert("Mismatch", "password and confirmPassword not equal", [
        { text: "Ok" },
      ]);

      return;
    }

    postService(get_post_put_user, { name, email, password, confirmPassword })
      .then((res) => {
        console.log(res);
        navigation.navigate("LogIn")
      })
      .catch((res) => console.log(res));
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="pt-20 pb-10 px-10 bg-neutral-100">
          <View className="flex justify-between mb-10 flex-row items-center">
            <Text className="text-5xl font-medium">Sign Up</Text>
            <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
              <Text className="text-sm font-medium">Log in</Text>
            </TouchableOpacity>
          </View>

          <View className="mb-5">
            <Text className="text-sm text-neutral-500 mb-3">Name</Text>
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              className="bg-white p-1"
            />
          </View>

          <View className="mb-5">
            <Text className="text-sm text-neutral-500 mb-3">Email</Text>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              className="bg-white p-1"
            />
          </View>

          <View className="mb-5">
            <Text className="text-sm text-neutral-500 mb-3">Password</Text>
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              className="bg-white p-1"
            />
          </View>

          <View className="mb-10">
            <Text className="text-sm text-neutral-500 mb-3">
              Password Confirmation
            </Text>
            <TextInput
              value={confirmPassword}
              onChangeText={(text) => setRepassword(text)}
              secureTextEntry={true}
              className="bg-white p-1"
            />
          </View>

          <TouchableOpacity onPress={onSignUp}>
            <LinearGradient
              // Button Linear Gradient
              colors={["#6500e0", "#b000e0"]}
              className="py-3 mb-5"
            >
              <Text className="text-white font-semibold text-center text-lg">
                SIGN UP
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* <View className="mb-5 py-4 bg-violet-800">
            <Text className="text-white font-semibold text-center">LOG IN</Text>
          </View> */}

          <View className="mb-5">
            <Text className="text-sm text-center text-neutral-500 font-light">
              Or sign up with:
            </Text>
          </View>

          <TouchableOpacity>
            <View className="py-3 flex justify-center flex-row bg-white">
              <Image
                resizeMode="contain"
                className="w-1/12 h-5"
                source={require("@/assets/icons/google.png")}
              />
            </View>
          </TouchableOpacity>

          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
