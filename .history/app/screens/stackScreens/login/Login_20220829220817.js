import { View, Text, ScrollView, TouchableOpacity, StatusBar, ImageBackground } from 'react-native'
import React from 'react'
import { styles } from './style'
import bg from '../../../assets/img/bg.png'
import { Input } from 'app/components'


export function Login(props) {
  return (
    
    <ImageBackground source={bg} style={
      {
        width: "100%",
        height: 120,
         padding: 20,
        paddingVertical: 40,
        position: 'absolute',
      bottom:0
      }
    }>
        <ScrollView contentContainerStyle={styles.content}>
      <StatusBar />
        <Input />
    </ScrollView>
      </ImageBackground>
      )
}