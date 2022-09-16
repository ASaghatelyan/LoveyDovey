import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './style'
 import proHeart from 'app/assets/img/five.png'
import Progress from 'app/assets/img/fiveImg.png'


export   function IntroFive(props) {
  return (
    <View style={styles.container}>
    <View style={styles.content}>
        <Image source={proHeart} style={styles.proHeart} /> 
        <Image source={Progress} style={styles.progress} /> 
    </View>
    <View style={styles.textContent}>
        <Text style={styles.title}>Track your Wants/Needs</Text>
        <Text style={styles.infoText}>Clicking on the calendar heartday, partner will mark the Want/Need as either missed or done.</Text>
    </View>
</View>
  )
}