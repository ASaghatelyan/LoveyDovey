import {
    View, Text, ScrollView,
    TouchableOpacity, StatusBar,
    ImageBackground, Image,
    SafeAreaView, SafeAreaProvider,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './style'
import { BgImage, LinkCopySuccesModal, LoadingModal, ProgressBar } from 'app/components'
import bg from 'app/assets/img/white.png'
import noti from 'app/assets/img/notification.png'
import user from 'app/assets/img/user.png'
import refresh from 'app/assets/img/refresh.png'
import list from 'app/assets/img/list.png'
import userh from 'app/assets/img/userh.png'
import userh50 from 'app/assets/img/heart50.png'
import userh75 from 'app/assets/img/heart75.png'
import userh100 from 'app/assets/img/heart100.png'
import me from 'app/assets/img/me.png'
import add from 'app/assets/img/add.png'
import Clipboard from '@react-native-clipboard/clipboard';
import axiosInstance from 'app/networking/api'
import AsyncStorage from '@react-native-async-storage/async-storage'

export function HomeScreen(props) {
    const [addPartner, setAddPartner] = useState(false)
    const [partner, setPartner] = useState({})
    const [copiedText, setCopiedText] = useState('');
    const [modalVisable, setModalVisable] = useState(false);
    const [load, setLoad] = useState(false)
    const [category, setCategory] = useState([])
    const [userInfo, setUserInfo] = useState([])
    const [reload, setReload] = useState(false)
    const [chooseData, setChooseData] = useState([
        {
            id: 1,
            color: '#F5BE3D',
            name: 'Presents',
            status:false
        },
        {
            id: 2,
            color: '#96CE58',
            name: 'Positive Words',
            status:false
        },
        {
            id: 3,
            color: '#2E76E0',
            name: 'Precious Time',
            status:false
        },
        {
            id: 4,
            color: '#CB0F1D',
            name: 'Positive Acts',
            status:false
        },
        {
            id: 5,
            color: '#2AB4A2',
            name: 'Physical Touch',
            status:false
        },
        {
            id: 6,
            color: '#AE297A',
            name: 'Passion',
            status:false
        },
        {
            id: 7,
            color: '#25BFD7',
            name: 'Peace',
            status:false
        },
    ])

    let getUserInfo = async () => {
        let data = await AsyncStorage.getItem('user', (err, value) => {
            if (err) {
                console.log(err)
            } else {
            }
        })
        return JSON.parse(data)
    }


    const copyToClipboard = () => {
        Clipboard.setString('hello world');
    };

    const fetchCopiedText = async () => {
        const text = await Clipboard.getString();
        setCopiedText(text);
    };

    const onGetLover = async () => {
        try { 
            setLoad(true)
            let res = await axiosInstance.get(`user/invitation/lover`)
            setLoad(false)
            setPartner(res.data.data) 
        } catch (e) {
            setLoad(false)
            console.log(e, 'err3');
        }
    }

    const onGetLoverMatch = async () => {
        let info = await getUserInfo()
        setUserInfo(info[0])
        let arr = chooseData
        try {
            setLoad(true)
            let res = await axiosInstance.get(`user/lover-match`)
            setCategory(res.data.data.category_id);
           let s=  arr.map((item,index)=>{
              return  category.filter((val,ind)=>{
                   if(val===item.id){
                    return(  item.status=!item.status)
                   }
                })
             })
             console.log(s);
            setLoad(false)
        } catch (e) {
            console.log(e, 'err2');
            setLoad(false)
        }
    }

    useEffect(() => {
        onGetLover()
        onGetLoverMatch()
    }, [reload])
 
 
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
                            <TouchableOpacity onPress={() => setReload(!reload)}>
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
                            {/* <View style={{ flex: 1 }}>
                                {chooseData.map((item, index) => {
                                    return category.length > 0 ? category.map((val, ind) => {
                                        return <ProgressBar categoryName={item.name} procent='0' />
                                    }) : <ProgressBar categoryName={item.name} procent='0' />
                                })}

                            </View> */}
                            <View style={{ flex: 1 }}>
                                {chooseData.map((item, index) => {
                                    return category.length > 0 ? category.map((val, ind) => {
                                        if (item.id === val) {
                                            return <ProgressBar categoryName={item.name} color={item.color} procent='100' />
                                        }
                                        else { return <ProgressBar categoryName={item.name} procent='0' /> }
                                    }) : <ProgressBar categoryName={item.name} procent='0' />

                                })}
                            </View>
                            {partner?.email ?   <View style={[styles.rightSide,{   marginLeft: 32}]}>
                               <Image source={me} style={styles.me} /> 
                                <Text style={styles.name}>{partner?.name}</Text>
                            </View> :
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
                                <View style={{ position: 'relative' }}>
                                    {Math.floor(category.length * 14.3 <= 49) ?
                                        <Image source={userh} style={styles.userH} /> : Math.floor(category.length * 14.3 > 49 && category.length * 14.3 < 70) ?
                                            <Image source={userh50} style={styles.userH} /> : Math.floor(category.length * 14.3 > 70 && category.length * 14.3 < 99) ?
                                                <Image source={userh75} style={styles.userH} /> : Math.floor(category.length * 14.3) > 99 ?
                                                    <Image source={userh100} style={styles.userH} /> : null}
                                    <Text style={styles.procent}>{Math.floor(category.length * 14.3)}%</Text>
                                </View>
                                <Text style={styles.name}>{userInfo.name}</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                {chooseData.map((item, index) => {
                                    return category.length > 0 ? category.map((val, ind) => {
                                        if (item.id === val) {
                                            return <ProgressBar categoryName={item.name} color={item.color} procent='100' />
                                        }
                                        else { return <ProgressBar categoryName={item.name} procent='0' /> }
                                    }) : <ProgressBar categoryName={item.name} procent='0' />

                                })}
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <LinkCopySuccesModal
                    isVisible={modalVisable}
                    onClose={() => setModalVisable(!modalVisable)}
                />
            </SafeAreaView>
            <LoadingModal isVisible={load} />
        </View>
    )
}