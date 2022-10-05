import {
    View, Text, ScrollView,
    TouchableOpacity, StatusBar,
    ImageBackground, Image, SafeAreaView,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './style'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from 'app/networking/api';
import { BgImage, Input, LoadingModal } from 'app/components'
import { GlobalButton } from 'app/components/globalButton'
import bg from 'app/assets/img/forgotBg.png'
import logo from 'app/assets/img/logo.png'
import lock from 'app/assets/img/lock.png'
import back from 'app/assets/img/back.png'


export function ForgotStepTwo(props) {
    const [err, setErr] = useState('')
    const [code, setcode] = useState('')
    const [showHidePass, setShowHidePass] = useState(true)
    const { email } = props.route.params
    const [load, setLoad] = useState(false)

    let onSencCode = async () => {
        try {
            await axiosInstance.post(`forgot/password`, {
                email,
            })
        } catch (e) {
            console.log(e, 'err');
        }
    }

    let onVerifyCode = async () => {
        try {
            setLoad(true)
            if (code) {
                await axiosInstance.post(`verify/pin`, { email, token: code })
                setLoad(false),
                    props.navigation.navigate("ForgotStepThree", email)
                setcode('')
            } else (
                setLoad(false),
                setErr('Code is not filled'))

        } catch (e) {
            console.log(e, 'err');
            setErr(e.response.data.data.error) 
        }
    }

    return (
        <View style={{ flex: 1, height: '100%', }}>
            <BgImage img={bg} />
            <SafeAreaView
                style={styles.mainContainer}>
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
                    <Text style={styles.titleLogin}>Enter your OTP code here</Text>
                    <View style={styles.bottomView}>
                        <View style={{ width: '100%' }}>
                            <Text style={styles.infoText}>Please , enter the code we send you by email</Text>
                            <Input
                                placeholder='******'
                                inputBtn={lock}
                                inputBtnIcon={styles.lockIc}
                                inputBtnView={styles.lockView}
                                secure={showHidePass}
                                handleShowPass={() => setShowHidePass(!showHidePass)}
                                value={code}
                                onChange={(text) => setcode(text)}
                            />
                            <GlobalButton diffStyle={{ marginTop: 38 }} btnName="Continue" onSubmit={onVerifyCode} />
                            {err ? <Text style={styles.err}>{err}</Text> : <Text style={styles.err}></Text>}
                            <View style={styles.resendView}>
                                <Text style={styles.noAccount}>I don’t receive a code</Text>
                                <TouchableOpacity onPress={onSencCode}>
                                    <Text style={styles.regText}>RESEND</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center' }}>

                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
            <LoadingModal isVisible={load} />
        </View>
    )
}