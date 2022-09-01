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
        flexGrow: 1,
        paddingBottom:globalHeight(100), 
    },
    skipView: {
        position: 'absolute',
        right: globalHeight(16),
        top: globalWidth(50)
    },
    skipText: {
        fontFamily: 'Roboto-Medium',
        fontSize: globalWidth(14),
        color: '#EB1829',
        marginBottom: globalWidth(25)
    },
    bottomView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: globalWidth(41),
    },
    icon: {
        width: globalWidth(21),
        height: globalHeight(12),
        resizeMode: 'contain',
        margin: 2
    },
    cycle: {
        width: globalWidth(8),
        height: globalHeight(8),
        marginLeft: globalWidth(8),
        resizeMode:'contain'
    },
    infoView: {
        paddingHorizontal: globalWidth(25),
        flex: 1,
        justifyContent: 'flex-end',
        marginTop:globalHeight(190)
    }
});

