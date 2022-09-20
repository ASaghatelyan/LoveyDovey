import {
    View, Text, ScrollView,
    TouchableOpacity, StatusBar,
    ImageBackground, Image
  } from 'react-native'
  import React, { useState, useEffect } from 'react'
  import { styles } from './style'
  import bg from '../../../assets/img/bg.png'
  import logo from 'app/assets/img/logo.png'
  import mail from 'app/assets/img/mail.png'
  import lock from 'app/assets/img/lock.png'
  import { Input } from 'app/components'
  
export   function Splash(props) {
  return (
    <View>
      <Text>Splash</Text>
    </View>
  )
}