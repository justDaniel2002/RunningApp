import { View, Text } from "react-native";
import React, { useRef, useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

export default function EnterOTP() {
  const [activeIndex, setActiveIndex] = useState(0);
  const textInputRefs: any = useRef([]);

  const handleNextFocus = () => {
    if (activeIndex < textInputRefs.current.length - 1) {
      textInputRefs.current[activeIndex + 1].focus();
      setActiveIndex(activeIndex + 1);
    }
  };
  return (
    <View>
      <Text className="text-sm text-neutral-500 mb-5 text-center">
        Enter OTP code we’ve sent to your email
      </Text>
      <View className="flex flex-row mb-10 justify-around">
        <TextInput
          ref={(input) => (textInputRefs.current[0] = input)}
          returnKeyType="next"
          onSubmitEditing={handleNextFocus}
          blurOnSubmit={false}
          className="p-2 my-3 bg-white w-1/12"
        />
        <TextInput
          ref={(input) => (textInputRefs.current[1] = input)}
          returnKeyType="next"
          onSubmitEditing={handleNextFocus}
          blurOnSubmit={false}
          className="p-2 my-3 bg-white w-1/12"
        />
        <TextInput
          ref={(input) => (textInputRefs.current[2] = input)}
          returnKeyType="next"
          onSubmitEditing={handleNextFocus}
          blurOnSubmit={false}
          className="p-2 my-3 bg-white w-1/12"
        />
        <TextInput
          ref={(input) => (textInputRefs.current[3] = input)}
          returnKeyType="next"
          onSubmitEditing={handleNextFocus}
          blurOnSubmit={false}
          className="p-2 my-3 bg-white w-1/12"
        />
        <TextInput
          ref={(input) => (textInputRefs.current[4] = input)}
          returnKeyType="next"
          onSubmitEditing={handleNextFocus}
          blurOnSubmit={false}
          className="p-2 my-3 bg-white w-1/12"
        />
      </View>

      <LinearGradient
        // Button Linear Gradient
        colors={["#6500e0", "#b000e0"]}
        className="py-3 mb-5"
      >
        <Text className="text-white font-semibold text-center">SUBMIT</Text>
      </LinearGradient>
    </View>
  );
}
