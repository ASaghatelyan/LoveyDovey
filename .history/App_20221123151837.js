import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

import MainNAvigation from './app/navigation/MainNAvigation'
import dynamicLinks from '@react-native-firebase/dynamic-links';
 
 
 
export default function App() {
 
  
  // const RNfirebaseConfig = {
  //   apiKey: "AIzaSyAAMse0dsiH-ZSPLpH_pbjE4GRZvgTr9WQ",
  //   authDomain: "loveydovey-613f5.firebaseapp.com",
  //   projectId: "loveydovey-613f5",
  //   storageBucket: "loveydovey-613f5.appspot.com",
  //   messagingSenderId: "705888184535",
  //   appId: "1:705888184535:web:81e382b19e5e5774962892",
  //   measurementId: "G-5LP021LCTF"
  // };
  
  const handleDynamicLink = link => {
    // Handle dynamic link inside your own application
    if (link.url === 'https://loveydovey.page.link/y1E4') {
      // ...navigate to your offers screen
    }
  };

  useEffect(() => {
    const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
    // When the component is unmounted, remove the listener
    return () => unsubscribe();
  }, []);

  return (
    <MainNAvigation />
  )
}