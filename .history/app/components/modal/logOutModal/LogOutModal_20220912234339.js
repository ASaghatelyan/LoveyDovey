import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'

export function LogOutModal(props) {
    return (
        <Modal
        isVisible={props.isVisible}
        style={}
        >
            <Text>LOGOUT</Text>
            <Text>Are you sure you want to log out?</Text>
            <View>
                <TouchableOpacity onPress={props.onClose}>
                    <Text>NO</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={props.onClose}>
                    <Text>YES</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}