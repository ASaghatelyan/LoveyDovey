import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'
import { styles } from './style'


export function LinkCopySuccesModal(props) {
    return (
        <Modal
            isVisible={props.isVisible}
            onBackdropPress={props.onClose}
        >
            <View style={styles.modal}>
                <Text style={styles.title}>Success!</Text>
                <Text style={styles.info}>Please share the copied link now in your clipboard with your partner to join the application. Restart your phone after your partner logs in</Text>
                <View style={styles.battonView}>
                    <TouchableOpacity style={{}} onPress={props.onClose}>
                        <Text>OK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}