import React,{useEffect} from 'react'
import { View, Text } from 'react-native'

import MainNAvigation from './app/navigation/MainNAvigation'
import dynamicLinks from '@react-native-firebase/dynamic-links';
import {firebase} from '@react-native-firebase/dynamic-links';


export default function App() {
  

  const generateLink = async (param, value) => {
    const link = await firebase.dynamicLinks().buildShortLink({
      link: `https://loveydovey.page.link/y1E4/?${param}=${value}`,
      ios: {
        bundleId: 'com.lovetank',
        appStoreId: 1551789560,
      },
     
      domainUriPrefix: 'https://exampledomain000.page.link',
    });
  
    return link;
  }
  generateLink()
 
   

const unsubscribeDynamicLinks = firebase.dynamicLinks().onLink(({url}) => {
  //handle your url here
});

//remember to unsubscribe when you dismiss your component to prevent memory leaks
unsubscribeDynamicLinks();
  return (
    <MainNAvigation />
  )
}