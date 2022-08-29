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
        height: '100%',
      
      
        position: 'absolute',
      bottom:0
      }
    }>
        <ScrollView contentContainerStyle={styles.content}>
        {StatusBar.setBackgroundColor("rgba(0,0,0,0)")}
            {StatusBar.setTranslucent(true)}
            {StatusBar.}
        <Input />
    </ScrollView>
      </ImageBackground>
      )
}