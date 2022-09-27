import { Dimensions, StyleSheet } from "react-native";

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
        width: '100%',
        position: 'absolute',
        bottom:0,
        borderTopEndRadius: 16,
        borderTopLeftRadius: 16,
        paddingHorizontal: globalWidth(24),
        paddingBottom: globalHeight(68),
        justifyContent: 'space-between',
        backgroundColor: '#FFF',
        paddingTop: globalHeight(8),
        margin: 0,
        height:globalHeight(385)
    },
    titleView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    whosIn: {
        fontSize: globalWidth(16),
        color: '#000',
        lineHeight: globalHeight(25),
    },
    closeIc: {
        width: globalWidth(24),
        height: globalHeight(24)
    },
    bottomSide: {
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        position: 'relative',
        zIndex: 999
    },
    itemView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
    imgIc: {
        width: globalWidth(17),
        height: globalHeight(17),
    },

});
