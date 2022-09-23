import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Right from 'app/assets/img/rightC.png'
import { styles } from './style'

export function TabGlobalButton(props) {
 
    return (
        <TouchableOpacity style={[styles.globalView,props.diffStyle]} onPress={props.onPush} >
            <View style={styles.topView}>
                {props.img ? <Image source={props.img} style={styles.img} /> : null}
                <Text style={styles.nameText}>{props.name}</Text>
            </View>
            <View style={styles.gFlex}>
                <Text style={styles.chooseItem}>{props?.data}</Text>
                <Image source={Right} style={styles.rightIc} />
            </View>
        </TouchableOpacity>
    )
}