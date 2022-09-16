import { View, Text, Animated, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'

export function ProgressBar(props) {
    const [procent, setProcent] = useState(`${props.procent}%`)
    return (
        <View style={{width:'100%',marginBottom:6}}>
            <Text style={styles.categoryText}>Presents</Text>
        <View style={styles.progressBar}>
            <Animated.View style={[StyleSheet.absoluteFill,
            { backgroundColor: `${props.color}`, width: `${procent}`, borderRadius: 50 }]} />
            <View style={styles.procentView}>
                <Text style={styles.procentCol}>{procent}</Text>
            </View>
        </View>
        </View>
    )
}