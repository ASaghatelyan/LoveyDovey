import { View, Text, ScrollView, TouchableOpacity, StatusBar, ImageBackground } from 'react-native'
import React from 'react'
import { styles } from './style'
import bg from '../../../assets/img/bg.png'
import { Input } from 'app/components'


export function Login(props) {
  return (
    
    <ImageBackground source={bg} style={{ height: '100%',top:-20,position:'' }}>
        <ScrollView contentContainerStyle={styles.content}>
      <StatusBar />
        <Input />
    </ScrollView>
      </ImageBackground>
      )
}