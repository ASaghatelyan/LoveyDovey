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
    inputView:{
        paddingHorizontal:16
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

