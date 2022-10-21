import {
    View, Text, ScrollView,
    TouchableOpacity, StatusBar,
    ImageBackground, Image,
    SafeAreaView, SafeAreaProvider,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './style'
import { BgImage, LoadingModal } from 'app/components'
import bg from 'app/assets/img/white.png' 
import axiosInstance from 'app/networking/api'
import Video from 'react-native-video'

export function BlogScreens(props) {
    const [data, setData] = useState([])
    const [load, setLoad] = useState(false)

    const requestFunc = async () => {
        try {
            setLoad(true)
            let res = await axiosInstance.get(`user/videos`) 
            setData(res.data.data)
            setLoad(false)
        } catch (e) {
            setLoad(false)
            console.log(e, 'err');
        }
    }

    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            requestFunc()
        });
        return unsubscribe;
    }, [props.navigation]);

    return (
        <View style={{ flex: 1, height: '100%' }}>
            <BgImage img={bg} />
            <SafeAreaView
                style={styles.mainContainer}>
                <StatusBar
                    animated={true}
                    barStyle="dark-content"
                    translucent={true}
                />
                <ScrollView contentContainerStyle={styles.content}  >
                    <Text style={styles.titleText}>Blogs</Text>
                    <View style={styles.bottomView}>
                        {data.map((item, index) => { 
                            return <TouchableOpacity key={index} style={styles.itemView}
                                onPress={() => props.navigation.navigate('BlogInfo',item)}
                            >
                                <View style={styles.imgView}>
                                    <Video style={styles.video} source={{ uri: item.url }} resizeMode='cover' paused={true} />
                                    <Text style={styles.text}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        })}
                    </View> 
                </ScrollView>
            </SafeAreaView>
            <LoadingModal isVisible={load} />
        </View>
    )
}