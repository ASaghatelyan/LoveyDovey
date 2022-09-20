import { StyleSheet, Dimensions } from "react-native";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    content: {
        flexGrow: 1,
        position: 'relative'
    },
    bgImage: {
        height: '100%',
        alignItems: 'center',
        paddingTop:10
    },
    logo: {
        width:100,
        height:100
    },
});
