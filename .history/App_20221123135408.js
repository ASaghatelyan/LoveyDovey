import React,{useEffect} from 'react'
import { View, Text } from 'react-native'

import MainNAvigation from './app/navigation/MainNAvigation'
import dynamicLinks from '@react-native-firebase/dynamic-links';


export default function App() {
  // useEffect(() => {
  //   async function buildLink() {
  //     const link = await dynamicLinks().buildLink({
  //       link: 'https://loveydovey.page.link/y1E4',
  //       // domainUriPrefix is created in your Firebase console
  //       domainUriPrefix: 'https://xyz.page.link',
  //       // optional setup which updates Firebase analytics campaign
  //       // "banner". This also needs setting up before hand
  //       analytics: {
  //         campaign: 'banner',
  //       },
  //     });
    
  //   console.log(link,'ddddd');
  //   }
  
  
  // }, [ ])
  
  return (
    <MainNAvigation />
  )
}