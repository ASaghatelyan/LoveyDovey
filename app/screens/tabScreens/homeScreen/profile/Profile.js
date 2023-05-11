import {
    View, Text, ScrollView,
    TouchableOpacity, StatusBar,
    ImageBackground, Image,
    SafeAreaView, SafeAreaProvider,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './style'
import { BgImage, LoadingModal, TabGlobalButton } from 'app/components'
import { TextInput as PaperInput } from 'react-native-paper';

import bg from 'app/assets/img/white.png'
import back from 'app/assets/img/back.png'
import user from 'app/assets/img/profile.png'
import loc from 'app/assets/img/loc.png'
import edit from 'app/assets/img/edit.png'
import { GlobalButton } from 'app/components/globalButton';
import axiosInstance from 'app/networking/api';
import { useDispatch, useSelector } from 'react-redux';

export function Profile(props) {
    let data = useSelector(store => store.customer)
    
    const [globalData, setGlobalData] = useState({})
    const [load, setLoad] = useState(false)


 

 

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
                        <TouchableOpacity style={{ padding: 4 }} onPress={() => props.navigation.goBack()}>
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
                            <Image source={data.user_details?.image ? { uri: data.user_details?.image } : user} style={styles.userAvatar} />
                        </View>
                        <TabGlobalButton opa={1} name={`Username`} data={data?.name} />
                        <TabGlobalButton opa={1} name={`Email Address`} data={data?.email} />
                        <TabGlobalButton opa={1} name={`Date of Birth `} data={data?.user_details?.date_of_birth} />
                        <TabGlobalButton opa={1} name={`Gender`} data={data?.user_details?.gender?.name} />
                        <TabGlobalButton opa={1} name={`Country`} data={data?.user_details?.country} />
                        <TabGlobalButton opa={1} name={`State`} data={data?.user_details?.state} />
                        <TabGlobalButton opa={1} name={`City`} data={data?.user_details?.city} />
                    </View>
                </ScrollView>
            </SafeAreaView>

            <LoadingModal isVisible={load} />

        </View>
    )
}