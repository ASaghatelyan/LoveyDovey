import { StyleSheet, Dimensions } from "react-native";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    container:{
        flexGrow:1,
       paddingBottom:height/8.12,
       justifyContent:'space-between'
    },
    skipView:{
        position:'absolute',
        right:16,
        top:50
    },
    skipText:{
        fontFamily: 'Roboto-Medium',
        fontSize: 14,
        color: '#EB1829',
        marginBottom: 25
    },
    bottomView:{
        flexDirection:'row',
        flex:1,
        justifyContent:'space-between',
        paddingHorizontal:41, 
    },
    icon:{
        width:21,
        height:12
    },
    cycle:{
        width:8,
        height:8,
        marginHorizontal:8
    }
});

