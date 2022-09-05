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
    container:{
        alignItems:'center', 
        justifyContent:'space-between',
        height:'100%',  
        paddingTop:globalHeight(190)
    },
    content:{
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'center', 
    },
    textContent:{ 
        alignItems:'center',
        justifyContent:'center', 
        marginTop:globalHeight(50),
        marginBottom:globalHeight(100)
    }, 
    calendar:{
        width:globalWidth(240), 
        resizeMode:'contain',
        height:globalHeight(194)
    },
    title: {
        fontFamily: 'Roboto-Medium',
        fontSize: globalWidth(20),
        color: '#EB1829',
        marginBottom: globalHeight(25)
    },
    infoText: {
        fontFamily: 'Roboto-Regular',
        fontSize: globalWidth(12),
        color: '#3A3434',
         textAlign: 'center'
    },
});
