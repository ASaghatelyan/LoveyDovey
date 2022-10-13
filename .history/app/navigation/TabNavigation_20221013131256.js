import React, { useState, useEffect } from "react";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, TouchableNativeFeedback } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  BlogScreens,
  ShareScreen,
} from "app/screens";
import Home from 'app/assets/img/home.png'
import Note from 'app/assets/img/note.png'
import TabCalendar from 'app/assets/img/tabCalendar.png'
import AddEvent from 'app/assets/img/pluss.png'
import Share from 'app/assets/img/share.png'
import Settings from 'app/assets/img/settings.png'
import CreateEventNavigation from "./CreateEventNavigation";
import SettingsNavigation from "./SettingsNavigation";
import HomeNavigation from "./HomeNavigation";
import BlogNavigation from "./BlogNavigation";
import { useIsFocused } from '@react-navigation/native';
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
const Tab = createBottomTabNavigator();
let width = Dimensions.get("window").width;





export default function TabNavigation(props) {
  const isFocused = useIsFocused();
  let getPartner = async () => {
    let data = await AsyncStorage.getItem('partner', (err, value) => {
      if (err) {
        console.log(err)
      } else {
      }
    })
    return JSON.parse(data)
  }

  let getGetData = async () => {
    let data = await getPartner()
    console.log(data);
  }
  useEffect(() => {



  }, [])


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
            if (route.name === "HomeNavigation") {

              imageSource = Home;
            }
            if (route.name === "BlogNavigation") {
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
              return (focused ?
                <TouchableOpacity
                  {...props}
                  style={{
                    height: 68,
                    width: 68,
                    borderRadius: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 50,
                    backgroundColor: '#EB1829',
                  }}
                  onPress={() => {
                    // props.navigation.navigate('AddEvent')
                    // alert('eeeeee')
                  }}>
                  <Image
                    style={{
                      height: 40,
                      width: 40,
                      resizeMode: 'contain'
                    }}
                    source={AddEvent}
                  />
                </TouchableOpacity>
                : <Image
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
        <Tab.Screen name="HomeNavigation" component={HomeNavigation}
          options={({ route }) => ({
            title: '',
            tabBarVisible:
              ((route) => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                if (routeName === "Profile") { return false }
                if (routeName === "EditProfile") { return false }
                if (routeName === "Notification") { return false }
                if (routeName === "WantNeedList") { return false }
                if (routeName === "WantNeedItem") { return false }
                if (routeName === "WantNeedInfo") { return false }
                return true
              })(route),
            tabBarButton:
              ((route) => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                if (routeName === "Profile") { () => null }
                if (routeName === "EditProfile") { () => null }
                if (routeName === "Notification") { () => null }
                if (routeName === "WantNeedList") { () => null }
                if (routeName === "WantNeedItem") { () => null }
                if (routeName === "WantNeedInfo") { () => null }

              })(route),
            tabBarStyle: ((route) => {
              const routeName = getFocusedRouteNameFromRoute(route) ?? ""
              if (routeName === "Profile") { return { display: 'none' } }
              if (routeName === "EditProfile") { return { display: 'none' } }
              if (routeName === "Notification") { return { display: 'none' } }
              if (routeName === "WantNeedList") { return { display: 'none' } }
              if (routeName === "WantNeedItem") { return { display: 'none' } }
              if (routeName === "WantNeedInfo") { return { display: 'none' } }
              return styles.generalStyle
            })(route),
          })}
        />
        <Tab.Screen name="BlogNavigation" component={BlogNavigation}
          options={({ route }) => ({
            title: '',
            tabBarVisible:
              ((route) => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                if (routeName === "BlogInfo") { return false }
                return true
              })(route),
            tabBarButton:
              ((route) => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                if (routeName === "BlogInfo") { () => null }
              })(route),
            tabBarStyle: ((route) => {
              const routeName = getFocusedRouteNameFromRoute(route) ?? ""
              if (routeName === "BlogInfo") { return { display: 'none' } }
              return styles.generalStyle
            })(route),

          })}
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
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              navigation.navigate('AddEvent');
              // props.navigation.navigate('CreateEventNavigation',{screen:'CreateEvent'})
            },

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
                if (routeName === "IntroSlides") { return false }
                return true
              })(route),
            tabBarButton:
              ((route) => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                if (routeName === "ContactUs") { () => null }
                if (routeName === "ChangePasswird") { () => null }
                if (routeName === "TermsCondition") { () => null }
                if (routeName === "PrivacyPolicy") { () => null }
                if (routeName === "IntroSlides") { () => null }

              })(route),
            tabBarStyle: ((route) => {
              const routeName = getFocusedRouteNameFromRoute(route) ?? ""
              if (routeName === "ContactUs") { return { display: 'none' } }
              else if (routeName === "ChangePasswird") { return { display: 'none' } }
              else if (routeName === "TermsCondition") { return { display: 'none' } }
              else if (routeName === "PrivacyPolicy") { return { display: 'none' } }
              else if (routeName === "IntroSlides") { return { display: 'none' } }
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
