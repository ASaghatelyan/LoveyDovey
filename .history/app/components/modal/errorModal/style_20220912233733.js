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
    content: {
        width: '100%',
        position: 'absolute',
        top: 0, 
        paddingHorizontal: globalWidth(24), 
        justifyContent: 'space-between',
        backgroundColor: '#E35A65', 
        margin: 0
    },

    whosIn: {
        fontSize: globalWidth(12),
        color: '#FFF',
        lineHeight: globalHeight(25),
        fontFamily: 'Roboto-Regular'
    },
    closeIc: {
        width: globalWidth(24),
        height: globalHeight(24),
        tintColor:'#FFF',
        marginRight:10
    },
    bottomSide: {
        flexDirection: 'row',
        marginTop:Platform.OS=== globalHeight(30), 
        paddingVertical:globalHeight(17)
    },
  

});
