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
        // alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingHorizontal: globalWidth(17),
        paddingVertical: globalHeight(10),
    },
    itemView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 45
    },
    titleText: {
        fontSize: globalWidth(24),
        fontFamily: "Roboto-Medium",
        color: '#403D3D',
        lineHeight: globalHeight(28),
        textAlign: 'left',
    },
    categoryText: {
        fontSize: globalWidth(14),
        fontFamily: "Roboto-Medium",
        color: '#3A3434',
        lineHeight: globalHeight(16),
        marginBottom: 5
    },
    procent: {
        fontSize: globalWidth(12),
        fontFamily: "Roboto-Medium",
        color: '#3A3434',
        lineHeight: globalHeight(16),
        position: 'absolute'
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
    name: {
        fontSize: globalWidth(20),
        fontFamily: "Roboto-Bold",
        color: '#000',
        lineHeight: globalHeight(23),
    },
    img: {
        width: globalWidth(16),
        height: globalHeight(16),
        resizeMode: 'contain',
        marginLeft: 12
    },
    img2: {
        width: globalWidth(22),
        height: globalHeight(16),
        // resizeMode: 'contain',
        marginLeft: 12
    },
    img3: {
        width: globalWidth(16),
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
    me: {
        width: globalWidth(81),
        height: globalHeight(64),
        resizeMode: 'contain',
        marginLeft: 32
    },
    userH: {
        width: globalWidth(81),
        height: globalHeight(64),
        resizeMode: 'contain',

    },
    leftSide: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 32
    },
    rightSide: {
        marginLeft: 32,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addIc: {
        width: globalWidth(81),
        height: globalHeight(64),
        resizeMode: 'contain',
    },
    partner: {
        fontSize: globalWidth(12),
        fontFamily: "Roboto-Medium",
        color: '#000',
        lineHeight: globalHeight(14),
    },
});

