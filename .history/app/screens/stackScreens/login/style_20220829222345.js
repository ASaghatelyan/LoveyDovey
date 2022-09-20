import { StyleSheet, Dimensions } from "react-native";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    content: {
        flexGrow: 1,
        position: 'relative',
        paddingHorizontal:16
    },
    bgImage: {
        height: '100%',
        alignItems: 'center',
    },
    logo: {
        marginTop: 120,
        width: width / 2.97,
        height: width / 2.97
    },
    titleLogin: {
        fontSize: 14,
        fontFamily: "Roboto-Bold",
        color: '#FFF',
        marginBottom:16,
        marginTop:height/13.31
    },
});
