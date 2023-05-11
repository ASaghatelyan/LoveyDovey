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
    bgImage: {
        height: '100%',
        alignItems: 'center',
        paddingHorizontal: globalWidth(16),
        marginBottom: globalHeight(37),
    },
    backBtn: {
        width: globalWidth(24),
        height: globalHeight(12),
        tintColor: '#FFF'
    },
    btnView: {
        position: 'absolute',
        top: globalHeight(50),
        left: globalWidth(24)
    },
    logo: {
        marginTop: globalHeight(120),
        width: width / 2.97,
        height: width / 2.97,
        marginBottom:globalHeight(37)
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
        left: globalWidth(18),
        bottom: globalHeight(18)
    },
    emailIc: {
        width: globalWidth(17),
        height: globalHeight(11)
    },
    lockView: {
        position: 'absolute',
        left: globalWidth(18),
        bottom: globalHeight(17)
    },
    lockIc: {
        width: globalWidth(15),
        height: globalHeight(17),
        resizeMode: 'contain'
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
    forgotPassView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: globalHeight(9)
    },
    forgotPassText: {
        fontSize: globalWidth(16),
        fontFamily: "Roboto-Bold",
        color: '#F5F5F5',
        lineHeight: globalHeight(19)
    },
    noAccount: {
        fontSize: globalWidth(16),
        fontFamily: "Roboto-Bold",
        color: '#F5F5F5',
        lineHeight: globalHeight(19)
    },
    regText: {
        color:'red',
        fontSize: globalWidth(16),
        fontFamily: "Roboto-Medium",
    },
});
