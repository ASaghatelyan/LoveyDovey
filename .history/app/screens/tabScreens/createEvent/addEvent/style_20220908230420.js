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
        flexGrow: 1,
        position: 'relative',
        height: '100%',
        paddingHorizontal: globalWidth(16),
        paddingTop:Platform.OS === 'android' ? globalHeight(30) :null
    },
    bottomView: {
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingHorizontal: globalWidth(17),
        paddingVertical: globalHeight(10),
    },
    titleText: {
        fontSize: globalWidth(20),
        fontFamily: "Roboto-Medium",
        color: '#210B04',
        lineHeight: globalHeight(28),
        textAlign: 'center',
        marginHorizontal: globalHeight(59),
        marginBottom: globalWidth(36)
    },
    infoView: {
        paddingHorizontal: globalWidth(17),
        flex: 1,
        justifyContent: 'flex-end',
        marginTop: globalHeight(190),
        backgroundColor: ' rgba(71, 85, 112, 0.55)'
    },
    bgImage: {
        height: '100%',
        alignItems: 'center',
        marginBottom: globalHeight(37),
    },
    description: {
        borderBottomColor: '#979797',
        borderBottomWidth:1,
        paddingHorizontal:16,
        paddingVertical:12,
        marginBottom:16
    },

});

