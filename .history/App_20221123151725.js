import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

import MainNAvigation from './app/navigation/MainNAvigation'
import dynamicLinks from '@react-native-firebase/dynamic-links';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

 
 
export default function App() {
 
  
  const RNfirebaseConfig = {
    apiKey: "AIzaSyAAMse0dsiH-ZSPLpH_pbjE4GRZvgTr9WQ",
    authDomain: "loveydovey-613f5.firebaseapp.com",
    projectId: "loveydovey-613f5",
    storageBucket: "loveydovey-613f5.appspot.com",
    messagingSenderId: "705888184535",
    appId: "1:705888184535:web:81e382b19e5e5774962892",
    measurementId: "G-5LP021LCTF"
  };
  
  

  return (
    <MainNAvigation />
  )
}