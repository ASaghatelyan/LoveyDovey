import React,{useEffect} from 'react'
import { View, Text } from 'react-native'

import MainNAvigation from './app/navigation/MainNAvigation'
import dynamicLinks from '@react-native-firebase/dynamic-links';


export default function App() {
     function Apps() {
      const handleDynamicLink = link => {
        // Handle dynamic link inside your own application
        if (link.url === 'https://loveydovey.page.link/y1E4') {
          // ...navigate to your offers screen
          console.log('ddd');
        }
      };
    
      useEffect(() => {
        const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
        // When the component is unmounted, remove the listener
        return () => unsubscribe();
      }, []);
    
      return null;
    }
 
 
  return (
    <MainNAvigation />
  )
}