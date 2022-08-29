import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from './style'


export function Input(props) {
    return (
        <View style={{ width: "100%" }}>
            <TextInput
                style={styles.styleInput}
                placeholder={props.placeholder}
                placeholderTextColor="#3A3434"
                onChangeText={props.onChange}
                secureTextEntry={props.}
                passwordRules={props.pass}
                value={props.value}
                id={props.id}
                type={props.type}
                multiline={props.multiline}
                numberOfLines={props.numberOfLines}
                onBlur={props.onBlur}
                keyboardType={props.keyType}
                editable={props.editable}
                maxLength={props.lengthNumber}
            />
            <TouchableOpacity style={props.inputBtnView} onPress={props.handleShowPass}>
                <Image style={props.inputBtnIcon} source={props.inputBtn} />
            </TouchableOpacity>
        </View>
    )
}

