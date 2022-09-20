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
    mainContainer:{
        flex:1,
   
    },
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
        marginBottom:globalHeight(22)
    },
    gFlex: {
        flex: 1,
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
    userAvatar:{
        width:globalWidth(138),
        height:globalHeight(138),
        borderRadius:globalWidth(138/2),
    },
    avatarView:{
        width:'100%',
        alignItems:'center', 
        marginBottom:24, 
    },
    editPhoto:{
        width:globalWidth(28),
        height:globalHeight(28),
        resizeMode:'contain',
        right:globalWidth(-110),
        bottom:globalHeight(46)
    },
    description: {
        borderBottomColor: '#979797',
        backgroundColor: '#FFF',
        fontSize: 14, 
    },
    btnView:{
        alignItems:'center',
        marginHorizontal:globalHeight(16),
        justifyContent:'center', 
        flex:1,
        marginBottom:30
    },
});

