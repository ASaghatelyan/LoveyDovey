import { View, Text, ScrollView, TouchableOpacity, StatusBar, ImageBackground, Image } from 'react-native'
import React from 'react'
import { styles } from './style'
import bg from '../../../assets/img/bg.png'
import logo from 'app/assets/img/logo.png'
import mail from 'app/assets/img/mail.png'
import lock from 'app/assets/img/lock.png'
import { Input } from 'app/components'


export function Login(props) {
  
  return (
    <ScrollView contentContainerStyle={styles.content}>

      {StatusBar.setBackgroundColor("rgba(0,0,0,0)")}
      {StatusBar.setTranslucent(true)}
      <ImageBackground source={bg} style={styles.bgImage}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.titleLogin}>Log in or sign up to continue</Text>
        <View style={styles.bottomView}>
          <View style={{ width: '100%' }}>
            <Input
              placeholder='Email Address'
              inputBtn={mail}
              inputBtnIcon={styles.emailIc}
              inputBtnView={styles.emailView}
            />
            <Input
              placeholder='Password'
              inputBtn={lock}
              inputBtnIcon={styles.lockIc}
              inputBtnView={styles.lockView}
              secure={true}
            />
            <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.loginText}>Log in Now</Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems:'center'}}>
            <View style={styles.gFlex}>
              <Text style={styles.noAccount}>Don’t have account?</Text>
              <TouchableOpacity>
                <Text style={styles.regText}> create a new account</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.forgotPassView}>
              <Text style={styles.forgotPassText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View> 
        </View>
      </ImageBackground>
    </ScrollView>
  )
}