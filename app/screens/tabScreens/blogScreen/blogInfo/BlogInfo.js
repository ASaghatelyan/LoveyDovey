import {
    View, Text, ScrollView,
    TouchableOpacity, StatusBar,
    ImageBackground, Image,
    SafeAreaView, SafeAreaProvider, TextInput,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './style'
import { BgImage, LoadingModal } from 'app/components'
import { TextInput as PaperInput } from 'react-native-paper';

import bg from 'app/assets/img/white.png'
import back from 'app/assets/img/back.png'
import noImg from 'app/assets/img/profile.png'

import { GlobalButton } from 'app/components/globalButton';
import axiosInstance from 'app/networking/api';
import Video from 'react-native-video';
import moment from 'moment';



export function BlogInfo(props) {
    const [data, setData] = useState([])
    const [resetData, setResentData] = useState([])
    const [load, setLoad] = useState(false)
    const [showAll, setShowAll] = useState(false)
    const [text, setText] = useState('')

    const requestFunc = async () => {
        try {
            setLoad(true)
            let res = await axiosInstance.get(`/user/comments/?video_id=${props.route.params.id}`)
            setData(res.data.data);
            setLoad(false)
        } catch (e) {
            console.log(e, 'err');
            setLoad(false)
        }
    }

    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            setLoad(true)
            requestFunc()
        });
        return unsubscribe;
    }, [props.navigation]);

    const addNewComment = async () => {
        try {
            if (text) {
                setLoad(true)
                await axiosInstance.post(`/user/comment/create`, { video_id: props.route.params.id, text })
                requestFunc()
                setText('')
                setLoad(false)
            }
        } catch (e) {
            console.log(e, 'err');
            setLoad(false)
        }
    }

    return (
        <View style={{ flex: 1, height: '100%' }}>
            <BgImage img={bg} />
            <SafeAreaView
                style={styles.mainContainer}>
                <StatusBar
                    animated={true}
                    barStyle='dark-content'
                    translucent={true}
                />
                <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false} >
                    <View style={styles.topTitle}>
                        <TouchableOpacity onPress={() => props.navigation.goBack()}>
                            <Image source={back} style={styles.back} />
                        </TouchableOpacity>
                        <View style={styles.gFlex}>
                            <Text style={styles.titleText}>Blog</Text>
                        </View>
                    </View>
                    <View style={styles.bottomView}>
                        <View style={{ width: '100%' }}>
                            <Video
                                style={styles.video}
                                source={{ uri: props.route.params.url }}
                                controls={true}
                                resizeMode='contain'
                                paused
                            />
                        </View>
                        <Text style={styles.infoText}>Share wants/needs most difficult to talk about</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Type your message here"
                            placeholderTextColor={'#979797'}
                            multiline={true}
                            value={text}
                            onChangeText={(text) => setText(text)}
                        />
                        <View style={styles.btnView}>
                            <GlobalButton btnName='Add Comments' onSubmit={addNewComment} />
                        </View>
                        {data.length > 0 && <View style={styles.itemView}>
                            {data.map((item, index) => {
                                if (!showAll && index === 0) {
                                    return (<View style={styles.commentItem} key={index}>
                                        <View style={styles.commentView}>
                                            <Image source={noImg} style={styles.avatar} />
                                            <View >
                                                <View>
                                                    <Text style={styles.nameText}>{item.user.name}</Text>
                                                    <Text style={styles.lastVisit}>{moment(item.created_at).fromNow()}</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <Text style={styles.commentText}>{item.text}</Text>
                                    </View>)
                                } else if (showAll) {
                                    return <View style={styles.commentItem} key={index}>
                                        <View style={styles.commentView}>
                                            <Image source={noImg} style={styles.avatar} />
                                            <View >
                                                <View>
                                                    <Text style={styles.nameText}>{item.user.name}</Text>
                                                    <Text style={styles.lastVisit}>{moment(item.created_at).fromNow()}</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <Text style={styles.commentText}>{item.text}</Text>
                                    </View>
                                }
                            })}
                            <View style={{ alignItems: 'flex-end' }}>
                                <TouchableOpacity onPress={() => setShowAll(!showAll)}>
                                    {showAll ? <Text style={styles.textAll}>View Less Comments</Text> :
                                        <Text style={styles.textAll}>View All Comments</Text>}
                                </TouchableOpacity>
                            </View>
                        </View>}
                        {resetData.length > 0 && <View>
                            <Text style={styles.titleText}>Recent Blogs</Text>
                            {resetData.map((item, index) => {
                                if (index < 2) {
                                    return <TouchableOpacity style={styles.recentItemView} key={index}>
                                        <Image style={styles.blogImg} />
                                        <Text style={styles.text}>Share wants/needs most difficult to talk about</Text>
                                    </TouchableOpacity>
                                }
                            })}
                        </View>}
                    </View>
                </ScrollView>
            </SafeAreaView>
            <LoadingModal isVisible={load} />
        </View>
    )
}