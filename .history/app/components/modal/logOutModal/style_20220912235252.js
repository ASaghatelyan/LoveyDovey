import { Dimensions, Platform, StyleSheet } from "react-native";

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
    modal:{
         backgroundColor:'#FFF',
         width:globalWidth(325),
         height:globalHeight(144),
         borderRadius:2,
         paddingHorizontal:globalWidth(26),
         paddingVertical:globalHeight(24), 
    },

    title: {
        fontSize: globalWidth(12),
        color: '#000',
        lineHeight: globalHeight(25),
        fontFamily: 'Roboto-Regular'
    },
    infoText: {
        fontSize: globalWidth(12),
        color: '#000',
        lineHeight: globalHeight(25),
        fontFamily: 'Roboto-Medium'
    },
 

});
