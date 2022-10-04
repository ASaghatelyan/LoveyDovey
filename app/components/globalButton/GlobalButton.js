import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'


export function GlobalButton(props) {
    return (
        <TouchableOpacity style={[styles.loginBtn,props.diffStyle]} onPress={props.onSubmit}>
            <Text style={[styles.loginText,props.textStyle]}>{props.btnName}</Text>
        </TouchableOpacity>
    )
}