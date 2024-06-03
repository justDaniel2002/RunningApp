import { View, Text, SafeAreaView, TextInput } from 'react-native'
import React from 'react'

export default function Community() {
  return (
    <SafeAreaView className="py-3 px-5 bg-white min-h-screen">
    <Text className="text-2xl font-bold mb-2">Community</Text>
    <View className='flex flex-row'>
    <TextInput placeholder='Enter your community' className='p-1 bg-neutral-200 mr-1'/>
    
    </View>
  </SafeAreaView>
  )
}