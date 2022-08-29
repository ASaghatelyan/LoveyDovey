import {
    View, Text, ScrollView,
     StatusBar,
    ImageBackground, Image
  } from 'react-native'
  import React, { useState, useEffect } from 'react'
  import { styles } from './style'
  import bg from '../../../assets/img/bg.png'
  import logo from 'app/assets/img/splash.png'
 
  
export   function Splash(props) {

  return (
    <ScrollView contentContainerStyle={styles.content}> 
    {StatusBar.setBackgroundColor("rgba(0,0,0,0)")}
    {StatusBar.setTranslucent(true)}
    <ImageBackground source={bg} style={styles.bgImage}>
      <Image source={logo} style={styles.logo} /> 
    </ImageBackground>
  </ScrollView>
  )
}