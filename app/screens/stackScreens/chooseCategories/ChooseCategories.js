import {
  View, Text, ScrollView,
  TouchableOpacity, StatusBar,
  ImageBackground, Image,
  SafeAreaView, SafeAreaProvider,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './style'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BgImage, SubmitItem } from 'app/components'
import bg from 'app/assets/img/submitBg.png'
import { GlobalButton } from 'app/components/globalButton'; 


export function ChooseCategories(props) {
  const [chooseData, setChooseData] = useState([
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

  const chooseItem = (ind) => {
    let arr = chooseData
    arr[ind].status = !arr[ind].status
    setChooseData([...arr])
  }


  return (
    <View style={{ flex: 1, height: '100%' }}>
      <BgImage img={bg} />
      <SafeAreaView
        style={styles.mainContainer}>
        <StatusBar
          //backgroundColor={'#11161f'}
          animated={true}
          backgroundColor="transparent"
          barStyle="light-content"
          translucent={true} />
        <ScrollView contentContainerStyle={styles.content}  >
          <Text style={styles.titleText}>What Categories do youwant to start with?</Text>
          <View style={styles.bottomView}>
            {chooseData.map((item, index) => {
              return <SubmitItem
                key={index}
                check={item.status}
                valueChanged={() => chooseItem(index)}
                type={item.type} />
            })}
          </View>
          <View style={styles.btnView}>
            <GlobalButton btnName="Submit" onSubmit={() => {
                AsyncStorage.setItem('category', JSON.stringify(true))
              props.navigation.replace('TabNavigation')}} />
          </View>
        </ScrollView>
        <View style={styles.hintView}>
          <Text style={styles.hint}> Hint: Start with just one or two categories</Text>
        </View>
      </SafeAreaView>
    </View>

  )
}