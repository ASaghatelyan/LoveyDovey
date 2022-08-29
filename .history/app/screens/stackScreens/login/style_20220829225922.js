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
        paddingHorizontal: 16,
        marginBottom: 37
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
        marginTop: height / 13.31,
        lineHeight: 18
    },
    emailView: {
        position: 'absolute',
        right: 18,
        bottom: 18
    },
    emailIc: {
        width: 17,
        height: 11
    },
    lockView: {
        position: 'absolute',
        right: 18,
        bottom: 17
    },
    lockIc: {
        width: 15,
        height: 17,
        resizeMode: 'contain'
    },
    loginBtn: {
        backgroundColor: '#EB1829',
        borderRadius: 58,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 14,
        marginTop: height / 25.375,
        minHeight: 48
    },
    loginText: {
        fontSize: 16,
        fontFamily: "Roboto-Bold",
        color: '#F5F5F5',
        lineHeight: 19
    },
    bottomView: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 35
    },
    gFlex: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    forgotPassView: {
        alignItems: 'center',
        justifyContent: 'center',  
        marginTop:9
    },
    forgotPassText: {
        fontSize: 16,
        fontFamily: "Roboto-SemiBold",
        color: '#F5F5F5',
        lineHeight: 19
    },
noAccount:{
    fontSize: 16,
    fontFamily: "Roboto-SemiBold",
    color: '#F5F5F5',
    lineHeight: 19
},
regText:
});
