import {
    View, Text, ScrollView,
    TouchableOpacity, StatusBar,
    ImageBackground, Image
  } from 'react-native'
  import React, { useState, useEffect } from 'react'
  import { styles } from './style'
  import bg from '../../../assets/img/bg.png'
  import logo from 'app/assets/img/logo.png'
  import mail from 'app/assets/img/mail.png'
  import lock from 'app/assets/img/lock.png'
  import { IAgree, Input } from 'app/components'
import { GlobalButton } from 'app/components/globalButton'
  

export  function Registration(props) {
    const [name, setName] = useState("") 
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [showHidePass, setShowHidePass] = useState(true)
    const [showHideConfirmPass, setShowHideConfirmPass] = useState(true)
    const [err, setErr] = useState('')
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

  return (
    <ScrollView contentContainerStyle={styles.content}> 
      {StatusBar.setBackgroundColor("rgba(0,0,0,0)")}
      {StatusBar.setTranslucent(true)}
      <ImageBackground source={bg} style={styles.bgImage}>
        <Image source={logo} style={styles.logo} /> 
        <View style={styles.bottomView}>
          <View style={{ width: '100%' }}>
            <Input
            style={{paddingLeft:56}}
              placeholder='Username'
              inputBtn={name}
              inputBtnIcon={styles.emailIc}
              inputBtnView={styles.emailView}
            />
            <Input
             style={{paddingLeft:56}}
              placeholder='Email Address'
              inputBtn={email}
              inputBtnIcon={styles.emailIc}
              inputBtnView={styles.emailView}
            />
            <Input
             style={{paddingLeft:56}}
              placeholder='Password'
              inputBtn={lock}
              inputBtnIcon={styles.lockIc}
              inputBtnView={styles.lockView}
              secure={showHidePass}
              handleShowPass={() => setShowHidePass(!showHidePass)}
            />
            <Input
             style={{paddingLeft:56}}
              placeholder='Confirm Password'
              inputBtn={lock}
              inputBtnIcon={styles.lockIc}
              inputBtnView={styles.lockView}
              secure={showHidePass}
              handleShowPass={() => setShowHidePass(!showHidePass)}
            />
            <IAgree check={toggleCheckBox} valueChanged={(newValue) => {
                    console.log(newValue);
                    setToggleCheckBox(newValue)
                }}/>
            <GlobalButton btnName="Sign up"/>
            {err ? <Text style={styles.err}>{err}</Text> : <Text style={styles.err}></Text>}
          </View>
        
            <View style={styles.gFlex}>
              <Text style={styles.noAccount}>Already have account?</Text>
              <TouchableOpacity onPress={()=>props.navigation.navigate('Login')}>
                <Text style={styles.regText}> Sign in</Text>
              </TouchableOpacity>
            </View>
             
        
        </View>
      </ImageBackground>
    </ScrollView>
  )
}