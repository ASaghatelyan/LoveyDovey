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
        paddingTop: Platform.OS === 'android' ? globalHeight(46) : null
    },
    itemView: {
        backgroundColor: '#FFF',
        paddingVertical: globalHeight(6),
        paddingLeft: globalWidth(6),
        borderRadius: 4,
        marginBottom: globalHeight(16),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65, 
        elevation: 7,
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
        color: '#403D3D',
        lineHeight: globalHeight(28),
        textAlign: 'left',
        marginHorizontal: globalHeight(24),
        marginBottom: globalWidth(33)
    },
    text: {
        fontSize: globalWidth(12),
        fontFamily: "Roboto-Regular",
        color: '#403D3D',
        lineHeight: globalHeight(14),
        width: globalWidth(213),
        marginLeft: 16
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
    imgView: {
        flexDirection: 'row',
    },
    img: {
        width: globalWidth(82),
        height: globalHeight(96),
        alignItems: 'center',
        justifyContent: 'center',
    },
    playBtn: {
        width: globalWidth(22),
        height: globalHeight(22),

    },
});

