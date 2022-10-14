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
    container: {
        flex: 1,
        flexDirection: "column", //column direction
        justifyContent: 'center',
        alignItems: 'center',
        // paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    progressBar: {
        height: globalHeight(13),
        width: '100%',
        backgroundColor: '#C4C0BF',
        borderRadius: 50,
        display:'flex';
        flexDirection:row
    },
    categoryText: {
        fontSize: globalWidth(14),
        fontFamily: "Roboto-Medium",
        color: '#3A3434',
        lineHeight: globalHeight(16),
        marginBottom: globalHeight(5)
    },
    procentCol: {
        fontSize: globalWidth(14),
        fontFamily: "Roboto-Medium",
        color: '#FFF',
        lineHeight: globalHeight(16),
        
    },
    procentView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

