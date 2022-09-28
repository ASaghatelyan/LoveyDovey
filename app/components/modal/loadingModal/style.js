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
    modal: { 
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: globalWidth(150),
        height: globalWidth(150)
    }

});
