import {
  View, Text, ScrollView,
  TouchableOpacity, StatusBar,
  ImageBackground, Image
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './style'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SubmitItem } from 'app/components'
import bg from 'app/assets/img/submitBg.png'
import { GlobalButton } from 'app/components/globalButton';



export function ChooseCategories(props) {
  const [chooseData,setChooseData] =useState( [
    {
      status: false,
      type: 'Presents'
    },
    {
      status: false,
      type: 'Positive Words'
    },
    {
      status: false,
      type: 'Precious Time'
    },
    {
      status: false,
      type: 'Positive Acts'
    },
    {
      status: false,
      type: 'Physical Touch'
    },
    {
      status: false,
      type: 'Passion'
    },
    {
      status: false,
      type: 'Peace'
    },
  ])
  
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <StatusBar barStyle={'light-content'} showHideTransition={false} />
      {Platform.OS === 'android' && StatusBar.setBackgroundColor("rgba(0,0,0,0)")}
      {Platform.OS === 'android' && StatusBar.setTranslucent(true)}
      <ImageBackground source={bg} style={styles.bgImage}>
        <Text style={styles.titleText}>What Categories do youwant to start with?</Text>
        <View style={styles.bottomView}>
         {chooseData.map((item,index)=>{
          return <SubmitItem
          chek
          />
         })} 
        </View>
        <GlobalButton btnName="Submit" />
      </ImageBackground>
    </ScrollView>

  )
}