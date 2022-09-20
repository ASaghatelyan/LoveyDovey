import { StyleSheet, Dimensions } from "react-native";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    content: {
        flexGrow: 1,
        position: 'relative',
    },
    bgImage: {
        height: '100%',
        alignItems: 'center',
        paddingHorizontal:16
    },
    logo: {
        marginTop: 120,
        width: width / 2.97,
        height: width / 2.97
    },
    titleLogin: {
        fontSize: 14,
        fontFamily: "Roboto-Bold",
        color: '#FFF', 
        marginTop:height/13.31,
        lineHeight:18
    },
    emailView:{
        position:'absolute',
        right:18,
        bottom:24
    },
    emailIc:{
        width:17,
        height:11
    },
    lockView:{
        position:'absolute',
        right:18,
        bottom:22
    },
    lockIc:{
        width:15,
        height:17,
        resizeMode:'contain'
    },
    loginBtn:{},
    loginText:{}
});
