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
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: globalWidth(16),
        marginBottom:globalHeight( 37),
        marginTop:globalHeight(240)
    },
    err: {
        fontSize: 14,
        fontFamily: "Roboto-Bold",
        color: 'red',
        textAlign: 'center',
        lineHeight: 18,
        marginTop: 6
    },
    infoText: {
        fontSize: globalWidth(14),
        fontFamily: "Roboto-Medium",
        color: '#F5F5F5',
        lineHeight:globalHeight(19),
        marginTop:globalHeight(16)
    },
    bgImage: {
        height: '100%',
        alignItems: 'center',
        paddingHorizontal: globalWidth(16),
        marginBottom: globalHeight(37),
    },                          
    lockView: {
        position: 'absolute',
        right: globalWidth(18),
        bottom:globalHeight( 17)
    },
    lockIc: {
        width: globalWidth(15),
        height: globalHeight(17),
        resizeMode: 'contain'
    },
    back: {
        width: globalWidth(21),
        height: globalHeight(12),
        tintColor: '#FFF',
    },
    backView: {
        marginLeft: globalWidth(16)
    },
    titleLogin: {
        fontSize: globalWidth(14),
        fontFamily: "Roboto-Bold",
        color: '#FFF',
        marginTop: height / 13.31,
        lineHeight: globalHeight(18)
    },
    emailView: {
        position: 'absolute',
        right: globalWidth(18),
        bottom: globalHeight(18)
    },
    emailIc: {
        width:globalWidth(17),
        height: globalHeight(11)
    },
    bottomView: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: globalHeight(35)
    },
    gFlex: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    noAccount: {
        fontSize: globalWidth(14),
        fontFamily: "Roboto-Medium",
        color: '#F5F5F5',
        lineHeight:globalHeight(19),
        marginBottom:globalHeight(16)
    },
    regText: {
        color: '#EB1829',
        fontSize: globalWidth(14),
        fontFamily: "Roboto-Medium",
    },
    resendView: {
        alignItems: 'center',
        justifyContent: 'center'
    },
});
