import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './style'
import CheckBox from '@react-native-community/checkbox'

export function SubmitItem(props) {
    return (
      <View style={styles.content} >
          {/* <View style={[styles.checkBoxConteiner, Platform.OS === "ios" ? { marginLeft: 0 } : { marginLeft: -6 }]}>
        </View> */}
            <CheckBox 
                onCheckColor='red'
                onFillColor='red'
                onTintColor='red'
                tintColors={{ true: 'red', false: 'red' }}
                value={props.check}
                onValueChange={props.valueChanged}
                style={[{ margin: 0, padding: 0 }, Platform.OS === "ios" ?styles.checkBocStyle : null]}
                boxType='circle' 
                onAnimationType='fill'
                hideBox="false" 
            />
        <Text style={styles.checkBoxText}>{props.type}</Text>
      </View>

    )
}