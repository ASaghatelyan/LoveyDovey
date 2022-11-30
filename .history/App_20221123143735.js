import React,{useEffect} from 'react'
import { View, Text } from 'react-native'

import MainNAvigation from './app/navigation/MainNAvigation'
import dynamicLinks from '@react-native-firebase/dynamic-links';
import {firebase} from '@react-native-firebase/dynamic-links';


export default function App() {
 
 
   

const unsubscribeDynamicLinks = firebase.dynamicLinks().onLink(({url}) => {
  //handle your url here
  console.log('dfergfg');
});

//remember to unsubscribe when you dismiss your component to prevent memory leaks
unsubscribeDynamicLinks();
  return (
    <MainNAvigation />
  )
}