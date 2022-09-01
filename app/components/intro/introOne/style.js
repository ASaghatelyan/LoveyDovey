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
        justifyContent: 'center',
        marginTop:globalHeight(50),
        marginBottom:globalHeight(100)
    },
    title: {
        fontFamily: 'Roboto-Medium',
        fontSize: globalWidth(20),
        color: '#EB1829',
        marginBottom: globalHeight(25)
    },
    infoText: {
        fontFamily: 'Roboto-Regular',
        fontSize : globalWidth(12),
        color: '#3A3434', textAlign: 'center'
    },
});
