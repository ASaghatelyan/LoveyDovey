import {
    View, Text, ScrollView,
    TouchableOpacity, StatusBar,
    ImageBackground, Image,
    SafeAreaView, SafeAreaProvider,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './style'
import { BgImage, LinkCopySuccesModal, ProgressBar } from 'app/components'
import bg from 'app/assets/img/white.png'
import noti from 'app/assets/img/notification.png'
import user from 'app/assets/img/user.png'
import refresh from 'app/assets/img/refresh.png'
import list from 'app/assets/img/list.png'
import userh from 'app/assets/img/userh.png'
import me from 'app/assets/img/me.png'
import add from 'app/assets/img/add.png'
import Clipboard from '@react-native-clipboard/clipboard';
import axiosInstance from 'app/networking/api'


export function HomeScreen(props) {
    const [addPartner, setAddPartner] = useState(false)
    const [copiedText, setCopiedText] = useState('');
    const [modalVisable, setModalVisable] = useState(false);

    const copyToClipboard = () => {
        Clipboard.setString('hello world');
    };

    const fetchCopiedText = async () => {
        const text = await Clipboard.getString();
        setCopiedText(text);
    };

    const onGetLover = async () => {
        try {
         let res =   await axiosInstance.get(`user/invitation/lover`)
         console.log(res.data.data,'ressssss');
         } catch (e) {
            console.log(e, 'err');
        }
    }
    const onGetLoverMatch = async () => {
        try {
         let res =   await axiosInstance.get(`user/lover-match`)
         console.log(res.data.data,'ressssss');
         } catch (e) {
            console.log(e, 'err');
        }
    }
    useEffect(() => {
        // onGetLover()
        // onGetLoverMatch()
    }, [ ])
    

    return (
        <View style={{ flex: 1, height: '100%' }}>
            <BgImage img={bg} />
            <SafeAreaView
                style={styles.mainContainer}>
                <StatusBar
                    // backgroundColor={'#FFF'}
                    animated={true}
                    // backgroundColor="transparent"
                    barStyle='dark-content'
                    translucent={true}
                />
                <ScrollView contentContainerStyle={styles.content}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.titleView}>
                        <Text style={styles.titleText}>Home</Text>
                        <View style={styles.gFlex}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('WantNeedList')}>
                                <Image source={list} style={styles.img} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
                                <Image source={user} style={styles.img} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={refresh} style={styles.img2} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Notification')}>
                                <Image source={noti} style={styles.img3} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.bottomView}>
                        <Text style={styles.copiedText}>{copiedText}</Text>
                        <View style={styles.itemView}>
                            <View style={{ flex: 1 }}>
                                <ProgressBar categoryName='Presents' procent='12' color='#F5BE3D' />
                                <ProgressBar categoryName='Positive Words' procent='22' color='#96CE58' />
                                <ProgressBar categoryName='Precious Time' procent='32' color='#2E76E0' />
                                <ProgressBar categoryName='Positive Acts' procent='42' color='#CB0F1D' />
                                <ProgressBar categoryName='Physical Touch' procent='52' color='#2AB4A2' />
                                <ProgressBar categoryName='Passion' procent='62' color='#AE297A' />
                                <ProgressBar categoryName='Peace' procent='72' color='#25BFD7' />
                            </View>
                            {addPartner ? <Image source={me} style={styles.me} /> :
                                <TouchableOpacity style={styles.rightSide} onPress={() => {
                                    copyToClipboard()
                                    // setAddPartner(!addPartner)
                                    setModalVisable(!modalVisable)
                                }}>
                                    <Image source={add} style={styles.addIc} />
                                    <Text style={styles.partner}>Add your Partner</Text>
                                </TouchableOpacity>}
                        </View>
                        <View style={styles.itemView}>
                            <View style={styles.leftSide}>
                                <Image source={userh} style={styles.userH} />
                                <Text style={styles.name}>Name</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <ProgressBar categoryName='Presents' procent='12' color='#F5BE3D' />
                                <ProgressBar categoryName='Positive Words' procent='22' color='#96CE58' />
                                <ProgressBar categoryName='Precious Time' procent='32' color='#2E76E0' />
                                <ProgressBar categoryName='Positive Acts' procent='42' color='#CB0F1D' />
                                <ProgressBar categoryName='Physical Touch' procent='52' color='#2AB4A2' />
                                <ProgressBar categoryName='Passion' procent='62' color='#AE297A' />
                                <ProgressBar categoryName='Peace' procent='72' color='#25BFD7' />
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <LinkCopySuccesModal
                    isVisible={modalVisable}
                    onClose={() => setModalVisable(!modalVisable)}
                />
            </SafeAreaView>
        </View>
    )
}