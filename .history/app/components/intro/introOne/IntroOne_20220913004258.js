import { View, Text, Image, TouchableOpacity } from 'react-native'
import React,{useState,useRef} from 'react'
import { styles } from './style'
import Video from 'react-native-video';
import vid from 'app/assets/img/video.mp4'
import play from 'app/assets/img/play.png'



export function IntroOne(props) {
    let vidRef=useRef()
    
    
    return (
        <View style={styles.content}>
            <Video
           
                source={vid}
                style={styles.video}
                controls={true} 
            />
            <TouchableOpacity style={styles.playViwe}>
                <Image source={play} style={styles.play} />
            </TouchableOpacity>
            <Text style={styles.title}>How It Works</Text>
            <Text style={styles.infoText}>LoveyDovey is designed to help two people in love communicate and engage at deeper levels about what they truly want and need in the relationship.</Text>
            {/* <View style={styles.textContent}> 
            </View> */}
            {/* <Image source={img} style={styles.img}/> */}

        </View>

    )
}