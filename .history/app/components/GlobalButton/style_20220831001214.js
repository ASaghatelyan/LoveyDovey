import { StyleSheet, Dimensions } from "react-native";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    loginBtn: {
        backgroundColor: '#EB1829',
        borderRadius: 58,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 14,
        marginTop: height / 25.375,
        minHeight: 48
    },
    loginText: {
        fontSize: 16,
        fontFamily: "Roboto-Bold",
        color: '#F5F5F5',
        lineHeight: 19
    },
});

