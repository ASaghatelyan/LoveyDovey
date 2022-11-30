import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

import MainNAvigation from './app/navigation/MainNAvigation'
import dynamicLinks from '@react-native-firebase/dynamic-links';
import firebase from '@react-native-firebase/app';

 
 
export default function  App() {
  const credentials = {
    apiKey: "AIzaSyAAMse0dsiH-ZSPLpH_pbjE4GRZvgTr9WQ",
    authDomain: "loveydovey-613f5.firebaseapp.com",
    projectId: "loveydovey-613f5",
    storageBucket: "loveydovey-613f5.appspot.com",
    messagingSenderId: "705888184535",
    appId: "1:705888184535:web:81e382b19e5e5774962892",
    measurementId: "G-5LP021LCTF"
  };

async()=>  await firebase.initializeApp(credentials);
  // useEffect(() => {
  //   dynamicLinks().getInitialLink().then((link) => {
  //     handleDynamicLink(link)
  //   })
  //   const linkingListener = dynamicLinks().onLink(handleDynamicLink);
  //   return () => {
  //     linkingListener();
  //   }
  // }, [])

  // const handleDynamicLink = (link) => {
  //   console.log("link url++++", link)
  //   if (!!link?.url) {
  //     let getId = link.url?.split('=').pop()
  //     console.log("user id", getId)
  //     setTimeout(() => {
  //       // NavigationService.navigate('UserDetail', { userId: getId })
  //     }, 1000);
  //   }
  // }
  
  return (
    <MainNAvigation />
  )
}