import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'

export function LogOutModal(props) {
    return (
        <Modal
        is
        >
            <Text>LOGOUT</Text>
            <Text>Are you sure you want to log out?</Text>
            <View>
                <TouchableOpacity>
                    <Text>NO</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>YES</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}