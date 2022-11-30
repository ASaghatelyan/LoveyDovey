import React,{useEffect} from 'react'
import { View, Text } from 'react-native'

import MainNAvigation from './app/navigation/MainNAvigation'
import dynamicLinks from '@react-native-firebase/dynamic-links';


export default function App() {
  

  const generateLink = async (param, value) => {
    const link = await firebase.dynamicLinks().buildShortLink({
   
      
      {/* android: {
        packageName: <package_name>,
      }, */}
      domainUriPrefix: 'https://exampledomain000.page.link',
    });
  
    return link;
  }
   
 
  return (
    <MainNAvigation />
  )
}