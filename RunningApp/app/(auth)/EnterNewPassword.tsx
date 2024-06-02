import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'

export default function EnterNewPassword() {
  return (
    <View>
      <Text className='text-sm text-neutral-500 mb-5'>Enter new password</Text>
      <TextInput secureTextEntry={true} className='p-2 bg-white' />
      <LinearGradient
        // Button Linear Gradient
        colors={["#6500e0", "#b000e0"]}
        className="py-3 mb-5"
      >
        <Text className="text-white font-semibold text-center">RESET PASSWORD</Text>
      </LinearGradient>
    </View>
  )
}