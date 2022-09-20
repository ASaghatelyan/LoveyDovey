import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './style'
import AsyncStorage from '@react-native-async-storage/async-storage';
import proHeart from 'app/assets/img/proHeart.png'
import Progress from 'app/assets/img/progress.png'


export   function IntroFour(props) {
    
  return (
    <View style={styles.container}>
    <View style={styles.content}>
        <Image source={proHeart} style={styles.proHeart} /> 
        <Image source={Progress} style={styles.progress} /> 
    </View>
    <View style={styles.textContent}>
        <Text style={styles.title}>Track your Progress</Text>
        <Text style={styles.infoText}>The heart shows the percentage of Wants/Needs completed. The bar lines the percentage by categories.</Text>
    </View>
</View>
  )
}