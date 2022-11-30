import React,{useEffect} from 'react'
import { View, Text } from 'react-native'

import MainNAvigation from './app/navigation/MainNAvigation'
import dynamicLinks from '@react-native-firebase/dynamic-links';
import {firebase} from '@react-native-firebase/dynamic-links';


export default function App() {
  

  const generateLink = async (param, value) => {
    const link = await firebase.dynamicLinks().buildShortLink({
      link: `<your_link>/?${param}=${value}`,
      ios: {
        bundleId: 'com.lovetank',
        appStoreId: 1551789560,
      },
     
      domainUriPrefix: 'https://exampledomain000.page.link',
    });
  
    return link;
  }
  generateLink()
 
  return (
    <MainNAvigation />
  )
}