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
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        paddingVertical:globalHeight(10),
    },
    checkBoxConteiner: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center'
    },
    checkBoxText: {
        color: "#ffffff",
        fontSize: globalWidth(16),
        lineHeight: globalHeight(19),
        fontFamily: "Roboto-Regular",
        marginLeft:globalWidth(11)
    },
    checkBocStyle: {
        transform: [{ scaleX: 1 }, { scaleY: 1.2 }], 
        width: 11,
        height: 11, 
      
    }
});
