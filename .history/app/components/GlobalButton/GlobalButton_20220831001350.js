import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'


export function GlobalButton(props) {
    return (
        <TouchableOpacity style={styles.loginBtn} onPress={props.OnSub}>
            <Text style={styles.loginText}>{props.btnName}</Text>
        </TouchableOpacity>
    )
}