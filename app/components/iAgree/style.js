import { StyleSheet, Dimensions } from "react-native";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    content: {
        width: "100%",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "flex-start",
        marginTop: 23, 

    },
    checkBoxConteiner: {
        flexDirection: 'row',
        alignItems: "center",
    }, 
    checkBoxText: {
        color: "#ffffff",
        fontSize: 12,
        lineHeight: 21,
        fontFamily:"Roboto-Regular",
        marginLeft:2
    },
    terms: {
        color: "#4D94BD",
        textDecorationLine: 'underline', 
        fontSize: 12, 
        fontFamily:'Roboto-Bold',
        marginLeft:2
    }
});

