import React, { useState, useEffect } from 'react'
import { View, Text, StatusBar, StyleSheet, SafeAreaView, Image, Platform, ScrollView, TouchableOpacity, TouchableHighlight, BackHandler, } from 'react-native'
import { gStyle } from "../Style/GStyle"
import { barStyleLight, backgroundDark } from "../constant/Constant"
import AsyncStorage from '@react-native-async-storage/async-storage';

export function GetStarted(props) {
 

  let handleAsync = async () => {
    await AsyncStorage.setItem('key', JSON.stringify(true))
    props.navigation.replace('Login')
  }
  return (
    <View>
      <Text>GetStarted</Text>
      <Text>GetStarted</Text>
      <Text>GetStarted</Text>
      <Text>GetStarted</Text>
      <TouchableOpacity onPress={handleAsync}>
        <Text>Get Started</Text>
      </TouchableOpacity>
    </View>
  )
}