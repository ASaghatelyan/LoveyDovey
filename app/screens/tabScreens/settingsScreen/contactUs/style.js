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
        paddingTop: Platform.OS === 'android' ? globalHeight(46) : null
    },
    bottomView: {
        width: '100%', 
        justifyContent: 'space-between',
        paddingHorizontal: globalWidth(17),
        paddingVertical: globalHeight(10),
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
    bgImage: {
        height: '100%',
        alignItems: 'center',
        marginBottom: globalHeight(37),
    },
    infoView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: globalWidth(18)
    },
    infoText: {
        fontSize: globalWidth(12),
        fontFamily: "Roboto-Regular",
        color: '#403D3D',
        lineHeight: globalHeight(14),
    },
    mess: {
        fontSize: globalWidth(16),
        fontFamily: "Roboto-Regular",
        color: '#210B04',
        lineHeight: globalHeight(19),
        marginTop:globalHeight(59),
        marginBottom:globalHeight(16)
    },
    infoIc: {
        width: globalWidth(24),
        height: globalHeight(24),
        marginRight: globalWidth(24)
    },
    description: {
        borderBottomColor: '#979797',
        backgroundColor: '#FFF',
        fontSize: 14,
        marginBottom: 16
    },
    btnView:{
        alignItems:'center',
        marginHorizontal:globalHeight(16),
        justifyContent:'flex-end', 
        flex:1
    },
});

