import { StyleSheet, Dimensions } from "react-native";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    styleInput: {
        borderColor: "#EEEEEE",
        borderWidth: 1,
        borderRadius: 4,
        marginTop: 15,
        paddingVertical: 16,
        paddingLeft: 16,
        color: "#fff",
        position: 'relative',
        paddingRight:35
    }
});

