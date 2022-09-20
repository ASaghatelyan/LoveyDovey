import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import CheckBox from '@react-native-community/checkbox';


export default function IAgree(props) {
    
    return (
        <View style={styles.content}>
            <View style={[styles.checkBoxConteiner, Platform.OS === "ios" ? { marginLeft: 0 } : { marginLeft: -6 }]}>
                <CheckBox
                    disabled={false}
                    onCheckColor='#171717'
                    onFillColor='#D3FF56'
                    onTintColor='#D3FF56'
                    tintColors={{ true: '#D3FF56', false: '#C1C1C1' }}
                    value={props.check}
                    onValueChange={props.valueChanged}
                    style={[{ margin: 0, padding: 0 },Platform.OS === "ios" ? { width:25,height:20 } : null]}
                    boxType='circle'
                    onAnimationType='fill'
                    hideBox="false" 
                />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.checkBoxText}>I agree to the </Text>
                <TouchableOpacity onPress={()=>props.navigation.push("TermsConditions")}>
                    <Text style={styles.terms}> Terms and Conditions</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    content: {
        width: "100%",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "flex-start",
        // marginTop: 15

    },
    checkBoxConteiner: {
        flexDirection: 'row',
        alignItems: "center",
    },
    checkBox: {},
    checkBoxText: {
        color: "#ffffff",
        fontSize: 12,
        lineHeight: 21,
        fontFamily:"Montserrat-Regular",
        marginLeft:2
    },
    terms: {
        color: "#D3FF56",
        textDecorationLine: 'underline',
        fontWeight:'900',
        fontSize: 12,
        lineHeight: 21,
        fontFamily:'Montserrat-Bold'
    }
})