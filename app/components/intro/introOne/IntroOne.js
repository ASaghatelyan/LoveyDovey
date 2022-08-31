import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './style'
import Heart from 'app/assets/img/heart.png'
import Lines from 'app/assets/img/lines.png'

export  function IntroOne() {
    return ( 
        <View style={styles.content}>
            <Text style={styles.title}>Introduction</Text>
            <Text style={styles.infoText}>LoveyDovey is designed to help two people in lovecommunicate and engage at deeper levels about what they truly want and need in the relationship.</Text>
        </View>

    )
}