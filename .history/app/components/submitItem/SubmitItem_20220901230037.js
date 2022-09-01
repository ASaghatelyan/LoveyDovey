import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './style'
import CheckBox from '@react-native-community/checkbox'

export function SubmitItem(props) {
    return (
      <View style={styles.content}  > 
            <CheckBox 
                onCheckColor='red'
                onFillColor='red'
                onTintColor='red'
                tintColors={{ true: 'red', false: 'red' }}
                value={props.check}
                onValueChange={props.valueChanged}
                style={[ { height: 24, width: 24 }, !!IS_ANDROID && { transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }]}
                // style={[{ margin: 0, padding: 0 }, Platform.OS === "ios" ?styles.checkBocStyle : null]}
                boxType={'circle'} 
                onAnimationType='fill'
                hideBox="false" 
            />
        <Text style={styles.checkBoxText}>{props.type}</Text>
      </View>

    )
}