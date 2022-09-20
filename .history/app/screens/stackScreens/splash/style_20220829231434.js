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
    logoView:{
        borderRadius:100,
        borderWidth:12,
        borderColor:'rgba(255, 255, 255, 0.39)'
    },
    logo: {
       
        width: width / 2.97,
        height: width / 2.97,
      
    },
     
});
