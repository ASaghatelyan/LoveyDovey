import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './style'
import Heart from 'app/assets/img/heart.png'
import Lines from 'app/assets/img/lines.png'

export function IntroTwo(props) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image source={Lines} style={styles.lines} />
                <Image source={Heart} style={styles.heart} />
            </View>
            <View style={styles.textContent}>
                <Text style={styles.title}>Invite your Partner</Text>
                <Text style={styles.infoText}>Invite your partner to join the mobile application by simply  tapping on the “+” icon, copy the link and share the link with your partner to join the application.</Text>
            </View>
        </View>
    )
}