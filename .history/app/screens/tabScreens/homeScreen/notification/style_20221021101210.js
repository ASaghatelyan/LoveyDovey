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
        paddingTop: Platform.OS === 'android' ? globalHeight(46) : null,
    },
    bottomView: {
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: globalWidth(17),
        paddingVertical: globalHeight(10),
        backgroundColor: '#2E76E0',
        height:height
    },
    gFlex: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    topTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: globalWidth(22),
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
    noDataView: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    noData: {
        width: globalWidth(116),
        height: globalWidth(116),
        marginBottom:globalHeight(10)
    },
    noDataText: {
        fontSize: globalWidth(20),
        fontFamily: "Roboto-Regular",
        color: '#210B04',
        lineHeight: globalHeight(28),
    },
    title:{
        fontSize: globalWidth(14),
        fontFamily: "Roboto-Regular",
        color: '#000',
        lineHeight: globalHeight(19),
     },
     description:{
        fontSize: globalWidth(16),
        fontFamily: "Roboto-Regular",
        color: '#000',
        lineHeight: globalHeight(19),
        marginTop:10,
        
     },
});

