import { View, Image } from 'react-native'
import React from 'react'
import { styles } from './style'

export function BgImage(props) {
    return (
        <View style={styles.container}>
        <Image
            source={props.img}
            style={styles.image}
        />
    </View>
    )
}