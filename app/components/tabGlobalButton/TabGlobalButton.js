import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Right from 'app/assets/img/rightC.png'
import { styles } from './style'

export function TabGlobalButton(props) {
    return (
        <TouchableOpacity style={styles.globalView} onPress={props.onPush} >
            <Text>{props.name}</Text>
            <View style={styles.gFlex}>
                <Text>{props.data}</Text>
                <Image source={Right} style={styles.rightIc}/>
            </View>
        </TouchableOpacity>
    )
}