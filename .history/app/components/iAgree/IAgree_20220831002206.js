import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import { styles } from './style';

export   function IAgree(props) {
    
    return (
        <View style={styles.content}>
            <View style={[styles.checkBoxConteiner, Platform.OS === "ios" ? { marginLeft: 0 } : { marginLeft: -6 }]}>
                <CheckBox
                    disabled={false}
                    onCheckColor='#171717'
                    onFillColor='red
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
                <Text style={styles.checkBoxText}>of the Application </Text>
            </View>
        </View>
    )
}


 