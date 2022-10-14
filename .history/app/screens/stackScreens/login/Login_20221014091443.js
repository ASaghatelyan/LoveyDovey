import {
  View, Text, ScrollView,
  TouchableOpacity, StatusBar,
  Animated, Image, SafeAreaView, Easing
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './style'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BgImage, Input, LoadingModal } from 'app/components'
import { GlobalButton } from 'app/components/globalButton'

import bg from 'app/assets/img/bg.png'
import logo from 'app/assets/img/logo.png'
import mail from 'app/assets/img/mail.png'
import lock from 'app/assets/img/lock.png'
import axiosInstance from 'app/networking/api';

export function Login(props) {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [showHidePass, setShowHidePass] = useState(true)
  const [err, setErr] = useState('')
  const [load, setLoad] = useState(false)

  let getIntro = async () => {
    let data = await AsyncStorage.getItem('intro', (err, value) => {
      if (err) {
        console.log(err)
      } else {
      }
    })
    return JSON.parse(data)
  }

  let getCategory = async () => {
    let data = await AsyncStorage.getItem('category', (err, value) => {
      if (err) {
        console.log(err)
      } else {
      }
    })
    return JSON.parse(data)
  }

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('token', value)
    } catch (e) {
      console.log(e);
    }
  }

  const storeUserInfo = async (value) => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(value))
    } catch (e) {
      console.log(e);
    }
  }

  let validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const onLogin = async () => {
    setLoad(true)
    try {
      let intro = await getIntro()
      let category = await getCategory()
    
      if (validateEmail(email) && pass.length > 7) {
        let login = {
          email,
          password: pass,
        }
        let response = await axiosInstance.post("/login", login);
        storeData(response.data.data.token) 
        storeUserInfo([response.data.data]) 
        intro == null ? props.navigation.replace('Introduction') : !category ? props.navigation.replace('ChooseCategories') : props.navigation.replace('TabNavigation')
        
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
      else if (pass.length < 8) {
        setErr('Password must contain at least 8 characters')
      }
      else {
        setErr("Incorrect email address");
      }
      setLoad(false)
    } catch (e) {
      console.log(e, 'err');
      setErr(e.response.data.message);
      setLoad(false)
      // if (e.response.status === 401) {
      //   let data = { email, type: "email" };
      //   props.navigation.navigate("SignUp", data);
      // }
    }
  }

  let spinValue = new Animated.Value(0);

  Animated.loop(
    Animated.timing(
      spinValue,
      {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true
      }
    )
  ).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']

  })

  return (
    <View style={{ flex: 1, }}>
      <BgImage img={bg} />
      <SafeAreaView
        style={{flex:1}}>
        <StatusBar
          //backgroundColor={'#11161f'}
          animated={true}
          backgroundColor="transparent"
          barStyle="light-content"
          translucent={true}
        />
        <ScrollView contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          <Image source={logo} style={styles.logo} />
          <Text style={styles.titleLogin}>Log in or sign up to continue</Text>
          <View style={styles.bottomView}>
            <View style={{ width: '100%' }}>
              <Input
                placeholder='Email Address'
                inputBtn={mail}
                inputBtnIcon={styles.emailIc}
                inputBtnView={styles.emailView}
                onChange={(e) => setEmail(e)}
              />
              <Input
                placeholder='Password'
                inputBtn={lock}
                inputBtnIcon={styles.lockIc}
                inputBtnView={styles.lockView}
                secure={showHidePass}
                handleShowPass={() => setShowHidePass(!showHidePass)}
                onChange={(e) => setPass(e)}
              />
              <GlobalButton diffStyle={{ marginTop: 38 }} btnName="Log in Now" onSubmit={onLogin} />
              {err ? <Text style={styles.err}>{err}</Text> : <Text style={styles.err}></Text>}
            </View>
            <View style={{ alignItems: 'center' }}>
              <View style={styles.gFlex}>
                <Text style={styles.noAccount}>Don’t have account?</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('Registration')}>
                  <Text style={styles.regText}> create a new account</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.forgotPassView} onPress={() => props.navigation.navigate('ForgotPassNavigation')}>
                <Text style={styles.forgotPassText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <LoadingModal isVisible={load}/>
    </View>
  )
}