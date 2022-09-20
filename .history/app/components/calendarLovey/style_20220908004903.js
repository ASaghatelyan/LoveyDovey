import { StyleSheet, Dimensions } from "react-native";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    content:{
        marginTop: 52 ,
        
    },
    topBtn:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20,
    },
    arrowIc:{
        width:28,
        height:28, 
    },
    titleText:{
        color: "#000",
        fontSize: 16,
        lineHeight: 24,
        fontFamily:"Roboto-Medium",
        marginLeft:2
    },
});

