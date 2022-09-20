import { View, Text } from 'react-native'
import React from 'react'
import {s}
export function GlobalButton(props) {
    return (
        <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>Log in Now</Text>
        </TouchableOpacity>
    )
}