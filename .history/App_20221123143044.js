import React,{useEffect} from 'react'
import { View, Text } from 'react-native'

import MainNAvigation from './app/navigation/MainNAvigation'
import dynamicLinks from '@react-native-firebase/dynamic-links';
import {firebase} from '@react-native-firebase/dynamic-links';


export default function App() {
  

  const generateLink = async (param, value) => {
   
const getAppLaunchLink = async () => {
  try {
    const {url} = await firebase.dynamicLinks().getInitialLink();
    //handle your link here
  } catch {
    //handle errors
  }
};
   
 
  return (
    <MainNAvigation />
  )
}