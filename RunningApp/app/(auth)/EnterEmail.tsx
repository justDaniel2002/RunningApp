import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'

export default function EnterEmail() {
  return (
    <View>
      <Text className='text-sm text-neutral-500 mb-5'>Enter your email below, we will send intruction to reset your password</Text>
      <TextInput className='p-2 bg-white mb-10'/>

      <LinearGradient
              // Button Linear Gradient
              colors={["#6500e0", "#b000e0"]}
              className="py-3 mb-5"
            >
              <Text className="text-white font-semibold text-center">SUBMIT</Text>
            </LinearGradient>
    </View>
  )
}