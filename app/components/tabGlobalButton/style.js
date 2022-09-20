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
    globalView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#D6D6D6',
        borderRadius: 29,
        paddingLeft: globalWidth(16),
        paddingRight: globalWidth(14),
        width: '100%',
        paddingVertical: globalHeight(14),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 2.65,
        backgroundColor: '#FFF',
        elevation: 7,
        marginBottom: 16
    },
    topView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    img: {
        width: globalWidth(15),
        height: globalHeight(15),
        resizeMode: 'contain',
        marginRight: 10
    },
    gFlex: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    bottomView: {
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingHorizontal: globalWidth(17),
        paddingVertical: globalHeight(10),
    },
    titleText: {
        fontSize: globalWidth(24),
        fontFamily: "Roboto-Medium",
        color: '#000',
        lineHeight: globalHeight(28),
        textAlign: 'center',
    },
    nameText: {
        fontSize: globalWidth(14),
        fontFamily: "Roboto-Regular",
        color: '#000',
        lineHeight: globalHeight(19),
        textAlign: 'center',
    },
    chooseItem: {
        fontSize: globalWidth(16),
        fontFamily: "Roboto-Bold",
        color: '#000',
        lineHeight: globalHeight(19),
        textAlign: 'center',
    },
    rightIc: {
        width: globalWidth(24),
        height: globalHeight(24)
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

});

