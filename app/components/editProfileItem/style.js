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
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: globalHeight(11),
        borderBottomColor: '#979797',
        borderBottomWidth: 1
    },
    nameText: {
        fontSize: globalWidth(14),
        fontFamily: "Roboto-Regular",
        color: '#979797',
        lineHeight: globalHeight(19),
        textAlign: 'center',
        marginLeft: 16
    },
    icon: {
        width: globalWidth(7),
        height: globalHeight(12),
        resizeMode: 'contain',
        marginRight: 6
    },

});

