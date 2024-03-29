import { StyleSheet, Dimensions, Platform } from "react-native";

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
    mainContainer: {

    },
    content: {
        flexGrow: 1,
        position: 'relative',
        height: '100%',
        paddingTop: Platform.OS === 'android' ? globalHeight(46) : null
    },
    bottomView: {
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingHorizontal: globalWidth(17),
        paddingVertical: globalHeight(10),
    },
    titleText: {
        fontSize: globalWidth(24),
        fontFamily: "Roboto-Medium",
        color: '#403D3D',
        lineHeight: globalHeight(28),
        textAlign: 'left',
    },
    titleView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: globalWidth(33),
        justifyContent: 'space-between',
        marginHorizontal: globalHeight(24),
    },
    gFlex: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    img: {
        width: globalWidth(19),
        height: globalHeight(19),
        marginLeft: 12
    },
    img2: {
        width: globalWidth(18),
        height: globalHeight(18),
        // resizeMode: 'contain',
        marginLeft: 12
    },
    img3: {
        width: globalWidth(18),
        height: globalHeight(19),
        marginLeft: 12
    },
    infoView: {
        paddingHorizontal: globalWidth(17),
        flex: 1,
        justifyContent: 'flex-end',
        marginTop: globalHeight(190),
        backgroundColor: ' rgba(71, 85, 112, 0.55)'
    },
    bgImage: {
        height: '100%',
        alignItems: 'center',
        marginBottom: globalHeight(37),
    },
    text: {
        marginLeft: globalWidth(31),
        marginTop: globalHeight(48),
        color:'#EB1829',
        fontSize: globalWidth(15),
        fontFamily: "Roboto-Regular",
    },
    textIn:{
        color:'#000',
        fontSize: globalWidth(14),
        fontFamily: "Roboto-Regular",
    },
});

