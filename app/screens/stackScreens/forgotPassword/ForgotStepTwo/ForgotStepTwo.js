import {
    View, Text, ScrollView,
    TouchableOpacity, StatusBar,
    ImageBackground, Image, SafeAreaView,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './style'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BgImage, Input } from 'app/components'
import { GlobalButton } from 'app/components/globalButton'

import bg from 'app/assets/img/forgotBg.png'
import logo from 'app/assets/img/logo.png'
import lock from 'app/assets/img/lock.png'
import back from 'app/assets/img/back.png'


export function ForgotStepTwo(props) {
    const [err, setErr] = useState('')
    const [pass, setPass] = useState('')
    const [confirmPass,setConfirmPass]=useState('')
    const [showHidePass, setShowHidePass] = useState(true)
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
                                placeholder='****'
                                inputBtn={lock}
                                inputBtnIcon={styles.lockIc}
                                inputBtnView={styles.lockView}
                                secure={showHidePass}
                                handleShowPass={() => setShowHidePass(!showHidePass)}
                            /> 
                            <GlobalButton diffStyle={{marginTop:38}} btnName="Continue" onSubmit={() => props.navigation.navigate('ForgotPassNavigation', { screen: "ForgotStepThree" })} />
                            {err ? <Text style={styles.err}>{err}</Text> : <Text style={styles.err}></Text>}
                            <View style={styles.resendView}>
                                <Text style={styles.noAccount}>I don’t receive a code</Text>
                                <TouchableOpacity>
                                    <Text style={styles.regText}>RESEND</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center' }}>

                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}