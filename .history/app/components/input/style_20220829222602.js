import { StyleSheet, Dimensions } from "react-native";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    styleInput: {
        borderColor: "#EEEEEE",
        backgroundColor:'#F5F5F5',
        borderWidth: 1,
        borderRadius: 58,
        marginTop: 15,
        paddingVertical: 16,
        paddingLeft: 16,
        color: "#000",
        position: 'relative',
        paddingRight:35,
        fontFamily:'Roboto-Regular',F
    }
});

