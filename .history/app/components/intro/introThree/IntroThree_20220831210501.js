import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './style'
import Calendar from 'app/assets/img/calendar.png'
 

export   function IntroThree(props) {
  return (
    <View style={styles.container}>
            <View style={styles.content}>
                {/* <Image source={Calendar} style={styles.calendar} />  */}
            </View>
            <View style={styles.textContent}>
                <Text style={styles.title}>Invite your Partner</Text>
                <Text style={styles.infoText}>Invite your partner to join the mobile application by simply tapping on the “+” icon, copy the link and share the link withyour partner to join the application.</Text>
            </View>
        </View>
  )
}