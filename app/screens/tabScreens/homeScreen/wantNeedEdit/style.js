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
        paddingHorizontal: globalWidth(16),
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
        fontSize: globalWidth(20),
        fontFamily: "Roboto-Medium",
        color: '#210B04',
        lineHeight: globalHeight(28),
        textAlign: 'center',
        marginHorizontal: globalHeight(59),
        marginBottom: globalWidth(36)
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
    description: {
        borderBottomColor: '#979797',
        backgroundColor: '#FFF',
        fontSize: 14,
        marginBottom: 16 
    },
    topTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        marginBottom: globalWidth(33), 
    },
    gFlex: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    back: {
        width: globalWidth(21),
        height: globalHeight(12)
    },
    titleText: {
        fontSize: globalWidth(24),
        fontFamily: "Roboto-Medium",
        color: '#403D3D',
        lineHeight: globalHeight(28),
    },
    titleTop: {
        fontSize: globalWidth(16),
        fontFamily: "Roboto-Regular",
        color: '#EB1829',
        lineHeight: globalHeight(19),
        marginBottom: globalHeight(24)
    },
});

