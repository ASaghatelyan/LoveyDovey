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
        paddingVertical: globalHeight(16),
    },
    gFlex: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    topTitle: {
        flexDirection: 'row',
        alignItems: 'center',
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
    bgImage: {
        height: '100%',
        alignItems: 'center',
        marginBottom: globalHeight(37),
    },
    video: {
        height: globalHeight(270),
    },
    infoText: {
        marginTop: globalHeight(16),
        color: '#210B04',
        fontSize: globalWidth(20),
        fontFamily: "Roboto-Medium",
        marginBottom:globalHeight(10)
    },
    description: {
        borderBottomColor: '#979797',
        backgroundColor: '#FFF',
        fontSize: globalWidth(14),
        marginBottom: globalHeight(16)
    },
    btnView: {
        alignItems: 'center',
        marginHorizontal: globalHeight(16),
        marginTop: globalHeight(24)
    },
    textInput: {
        backgroundColor: '#F8F8F8',
        height: globalHeight(172),
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        borderRadius: 10,
        marginTop: globalHeight(4),
        paddingHorizontal: globalWidth(16),
        paddingTop: globalHeight(16),
    },
    avatar: {
        width: globalWidth(48),
        height: globalWidth(48),
        borderRadius: globalWidth(24),
        marginRight: globalWidth(16)
    },
    commentItem: {
        marginBottom: globalHeight(17)
    },
    commentView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    nameText: {
        color: '#000',
        fontSize: globalWidth(14),
        fontFamily: "Roboto-Bold",
        lineHeight: globalHeight(16)
    },
    lastVisit: {
        color: '#979797',
        fontSize: globalWidth(10),
        fontFamily: "Roboto-Regular",
        lineHeight: globalHeight(16)
    },
    commentText: {
        color: '#979797',
        fontSize: globalWidth(12),
        fontFamily: "Roboto-Medium",
        lineHeight: globalHeight(16),
        width: globalWidth(270),
        marginLeft: globalWidth(62)
    },
    textAll: {
        color: '#EB1829',
        fontSize: globalWidth(14),
        fontFamily: "Roboto-Regular",
    },
    itemView: {
        borderBottomColor: '#C4C0BF',
        borderBottomWidth: 1,
        paddingBottom: globalHeight(24),
        marginBottom: globalHeight(24)
    },
    recentItemView: {
        flexDirection:'row',
        alignItems:'center',
        marginBottom:globalHeight(24)
    },
    blogImg: {
        width:globalWidth(93),
        height:globalHeight(69)
    },
    text: {
        fontSize: globalWidth(14),
        fontFamily: "Roboto-Regular",
        color: '#403D3D',
        lineHeight: globalHeight(14),
        width: globalWidth(213),
        marginLeft: globalWidth(16)
    }
});

