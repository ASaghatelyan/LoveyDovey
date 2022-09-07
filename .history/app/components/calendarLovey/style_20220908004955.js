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
    content:{
        marginTop: 52 ,
        marginHorizontal:globalWidth(24)
    },
    topBtn:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:globalWidth(20),
    },
    arrowIc:{
        width:globalWidth(28),
        height:28, 
    },
    titleText:{
        color: "#000",
        fontSize: 16,
        lineHeight: 24,
        fontFamily:"Roboto-Medium",
        marginLeft:2
    },
});

