import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Modal from 'react-native-modal'
import { styles } from './style' 
import { Calendar } from 'react-native-calendars'
import moment from 'moment/moment'
import close from 'app/assets/img/cycleClose.png' 


export function ErrorModal(props) {
  return (
    <Modal
    isVisible={props.isVisible}
    style={styles.content}
    animationIn={'swing'}
    animationInTiming='444'
    animationOutTiming={'222'}
    animationOut={'rotate'}
> 
    <View style={styles.bottomSide}> 
        <TouchableOpacity onPress={props.onClose}>
            <Image source={close} style={styles.closeIc} />
        </TouchableOpacity>
        <Text style={styles.whosIn}>You can’t create Need or Want untill you have a partner.</Text> 
    </View>

</Modal>
  )
}