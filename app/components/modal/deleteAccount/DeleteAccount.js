import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'
import { styles } from './style' 

export   function DeleteAccount(props) {
  return (
    <Modal
    isVisible={props.isVisible}>
    <View style={styles.modal}>
        <Text style={styles.title}>LOGOUT</Text>
        <Text style={styles.info}>Are you sure you want to delete your account?</Text>
        <View style={styles.battonView}>
            <TouchableOpacity onPress={props.onClose}>
                <Text>NO</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 48 }} onPress={props.onDelete}>
                <Text>YES</Text>
            </TouchableOpacity>
        </View>
    </View>
</Modal>
  )
}