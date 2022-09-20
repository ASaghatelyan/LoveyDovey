import { View, Text, ScrollView, TouchableOpacity, StatusBar, ImageBackground } from 'react-native'
import React from 'react'
import { styles } from './style'
import bg from '../../../assets/img/bg.png'
import { Input } from 'app/components'


export function Login(props) {
  return (
    <ScrollView contentContainerStyle={styles.content}>

      <ImageBackground source={bg} style={{ height: '100%',position:'absolute' }}>
      <StatusBar />
        <Input />
      </ImageBackground>
    </ScrollView>
  )
}