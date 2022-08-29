import { StyleSheet, Dimensions } from "react-native";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    styleInput: { 
        backgroundColor:'#F5F5F5', 
        borderRadius: 58,
        marginTop: 14,
        paddingVertical: 14,
        paddingLeft: 16,
        color: "#000",
        position: 'relative',
        paddingRight:35,
        fontFamily:'Roboto-Regular',
        fontSize:16,
        minHeight:48
    }
});

