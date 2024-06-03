import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EnterOTP({navigation}:any) {
  const [activeIndex, setActiveIndex] = useState(0);
  const textInputRefs: any = useRef([]);

  const handleNextFocus = () => {
    if (activeIndex < textInputRefs.current.length - 1) {
      textInputRefs.current[activeIndex + 1].focus();
      setActiveIndex(activeIndex + 1);
    }
  };
  return (
    <SafeAreaView className="pt-20 px-10">
      <Text className="text-sm text-neutral-500 mb-5 text-center">
        Enter OTP code we’ve sent to your email
      </Text>
      <View className="flex flex-row mb-10 justify-around">
        <TextInput
          ref={(input) => (textInputRefs.current[0] = input)}
          returnKeyType="next"
          onChange={handleNextFocus}
          blurOnSubmit={false}
          className="p-2 text-center my-3 bg-white w-10"
        />
        <TextInput
          ref={(input) => (textInputRefs.current[1] = input)}
          returnKeyType="next"
          onChange={handleNextFocus}
          blurOnSubmit={false}
          className="p-2 text-center my-3 bg-white w-10"
        />
        <TextInput
          ref={(input) => (textInputRefs.current[2] = input)}
          returnKeyType="next"
          onChange={handleNextFocus}
          blurOnSubmit={false}
          className="p-2 text-center my-3 bg-white w-10"
        />
        <TextInput
          ref={(input) => (textInputRefs.current[3] = input)}
          returnKeyType="next"
          onChange={handleNextFocus}
          blurOnSubmit={false}
          className="p-2 text-center my-3 bg-white w-10"
        />
        <TextInput
          ref={(input) => (textInputRefs.current[4] = input)}
          returnKeyType="next"
          onChange={handleNextFocus}
          blurOnSubmit={false}
          className="p-2 text-center my-3 bg-white w-10"
        />
      </View>

      <TouchableOpacity
      onPress={() => {
        navigation.navigate("EnterNewPassword")
      }}
      >
        <LinearGradient
          // Button Linear Gradient
          colors={["#6500e0", "#b000e0"]}
          className="py-3 mb-5"
        >
          <Text className="text-white font-semibold text-center">SUBMIT</Text>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
