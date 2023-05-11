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
        backgroundColor: '#FFF',
        width: globalWidth(325),
        // minHeight: globalHeight(144),
        borderRadius: 2,
        paddingHorizontal: globalWidth(26),
        paddingVertical: globalHeight(24),
    },
    title: {
        fontSize: globalWidth(16),
        color: '#000',
        lineHeight: globalHeight(19),
        fontFamily: 'Roboto-Medium',
        marginBottom: 7
    },
    infoText: {
        fontSize: globalWidth(12),
        color: '#000',
        lineHeight: globalHeight(15),
        fontFamily: 'Roboto-Regular',
    },
    battonView: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginTop: globalHeight(5),
    },

});
