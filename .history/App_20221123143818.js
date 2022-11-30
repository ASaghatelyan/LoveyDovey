import React,{useEffect} from 'react'
import { View, Text } from 'react-native'

import MainNAvigation from './app/navigation/MainNAvigation'
import dynamicLinks from '@react-native-firebase/dynamic-links';
 import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';

export default function App() {
  const RNfirebaseConfig = {
    apiKey: "........",
    authDomain: "note-app-rn.firebaseapp.com",
    projectId: "note-app-rn",
    storageBucket: "note-app-rn.appspot.com",
    messagingSenderId: ".....",
    appId: "......"
  };
  
  let app;
  if (firebase.apps.length === 0) {
      app = firebase.initializeApp(RNfirebaseConfig )
  } else {
      app = firebase.app()
  }
  
  const db = firebase.firestore();
  const auth = firebase.auth();
 
   

 
  return (
    <MainNAvigation />
  )
}