import { View, Text, ScrollView, TouchableOpacity, StatusBar, ImageBackground,Image } from 'react-native'
import React from 'react'
import { styles } from './style'
import bg from '../../../assets/img/bg.png'
import { Input } from 'app/components'


export function Login(props) {
  return (
    <ScrollView contentContainerStyle={styles.content}>

      {StatusBar.setBackgroundColor("rgba(0,0,0,0)")}
      {StatusBar.setTranslucent(true)}
      <ImageBackground source={bg} style={{ height: '100%' }}>
        <Image/>
        <Input />
      </ImageBackground>
    </ScrollView>
  )
}