import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './style'
import Video from 'react-native-video';
import vid from 'app/assets/img/video.mp4'
import img from 'app/assets/img/vid.png'


export  function IntroOne(props) {
    return ( 
        <View style={styles.content}>
            <Video
            source={vid}
            style={styles.video}
            controls={true}
          />
             <View style={styles.textContent}>

            <Text style={styles.title}>Introduction</Text>
            <Text style={styles.infoText}>LoveyDovey is designed to help two people in lovecommunicate and engage at deeper levels about what they truly want and need in the relationship.</Text>
             </View>
             {/* <Image source={img} style={styles.img}/> */}
             <Video<
        </View>

    )
}