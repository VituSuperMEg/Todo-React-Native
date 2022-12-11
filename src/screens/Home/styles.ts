import { StyleSheet } from "react-native";

export const styles= StyleSheet.create({
   container : {
      backgroundColor : '#191919',
      flex : 1,
   },
   header:{
    backgroundColor : '#0D0D0D',
    width : '100%',
    height : 300,
   },
   headerContent : {
      alignItems : 'center',
      marginTop : 100,
   },
   tabTask : {
      marginTop : 130,
      flexDirection : "row",
      alignItems : 'center'
   },
   tab : {
      backgroundColor : '#262626',
      color : '#808080',
      width : 350,
      height : 54,
      padding : 10,
      paddingLeft : 15,
      fontSize : 16,
      borderRadius: 5,
      borderWidth  : 1,
      borderColor : '#000'
   },
   btn : {
      backgroundColor : '#1E6F9F',
      width : 52,
      height : 52,
      alignItems : "center",
      justifyContent : 'center',
      marginLeft : 20,
      borderRadius : 5
   },
   btnText : {
      color : '#fff',
      fontSize : 16
   },
   content : {
      margin : 20,
      alignItems : 'center',
      paddingTop : 70,

   },
   infoCriada:{
      flexDirection : 'row',
      alignItems : 'center',
      width : 427
   },
   border:{
     backgroundColor : '#000',
     marginTop : 10,
     width : 400,
     height : 1
   },
   textTask : {
      color : '#4EA8DE',
      fontSize : 23,
   },
   ciclo:{
      backgroundColor : '#333333',
      height : 25,
      width : 25,
      borderRadius : 45,
      marginLeft : 5,
      alignItems : 'center',
   },
   textCount: {
      color : '#fff',
      fontSize : 15,
      marginTop : 3,
      fontWeight : 'bold'
   },
   info : {
      position : 'relative',
      top : 60,
      left : 40,
   },
   infoRow:{
      flexDirection : "row"
   },
   infoResolvida : {
       position : 'relative',
       right: 150,
       flexDirection : 'row',
       alignItems : 'center'
   },
   textResolvida:{
     color : '#8284FA',
     fontSize : 18
   },
   listEmptyText:{
      color : '#fff',
      marginTop : 120
   },
   contentEmpty:{
      alignItems : 'center',
      marginTop : '50%'
   },
   textBold:{
      color : '#808080',
      fontWeight : 'bold',
      marginTop : 20,
      fontSize : 16
   },
   textStyle : {
      textDecorationLine : 'line-through'
   },
   textEmpty:{
      color : '#808080',
   }
});