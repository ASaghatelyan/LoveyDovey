import { View, Text ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { styles } from './style'
import open from 'app/assets/img/bottom.png'

export   function EditProfileItem(props) {
  
  return (
    <TouchableOpacity style={styles.content}  onPress={props.onSelect}>
      <Text style={styles.nameText}>{props.name}</Text>
      <Image source={open} style={styles.icon} />
    </TouchableOpacity>
  )
}