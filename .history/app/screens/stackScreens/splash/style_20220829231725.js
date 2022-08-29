import { StyleSheet, Dimensions } from "react-native";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    content: {
        flexGrow: 1,
        position: 'relative',
    },
    bgImage: {
        height: '100%', 
        paddingHorizontal: 16,
        marginBottom: 37,
    },
    
    logo: { 
        width: width / 2.3,
        height: width / 2.97, 
    },
     
});
