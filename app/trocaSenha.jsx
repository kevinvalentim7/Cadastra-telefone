import { View } from "react-native";
import styles from "../style/styles";
import ColocaTexto from "../components/colocaTexto";
import { useState } from "react";
import Topo from "../components/topo";

function TrocaSenha(){
   
    const [login, setLogin] = useState("");
    const [palavraSeguranca, setPalavraSeguranca] = useState("");
    const [novaSenha, setNovaSenha] = useState("");
    const [confirmaNovaSenha, setConfirmaNovaSenha] = useState("");

    return( 
        <View style={styles.container}>
            <Topo />
         <View style={{ flex: 1, justifyContent: "center", width: "100%", alignItems: "center" }}>
            <ColocaTexto placeholder="Login" value={login} onChangeText={setLogin} />
            <ColocaTexto placeholder="Palavra de segurança" value={palavraSeguranca} onChangeText={setPalavraSeguranca} />
            <ColocaTexto placeholder="Nova senha" value={novaSenha} onChangeText={setNovaSenha} secureTextEntry />
            <ColocaTexto placeholder="Confirmar nova senha" value={confirmaNovaSenha} onChangeText={setConfirmaNovaSenha} secureTextEntry />
        </View>
        </View>
    )
}

export default TrocaSenha; 