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
        alignItems: 'center', 
        marginTop:globalHeight(50),
        marginBottom:globalHeight(100),
        backgroundColor:'#FFF',
        borderRadius:8
    },
    img:{
        width:globalWidth(264),
        height:globalHeight(528)
    },
    textContent:{ 
        alignItems:'center',
        justifyContent:'center',  
        backgroundColor:'#FFF'
    }, 
    title: {
        fontFamily: 'Roboto-Medium',
        fontSize: globalWidth(20),
        color: '#EB1829',
        marginBottom: globalHeight(25),
    },
    infoText: {
        fontFamily: 'Roboto-Regular',
        fontSize : globalWidth(12),
        color: '#3A3434', 
        textAlign: 'center'
    },
    video:{
        width:globalWidth(252),
        height:globalHeight(228),
       
    }
});