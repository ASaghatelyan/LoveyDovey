import { StyleSheet, Dimensions } from "react-native";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

const widthFigma = 375
const heightFigma = 812

const globalWidth = (a) => {
    return ((width * a) / widthFigma)
}
const globalHeight = (a) => {
    return ((height * a) / heightFigma)
}
 
export const styles = StyleSheet.create({
    content: {
        flexGrow: 1,
        position: 'relative',
    },
    backBtn: {
        width: globalWidth(21),
        height: globalHeight(12),
        tintColor: '#FFF'
    },
    btnView: {
        position: 'absolute',
        top: globalHeight(50),
        left: globalWidth(24),
        padding:3
    },
    bgImage: {
        height: '100%',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginBottom: 37,
    },
    logo: {
        marginTop: 120,
        width: width / 2.97,
        height: width / 2.97,
        marginBottom:37
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
        left: 18,
        bottom: 18
    },
    emailIc: {
        width: 17,
        height: 11,
        tintColor:'#EB1829'
    },
    lockView: {
        position: 'absolute',
        left: 18,
        bottom: 17
    },
    lockIc: {
        width: 15,
        height: 17,
        resizeMode: 'contain'
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
        marginTop: 9
    },
    forgotPassText: {
        fontSize: 16,
        fontFamily: "Roboto-Bold",
        color: '#F5F5F5',
        lineHeight: 19
    },
    noAccount: {
        fontSize: 16,
        fontFamily: "Roboto-Bold",
        color: '#F5F5F5',
        lineHeight: 19
    },
    regText: {
        color:'red',
        fontSize: 16,
        fontFamily: "Roboto-Medium",
    },
});
