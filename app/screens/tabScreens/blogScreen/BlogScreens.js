import {
    View, Text, ScrollView,
    TouchableOpacity, StatusBar,
    ImageBackground, Image,
    SafeAreaView, SafeAreaProvider,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './style'
import { BgImage } from 'app/components'
import bg from 'app/assets/img/white.png'
import img1 from 'app/assets/img/img1.png'
import img2 from 'app/assets/img/img2.png'
import img3 from 'app/assets/img/img3.png'
import play from 'app/assets/img/play.png'

export function BlogScreens(props) {
    let data = [
        {
            img: img1,
            text: 'Share wants/needs most difficult to talk about'
        },
        {
            img: img2,
            text: 'What would you ask our relationship expert?'
        },
        {
            img: img3,
            text: 'Tell us your thoughts'
        },
    ]
    return (
        <View style={{ flex: 1, height: '100%' }}>
            <BgImage img={bg} />
            <SafeAreaView
                style={styles.mainContainer}>
                <StatusBar
                    // backgroundColor={'#FFF'}
                    animated={true}
                    // backgroundColor="transparent"
                    barStyle="light-content"
                    translucent={true}
                />
                <ScrollView contentContainerStyle={styles.content}  >
                    <Text style={styles.titleText}>Blogs</Text>
                    <View style={styles.bottomView}>
                        {data.map((item, index) => {
                            return <TouchableOpacity key={index} style={styles.itemView}>
                                <View style={styles.imgView}>
                                    <ImageBackground source={item.img} style={styles.img}>
                                        <Image source={play} style={styles.playBtn} />
                                    </ImageBackground>
                                    <Text style={styles.text}>{item.text}</Text>
                                </View>
                            </TouchableOpacity>
                        })}
                    </View>

                </ScrollView>
            </SafeAreaView>
        </View>
    )
}