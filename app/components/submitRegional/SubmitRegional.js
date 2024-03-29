import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'
import CheckBox from '@react-native-community/checkbox'

export   function SubmitRegional(props) {
  return (
    <TouchableOpacity style={styles.content}  onPress={props.onSubmit}> 
            <CheckBox 
                onCheckColor='grey'
                onFillColor='red'
                onTintColor='red'
                tintColors={{ true: 'red', false: 'red' }}
                value={props.check}
                onValueChange={props.valueChanged}
                style={[{ margin: 0, padding: 0 }, Platform.OS === "ios" ?styles.checkBocStyle : null]}
                boxType={'circle'} 
                onAnimationType='fill'
                hideBox="false" 
            />
        <Text style={[styles.checkBoxText,props.color]}>{props.type}</Text>
      </TouchableOpacity>

  )
}