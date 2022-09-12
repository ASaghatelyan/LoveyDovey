import { View, Text } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'

export   function LogOutModal(props) {
  return (
   <Modal>
    <Text>LOGOUT</Text>
    <Text>Are you sure you want to log out?</Text>
   </Modal>
  )
}