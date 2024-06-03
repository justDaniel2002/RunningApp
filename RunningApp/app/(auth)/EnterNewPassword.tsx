import { View, Text, TouchableOpacity, TextInput, SafeAreaView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

export default function EnterNewPassword({navigation}:any) {
  return (
    <SafeAreaView className='pt-20 px-10'>
      <Text className='text-sm text-neutral-500 mb-5'>Enter new password</Text>
      <TextInput secureTextEntry={true} className='p-2 bg-white mb-10' />
      <TouchableOpacity
      onPress={() => navigation.navigate("Home")}
      >
      <LinearGradient
        // Button Linear Gradient
        colors={["#6500e0", "#b000e0"]}
        className="py-3 mb-5"
      >
        <Text className="text-white font-semibold text-center">RESET PASSWORD</Text>
      </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  )
}