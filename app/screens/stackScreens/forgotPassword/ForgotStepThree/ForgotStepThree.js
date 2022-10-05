import {
  View, Text, ScrollView,
  TouchableOpacity, StatusBar,
  ImageBackground, Image, SafeAreaView,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './style'
import { BgImage, Input, LoadingModal } from 'app/components'
import { GlobalButton } from 'app/components/globalButton'
import axiosInstance from 'app/networking/api';

import bg from 'app/assets/img/forgotBg.png'
import lock from 'app/assets/img/lock.png'
import back from 'app/assets/img/back.png'

export function ForgotStepThree(props) {
  const [email, setEmail] = useState(props.route.params)
  const [pass, setPass] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [showHidePass, setShowHidePass] = useState(true)
  const [showHideConfirmPass, setShowHideConfirmPass] = useState(true)
  const [err, setErr] = useState('')
  const [load, setLoad] = useState(false)
 
  let onResetPass = async () => {
    try {
      setLoad(true)
      if (code) {
        let res = await axiosInstance.post(`reset/password`, {
          email,
          password: pass,
          password_confirmation: confirmPass
        })
        console.log(res);
        props.navigation.replace("Login")
        setConfirmPass('')
        setPass('')
        setLoad(false)
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

          <Text style={styles.titleLogin}>Sign up your Account</Text>
          <View style={styles.bottomView}>
            <View style={{ width: '100%' }}>
              <Input
                placeholder='Password'
                inputBtn={lock}
                inputBtnIcon={styles.lockIc}
                inputBtnView={styles.lockView}
                secure={showHidePass}
                handleShowPass={() => setShowHidePass(!showHidePass)}
                value={pass}
                onChange={(text) => setPass(text)}
              />
              <Input
                placeholder='Password'
                inputBtn={lock}
                inputBtnIcon={styles.lockIc}
                inputBtnView={styles.lockView}
                secure={showHideConfirmPass}
                handleShowPass={() => setShowHideConfirmPass(!showHideConfirmPass)}
                value={confirmPass}
                onChange={(text) => setConfirmPass(text)}
              />
              <GlobalButton diffStyle={{ marginTop: 38 }} btnName="Continue" onSubmit={onResetPass} />
              {err ? <Text style={styles.err}>{err}</Text> : <Text style={styles.err}></Text>}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <LoadingModal isVisible={load} />
    </View>
  )
}