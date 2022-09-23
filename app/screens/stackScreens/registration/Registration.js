import {
    View, Text, ScrollView,
    TouchableOpacity, StatusBar,
    ImageBackground, Image,
    Platform, SafeAreaView
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './style'
import bg from '../../../assets/img/signUp.png'
import logo from 'app/assets/img/logo.png'
import mail from 'app/assets/img/mail.png'
import lock from 'app/assets/img/lock.png'
import { IAgree, Input } from 'app/components'
import { GlobalButton } from 'app/components/globalButton'
import axiosInstance from 'app/networking/api'
import AsyncStorage from '@react-native-async-storage/async-storage'

export function Registration(props) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [showHidePass, setShowHidePass] = useState(true)
    const [showHideConfirmPass, setShowHideConfirmPass] = useState(true)
    const [err, setErr] = useState('')
    const [toggleCheckBox, setToggleCheckBox] = useState(false)


    const MyStatusBar = ({ backgroundColor, ...props }) => (
        <View style={[{ height: STATUSBAR_HEIGHT, }, { backgroundColor }]}>
            <SafeAreaView>
                <StatusBar translucent backgroundColor={props.backgroundColor} {...props} />
            </SafeAreaView>
        </View>
    );

    let validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }



    let handleSingUp = async () => {
        try {
            if (name && validateEmail(email) && pass.length > 7 && confirmPass.length > 7 && pass === confirmPass && toggleCheckBox) {
                let register = {
                    email,
                    password: pass,
                    name,
                    confirm_password:confirmPass
                }
                let response = await axiosInstance.post("/register", register);
                props.navigation.navigate('Login')
                console.log(response); 
            }
            if (!name) {
                setErr("Name is not filled")
            }
            else if (!email) {
                setErr("Email is not filled")
            }
            else if (!validateEmail(email)) {
                setErr("Email is not valid")
            }
            else if (!pass) {
                setErr("Password is not filled")
            }
            else if (!confirmPass) {
                setErr("Repeat password is not filled")
            }
            else if (pass !== confirmPass) {
                setErr(`Password and Repeat password doesn't match`)
            }
            else if (pass.length < 8 || confirmPass < 8) {
                setErr('Password must contain at least 8 characters')
            }
            else if (!toggleCheckBox) {
                setErr('Term agreement is a required step to continue  ')
            }
            else {
                setErr("Incorrect email address");

            }
        } catch (e) { 
            console.log(e,'err');
            if (e.response.status === 401) {
                let data = { email, type: "email" };
                props.navigation.navigate("SignUp", data);
            }
        }
       
    }

    return (
        <ScrollView contentContainerStyle={styles.content}>
            <StatusBar barStyle={'light-content'} showHideTransition={false} translucent />
            {Platform.OS === 'android' && StatusBar.setBackgroundColor("rgba(0,0,0,0)")}
            {Platform.OS === 'android' && StatusBar.setTranslucent(true)}
            <ImageBackground source={bg} style={styles.bgImage}>
                <Image source={logo} style={styles.logo} />
                <View style={styles.bottomView}>
                    <View style={{ width: '100%' }}>
                        <Input
                            style={{ paddingLeft: 56 }}
                            placeholder='Username'
                            inputBtn={mail}
                            inputBtnIcon={styles.emailIc}
                            inputBtnView={styles.emailView}
                            onChange={(e) => setName(e)}
                            multiline={false}
                        />
                        <Input
                            style={{ paddingLeft: 56 }}
                            placeholder='Email Address'
                            inputBtn={mail}
                            inputBtnIcon={styles.emailIc}
                            inputBtnView={styles.emailView}
                            onChange={(e) => setEmail(e)}
                            multiline={false}
                        />
                        <Input
                            style={{ paddingLeft: 56 }}
                            placeholder='Password'
                            inputBtn={lock}
                            inputBtnIcon={styles.lockIc}
                            inputBtnView={styles.lockView}
                            secure={showHidePass}
                            handleShowPass={() => setShowHidePass(!showHidePass)}
                            onChange={(e) => setPass(e)}
                            multiline={false}
                        />
                        <Input
                            style={{ paddingLeft: 56 }}
                            placeholder='Confirm Password'
                            inputBtn={lock}
                            inputBtnIcon={styles.lockIc}
                            inputBtnView={styles.lockView}
                            secure={showHideConfirmPass}
                            handleShowPass={() => setShowHideConfirmPass(!showHideConfirmPass)}
                            onChange={(e) => {
                                setConfirmPass(e)
                            }}
                            multiline={false}
                        />
                        <IAgree props={props} check={toggleCheckBox} valueChanged={(newValue) => {

                            setToggleCheckBox(newValue)
                        }} />
                        <GlobalButton diffStyle={{marginTop:38}}  btnName="Sign up"  onSubmit={handleSingUp}/>
                        {err ? <Text style={styles.err}>{err}</Text> : <Text style={styles.err}></Text>}
                    </View>
                    <View style={styles.gFlex}>
                        <Text style={styles.noAccount}>Already have account?</Text>
                        <TouchableOpacity onPress={() => {
                            props.navigation.navigate('Login')
                        }}>
                            <Text style={styles.regText}> Sign in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </ScrollView>
    )
}