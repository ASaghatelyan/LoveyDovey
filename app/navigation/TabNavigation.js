import React, { useState } from "react";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeScreen,
  BlogScreens,
  CreateEvent,
  ShareScreen,
  SettingsScreen
} from "app/screens";
import Home from 'app/assets/img/home.png'
import Note from 'app/assets/img/note.png'
import TabCalendar from 'app/assets/img/tabCalendar.png'
import AddEvent from 'app/assets/img/addEvent.png'
import Share from 'app/assets/img/share.png'
import Settings from 'app/assets/img/settings.png'
import CreateEventNavigation from "./CreateEventNavigation";
import SettingsNavigation from "./SettingsNavigation";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
const Tab = createBottomTabNavigator();
let width = Dimensions.get("window").width;




export default function TabNavigation(props) {


  return (
    <>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: "#000",
          tabBarStyle: {
            backgroundColor: "#FFF",
            borderWidth: 1,
            borderTopEndRadius: 30,
            borderTopLeftRadius: 30,
            borderColor: '#C4C0BF',
            marginTop: 5, paddingTop: 25,
            height: 57,
            position: "absolute",
          },
          unmountOnBlur: true,

          tabBarIcon: ({ focused, color, size }) => {
            let imageSource = null;
            if (route.name === "HomeScreen") {

              imageSource = Home;
            }
            if (route.name === "BlogScreens") {
              imageSource = Note;
            }
            if (route.name === "CreateEventNavigation") {
              imageSource = TabCalendar;
            }
            if (route.name === "ShareScreen") {
              imageSource = Share;
            }
            if (route.name === "SettingsNavigation") {
              imageSource = Settings;
            }
            if (route.name === "CreateEventNavigation") {
              return (focused ? <Image
                style={{
                  height: 68,
                  width: 68,
                  resizeMode: "contain",
                  marginBottom: 50
                }}
                source={AddEvent}
              /> : <Image
                style={{
                  height: 68,
                  width: 68,
                  resizeMode: "contain",
                  marginBottom: 50
                }}
                source={imageSource}
              />)

            } else {
              return (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  {focused ?
                    <Image
                      style={{
                        height: 24,
                        width: 24,
                        resizeMode: "contain",
                        tintColor: color,
                      }}
                      source={imageSource}
                    />
                    :
                    <Image
                      style={{
                        height: 24,
                        width: 24,
                        resizeMode: "contain",
                      }}
                      source={imageSource}
                    />
                  }
                </View>
              );
            }
          }

        }
        )
        }
      >
        {/* <Tab.Screen name="HomeNavigation" component={HomeNavigation}
                            options={({ route }) => ({
                                tabBarVisible:
                                    ((route) => {
                                        const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                                        if (routeName === "HandicapNavigation") { return false }
                                        else if (routeName === "AllNotification") { return false } 
                                        else if (routeName === "ProfileInfo") { return false } 
                                        else if (routeName === "InviteInfo") { return false } 
                                        else if (routeName === "WaitingList") { return false } 
                                        else if (routeName === "InfoDateItems") { return false } 
                                        return true
                                    })(route),
                                tabBarButton:
                                    ((route) => {
                                        const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                                        if (routeName === "HandicapNavigation") { () => null }
                                        else if (routeName === "AllNotification") { () => null }
                                        else if (routeName === "ProfileInfo") { () => null }
                                        else if (routeName === "InviteInfo") { () => null }
                                        else if (routeName === "WaitingList") { () => null }
                                        else if (routeName === "InfoDateItems") { () => null }
                                    })(route),
                                tabBarStyle: ((route) => {
                                    const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                                    if (routeName === "HandicapNavigation") { return { display: 'none' } }
                                    else if (routeName === "AllNotification") { return { display: 'none' } }
                                    else if (routeName === "ProfileInfo") { return { display: 'none' } }
                                    else if (routeName === "InviteInfo") { return { display: 'none' } }
                                    else if (routeName === "WaitingList") { return { display: 'none' } }
                                    else if (routeName === "InfoDateItems") { return { display: 'none' } }
                                     return styles.generalStyle
                                })(route),
                            })} /> */}

        <Tab.Screen name="HomeScreen" component={HomeScreen}
          options={{
            title: ''
          }}
        />
        <Tab.Screen name="BlogScreens" component={BlogScreens}
          options={{
            title: ''
          }}
        />
        <Tab.Screen name="CreateEventNavigation" component={CreateEventNavigation}
          options={({ route }) => ({
            title: '',
            tabBarVisible:
              ((route) => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                if (routeName === "AddEvent") { return false }
                return true
              })(route),
            tabBarButton:
              ((route) => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                if (routeName === "AddEvent") { () => null }

              })(route),
            tabBarStyle: ((route) => {
              const routeName = getFocusedRouteNameFromRoute(route) ?? ""
              if (routeName === "AddEvent") { return { display: 'none' } }
              return styles.generalStyle
            })(route),
          })}
        />
        <Tab.Screen name="ShareScreen" component={ShareScreen}
          options={{
            title: ''
          }}
        />
        <Tab.Screen name="SettingsNavigation" component={SettingsNavigation}
          options={({ route }) => ({
            title: '',
            tabBarVisible:
              ((route) => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                if (routeName === "ContactUs") { return false }
                if (routeName === "ChangePasswird") { return false }
                if (routeName === "TermsCondition") { return false }
                if (routeName === "PrivacyPolicy") { return false }
                return true
              })(route),
            tabBarButton:
              ((route) => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                if (routeName === "ContactUs") { () => null }
                if (routeName === "ChangePasswird") { () => null }
                if (routeName === "TermsCondition") { () => null }
                if (routeName === "PrivacyPolicy") { () => null }

              })(route),
            tabBarStyle: ((route) => {
              const routeName = getFocusedRouteNameFromRoute(route) ?? ""
              if (routeName === "ContactUs") { return { display: 'none' } }
              else if (routeName === "ChangePasswird") { return { display: 'none' } }
              else if (routeName === "TermsCondition") { return { display: 'none' } }
              else if (routeName === "PrivacyPolicy") { return { display: 'none' } }
              return styles.generalStyle
            })(route),
          })}
        />



      </Tab.Navigator>

    </>

  );
}



const styles = StyleSheet.create({
  content: {
    width: width,
    marginTop: 22,
    paddingHorizontal: 24,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingBottom: 24,
  },
  title_view: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title_text: {
    fontWeight: '600',
    fontSize: 20,
    fontFamily: "Poppins-Regular",
    color: '#fff'
  },
  close_img: {
    width: 16,
    height: 16,
    resizeMode: 'contain'
  },
  item_btn: {
    height: 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255, 0.1)'
  },
  item_text: {
    fontWeight: '500',
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: '#fff'
  },
  right_img: {
    width: 13,
    height: 13,
    resizeMode: 'contain'
  },
  generalStyle: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderTopEndRadius: 30,
    borderTopLeftRadius: 30,
    borderColor: '#C4C0BF',
    marginTop: 5, paddingTop: 25,
    height: 57,
    position: "absolute",
  }

});
