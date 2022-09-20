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
import lock from 'app/assets/img/lock.png'
import back from 'app/assets/img/back.png'

export function ForgotStepThree(props) {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [showHidePass, setShowHidePass] = useState(true)
  const [err, setErr] = useState('')
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

          <Text style={styles.titleLogin}>Sign up your Ac count</Text>
          <View style={styles.bottomView}>
            <View style={{ width: '100%' }}>
              <Input
                placeholder='Password'
                inputBtn={lock}
                inputBtnIcon={styles.lockIc}
                inputBtnView={styles.lockView}
                secure={showHidePass}
                handleShowPass={() => setShowHidePass(!showHidePass)}
              />
              <Input
                placeholder='Password'
                inputBtn={lock}
                inputBtnIcon={styles.lockIc}
                inputBtnView={styles.lockView}
                secure={showHidePass}
                handleShowPass={() => setShowHidePass(!showHidePass)}
              />
              <GlobalButton btnName="Continue" onSubmit={() => props.navigation.navigate('Login')} />
              {err ? <Text style={styles.err}>{err}</Text> : <Text style={styles.err}></Text>}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}