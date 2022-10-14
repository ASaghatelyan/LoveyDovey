import { View, Text, Animated, StyleSheet } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { styles } from './style'

export function ProgressBar(props) {
    const [procent, setProcent] = useState(`${props.procent}%`)
console.log(props.color)
    // useLayoutEffect(()=>{
    //     setProcent(`${props.procent}%`)
    // },[props.procent])
    
    return (
        <View style={{width:'100%',marginBottom:6}} key={props.keys}>
            <Text style={styles.categoryText}>{props.categoryName}</Text>
        <View style={styles.progressBar}>
            <View style={[
                // StyleSheet.absoluteFill,
            { backgroundColor: props.color, width:`+props.procent%`, borderRadius: 50 }
            ]} />
            <View style={styles.procentView}>
                <Text style={[styles.procentCol]}>{props.color}</Text>
            </View>
        </View>
        </View>
    )
}