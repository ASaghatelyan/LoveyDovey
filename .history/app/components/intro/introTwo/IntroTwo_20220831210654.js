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
                <Text style={styles.title}>Introduction</Text>
                <Text style={styles.infoText}>LoveyDovey is designed to help two people in lovecommunicate and engage at deeper levels about what they truly want and need in the relationship.</Text>
            </View>
        </View>
    )
}