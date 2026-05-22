import { View, Text } from "react-native";

function Topo(){
    return(
        <View style={{flexDirection: "row", backgroundColor: "black", alignItems: "flex-start", justifyContent: "center", top: "start", top: 20}}>
            <Text style={{color: "#1763CF", fontFamily: "Arial", fontSize: 70, fontWeight: "bold"}}>Telefone</Text>
            <Text style={{color: "white", fontFamily: "Arial", fontSize: 70, fontWeight: "bold"}}>ID</Text>
        </View>
    )
}

export default Topo;