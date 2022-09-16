import { StyleSheet, Dimensions, View } from "react-native";

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
        marginTop: globalHeight(50),
        marginBottom: globalHeight(100),
        borderRadius: 8,
        overflow: 'hidden',
        position: 'relative',marginTop:height/3.5
    },
    img: {
        width: globalWidth(264),
        height: globalHeight(528)
    },
    textContent: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF'
    },
    title: {
        fontFamily: 'Roboto-Medium',
        fontSize: globalWidth(14),
        color: '#000',
        marginBottom: globalHeight(25),
        marginTop: globalHeight(13)
    },
    infoText: {
        fontFamily: 'Roboto-Regular',
        fontSize: globalWidth(12),
        color: '#3A3434',
        textAlign: 'left',
        marginBottom: globalHeight(76),
        marginHorizontal: globalHeight(21)
    },
    video: {
        width: '100%',
        height: globalHeight(166),
    },
    playViwe: {
        position: 'absolute', 
        top:globalHeight(60)
    },
    play: {
        width: globalWidth(44),
        height: globalHeight(44),
        resizeMode:'contain'
    },
});
