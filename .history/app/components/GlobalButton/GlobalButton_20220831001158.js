import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './style'


export function GlobalButton(props) {
    return (
        <TouchableOpacity style={styles.loginBtn} on>
            <Text style={styles.loginText}>Log in Now</Text>
        </TouchableOpacity>
    )
}