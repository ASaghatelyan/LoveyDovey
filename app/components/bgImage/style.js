import { StyleSheet, Dimensions } from "react-native";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: Platform.OS === 'ios' ? 0 : 0,
        width: width,
        height:'100%',
        backgroundColor: '#11161f'
    },
    image:{
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    }
});
