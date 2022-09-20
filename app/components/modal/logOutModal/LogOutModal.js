import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'
import { styles } from './style'
export function LogOutModal(props) {
    return (
        <Modal
        isVisible={props.isVisible}
 
        >
            <View  style={styles.modal}>
                
            <Text style={styles.title}>LOGOUT</Text>
            <Text style={styles.info}>Are you sure you want to log out?</Text>
            <View style={styles.battonView}>
                <TouchableOpacity onPress={props.onClose}>
                    <Text>NO</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft:48}} onPress={props.onClose}>
                    <Text>YES</Text>
                </TouchableOpacity>
            </View>
            </View>
        </Modal>
    )
}