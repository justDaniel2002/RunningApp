import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

export default function ComunityDetail({navigation}:any) {
  return (
    <View className='pt-16 px-5 bg-white min-h-screen'>
      <Text className='text-3xl font-bold mb-1'>Chạy bộ mỗi sáng</Text>
      <Text className='font-bold text-sm mb-10'>Hôm nay đã có 4 người cập nhật thành tích của họ</Text>

      <View className='flex items-center flex-row mb-1'>
        <Image resizeMode='contain' className='w-12 h-7 mr-1' source={require('@/assets/icons/workout.png')}/>
        <Text className='font-bold'>Mr.Will</Text>
      </View>

      <TextInput className='bg-neutral-200 rounded-3xl px-1' placeholder='Cập nhập trạng thái của bạn...'/>
      <Image resizeMode='contain' className='w-full h-52 mb-10' source={require('@/assets/images/RunningView.jpg')} />
      <TouchableOpacity
          onPress={() => navigation.navigate('TaskDetail')}
          >
            <LinearGradient
              // Button Linear Gradient
              colors={["#6500e0", "#b000e0"]}
              className="py-3 mb-5"
            
            >
              <Text className="text-white font-semibold text-center text-lg">Verify your task</Text>
            </LinearGradient>
          </TouchableOpacity>
    </View>
  )
}