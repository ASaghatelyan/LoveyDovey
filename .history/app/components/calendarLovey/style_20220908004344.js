import { StyleSheet, Dimensions } from "react-native";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    topBtn:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    arrowIc:{
        width:28,
        height:28, 
    },
    titleText:{},
});

