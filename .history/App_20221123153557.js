import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

import MainNAvigation from './app/navigation/MainNAvigation'
import dynamicLinks from '@react-native-firebase/dynamic-links';
 
 
 
export default function App() {
  useEffect(() => {
    dynamicLinks().getInitialLink().then((link) => {
      handleDynamicLink(link)
    })
    const linkingListener = dynamicLinks().onLink(handleDynamicLink);
    return () => {
      linkingListener();
    }
  }, [])

  const handleDynamicLink = (link) => {
    console.log("link url++++", link)
    if (!!link?.url) {
      let getId = link.url?.split('=').pop()
      console.log("user id", getId)
      setTimeout(() => {
        // NavigationService.navigate('UserDetail', { userId: getId })
      }, 1000);
    }
  }
  
  return (
    <MainNAvigation />
  )
}