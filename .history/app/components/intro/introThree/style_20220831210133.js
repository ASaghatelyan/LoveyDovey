import { StyleSheet, Dimensions } from "react-native";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'space-between',
        height:'100%', 
    },
    content:{
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'center', 
    },
    textContent:{ 
        alignItems:'center',
        justifyContent:'center', 
        marginTop:50,
        marginBottom:100
    },
    heart:{
        width:width/2.37, 
        resizeMode:'contain',
        height:125
    },
  
    title: {
        fontFamily: 'Roboto-Medium',
        fontSize: 20,
        color: '#EB1829',
        marginBottom: 25
    },
    infoText: {
        fontFamily: 'Roboto-Regular',
        fontSize: 20,
        color: '#3A3434', textAlign: 'center'
    },
});
