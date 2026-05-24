import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   container:{
    flex: 1,
    backgroundColor: "black",
    alignContent: 'center',
    alignItems: 'center',
   },
    colocaTexto:{
     backgroundColor: "white",
     margin: 10,
     borderWidth: 1,
     borderColor: "black",
     height: 40,
     width: '90%',
     borderRadius: 10,
     placeholderTextColor: "black",
   },
   fonteDefault:{
    fontFamily: "arial",
    fontSize: 20,
    fontWeight: "bold",
   },
   corFonteBranca:{
    color: "white"
   },
   estiloBotao:{
    backgroundColor: "#1763CF",
    width: "90%",
    borderWIdth: 1,
    borderRadius: 10,
    margin: 10,
    height: 30,
   },
   containerTelefone:{
      backgroundColor: "white",
      flex: 1,
      alignContent: "center",
      justifyContent: "center"
   }
})

export default styles;