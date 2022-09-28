import {
    View, Text, ScrollView,
    TouchableOpacity, StatusBar,
    ImageBackground, Image,
    SafeAreaView, SafeAreaProvider,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './style'
import { BgImage, TabGlobalButton } from 'app/components'
import { TextInput as PaperInput } from 'react-native-paper';

import bg from 'app/assets/img/white.png'
import back from 'app/assets/img/back.png'
import user from 'app/assets/img/profile.png'
import loc from 'app/assets/img/loc.png'
import edit from 'app/assets/img/edit.png'
import { GlobalButton } from 'app/components/globalButton';
import axiosInstance from 'app/networking/api';


export function Profile(props) {
    const [text, setText] = useState("");
    const [data, setData] = useState([]);
    const [globalData, setGlobalData] = useState({})

    useEffect(() => {
        let requestFunc = async () => {
            try {
                let res = await axiosInstance.get(`user/detail`)
                setData(res.data.data);
                let resCountry = await axiosInstance.get("/country")
                let resGender = await axiosInstance.get("/gender")
                let resEducation = await axiosInstance.get(`/education`)
                let resIncomingLvl = await axiosInstance.get(`/income-level`)
                console.log();
                setGlobalData({
                    resCountry: resCountry.data.data,
                    resGender: resGender.data.data,
                    resEducation: resEducation.data.data,
                    resIncomingLvl: resIncomingLvl.data.data,
                })
            } catch (e) {
                console.log(e, 'err');
            }
        }
        requestFunc() 
    }, [])

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
                <ScrollView contentContainerStyle={styles.content}  >
                    <View style={styles.topTitle}>
                        <TouchableOpacity onPress={() => props.navigation.goBack()}>
                            <Image source={back} style={styles.back} />
                        </TouchableOpacity>
                        <View style={styles.gFlex}>
                            <Text style={styles.titleText}>Profile</Text>
                        </View>
                        <TouchableOpacity onPress={() => props.navigation.navigate('EditProfile', { data, globalData })}>
                            <Image source={edit} style={styles.edit} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottomView}>
                        <View style={styles.avatarView}>
                            <Image source={user} style={styles.userAvatar} />
                        </View>
                        <TabGlobalButton name={`Username`} data={data.name} />
                        <TabGlobalButton name={`Email Address`} data={data.email} />
                        <TabGlobalButton name={`Date of Birth `} data={data.user_details?.date_of_birth} />
                        <TabGlobalButton name={`Gender`} data={data.user_details?.gender_id} />
                        <TabGlobalButton name={`Country`} data={data.user_details?.country} />
                        <TabGlobalButton name={`State`} data={data.user_details?.state} />
                        <TabGlobalButton name={`City`} data={data.user_details?.city} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}