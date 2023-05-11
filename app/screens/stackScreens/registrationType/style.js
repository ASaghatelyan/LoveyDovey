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
    },
    backBtn: {
        width: globalWidth(24),
        height: globalHeight(12),
        tintColor: '#FFF'
    },
    btnView: {
        position: 'absolute',
        top: globalHeight(50),
        left: globalWidth(24)
    },
    bgImage: {
        height: '100%',
        alignItems: 'center',
        paddingHorizontal: globalWidth(16),
        marginBottom: globalHeight(37),
    },
    logo: {
        marginTop: globalHeight(120),
        width: width / 2.97,
        height: width / 2.97,
        marginBottom: globalHeight(37)
    },
    bottomView: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: globalHeight(60)
    },
    signUpText: {
        color: '#F5F5F5',
        fontSize: globalWidth(20),
        fontFamily: "Roboto-Medium",
        marginVertical: globalHeight(20)
    },
    itemView: {
        backgroundColor: 'red',
        paddingVertical: globalHeight(40),
        width: '45%',
        borderRadius: 20,
        marginTop: globalHeight(20),
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemText: {
        fontSize:globalWidth(16),
        fontFamily: "Roboto-Bold",
        color: '#F5F5F5',
        lineHeight: globalHeight(19)
    },

});
