import {
    View, Text, ScrollView,
    TouchableOpacity, StatusBar,
    ImageBackground, Image, SafeAreaView,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './style'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BgImage, Input, LoadingModal } from 'app/components'
import { GlobalButton } from 'app/components/globalButton'

import bg from 'app/assets/img/forgotBg.png'
import logo from 'app/assets/img/logo.png'
import mail from 'app/assets/img/mail.png'
import back from 'app/assets/img/back.png'
import axiosInstance from 'app/networking/api';


export function ForgotStepOne(props) {
    const [email, setEmail] = useState('')
    const [err, setErr] = useState('')
    const [load, setLoad] = useState(false)

    let onSencCode = async () => {
        try {
            setLoad(true)
            if (email) {
                await axiosInstance.post(`forgot/password`, { email })
                props.navigation.navigate("ForgotStepTwo", { email })
                setEmail('')
                setLoad(false)
            } else (
                setLoad(false),
                setErr('Email is not filled'))
        } catch (e) {
            setErr(e.response.data.data.error) 
        }
    }

    return (
        <View style={{ flex: 1, height: '100%', }}>
            <BgImage img={bg} />
            <SafeAreaView
                style={{}}>
                <TouchableOpacity style={styles.backView} onPress={() => props.navigation.goBack()}>
                    <Image style={styles.back} source={back} />
                </TouchableOpacity>
                <StatusBar
                    //backgroundColor={'#11161f'}
                    animated={true}
                    backgroundColor="transparent"
                    barStyle="light-content"
                    translucent={true}
                />
                <ScrollView contentContainerStyle={styles.content}  >
                    <Text style={styles.titleLogin}>Forgot Password</Text>
                    <View style={styles.bottomView}>
                        <View style={{ width: '100%' }}>
                            <Input
                                placeholder='Email Address'
                                inputBtn={mail}
                                inputBtnIcon={styles.emailIc}
                                inputBtnView={styles.emailView}
                                value={email}
                                onChange={(text) => setEmail(text)}
                            />
                            <GlobalButton btnName="Continue" diffStyle={{ marginTop: 38 }} onSubmit={onSencCode} />
                            {err ? <Text style={styles.err}>{err}</Text> : <Text style={styles.err}></Text>}

                        </View>
                        <View style={{ alignItems: 'center' }}>

                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
            <LoadingModal isVisible={load}/>
        </View>
    )
}