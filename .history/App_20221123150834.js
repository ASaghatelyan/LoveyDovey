import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

import MainNAvigation from './app/navigation/MainNAvigation'
import dynamicLinks from '@react-native-firebase/dynamic-links';
  

 
 
export default function App() {
  // const RNfirebaseConfig = {
  //   apiKey: "AIzaSyBHPiYXUPE3uWRpL68XlbpdS7LHoMlBVXc",
  //   authDomain: "note-app-rn.firebaseapp.com",
  //   projectId: "loveydovey-613f5",
  //   storageBucket: "loveydovey-613f5.appspot.com",
  //   messagingSenderId: "705888184535",
  //   appId: "1:705888184535:ios:714c99a96011879e962892"
  // };

  // let app;
  // if (firebase.apps.length === 0) {
  //   app = firebase.initializeApp(RNfirebaseConfig)
  // } else {
  //   app = firebase.app()
  // }

  const firebaseConfig = {
    apiKey: "AIzaSyAAMse0dsiH-ZSPLpH_pbjE4GRZvgTr9WQ",
    authDomain: "loveydovey-613f5.firebaseapp.com",
    projectId: "loveydovey-613f5",
    storageBucket: "loveydovey-613f5.appspot.com",
    messagingSenderId: "705888184535",
    appId: "1:705888184535:web:81e382b19e5e5774962892",
    measurementId: "G-5LP021LCTF"
  };
  
  // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);

  return (
    <MainNAvigation />
  )
}