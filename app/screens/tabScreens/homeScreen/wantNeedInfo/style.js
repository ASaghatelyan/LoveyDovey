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
        paddingTop: Platform.OS === 'android' ? globalHeight(46) : null
    },
    bottomView: {
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: globalWidth(17),
    },
    edit:{
        width:24,
        height:24,
        resizeMode:'contain'
    },
    gFlex: {
        flex: 0.9,
        justifyContent: 'center',
        alignItems: 'center'
    },
    topTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: globalWidth(33),
        marginHorizontal: globalHeight(24),
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
    itemView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: globalHeight(12),
        borderBottomColor: '#D6D6D6',
        borderBottomWidth: 1,
        marginBottom: 12,
    },
    icon: {
        width: globalWidth(24),
        height: globalHeight(24),
        resizeMode: 'contain',
    },
    title: {
        fontSize: globalWidth(16),
        fontFamily: "Roboto-Regular",
        color: '#403D3D',
        lineHeight: globalHeight(19),
    },
    description: {
        borderBottomColor: '#979797',
        borderBottomWidth: 1,
        marginBottom: 10
    },
    infoText: {
        paddingVertical: 12,
        paddingLeft: 16,
        fontSize: globalWidth(16),
        fontFamily: "Roboto-Regular",
    },
    descriptionText: { 
        fontSize: globalWidth(10),
        fontFamily: "Roboto-Regular",
    }
});

