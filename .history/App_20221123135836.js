import React,{useEffect} from 'react'
import { View, Text } from 'react-native'

import MainNAvigation from './app/navigation/MainNAvigation'
import dynamicLinks from '@react-native-firebase/dynamic-links';


export default function App() {
  useEffect(() => {
    function App() {
      const handleDynamicLink = link => {
        // Handle dynamic link inside your own application
        if (link.url === 'https://invertase.io/offer') {
          // ...navigate to your offers screen
        }
      };
    
      useEffect(() => {
        const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
        // When the component is unmounted, remove the listener
        return () => unsubscribe();
      }, []);
    
      return null;
    }
  
  }, [ ])
  
  return (
    <MainNAvigation />
  )
}