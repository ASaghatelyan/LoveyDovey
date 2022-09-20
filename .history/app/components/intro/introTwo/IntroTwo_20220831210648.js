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
                <Text style={styles.title}>Needs & Wants</Text>
                <Text style={styles.infoText}>Use the calendar screen to create Needs and Wants to engagewith your partner at a deeper level. View the Needs, and Wants created by your partner and fullfill them.Your partner will mark the Want/Need as either missed or done.</Text>
            </View>
        </View>
    )
}