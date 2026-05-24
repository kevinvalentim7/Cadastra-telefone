import { View, TouchableOpacity, Text, Alert } from "react-native";
import styles from "../style/styles";
import ColocaTexto from "../components/colocaTexto";
import { useState } from "react";
import Topo from "../components/topo";
import { inserirUsuario } from "../src/db/database";
import { router } from "expo-router";

function Cadastro(){

    const [nome, setNome] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [celular, setCelular] = useState("");
    const [perguntaSeguranca, setPerguntaSeguranca] = useState("");
    const [respostaSeguranca, setRespostaSeguranca] = useState("");

    function cadastrar(){

        if( 
            !nome ||
            !login ||
            !password ||
            !confirmPassword ||
            !email ||
            !celular ||
            !perguntaSeguranca ||
            !respostaSeguranca
        ){
            Alert.alert("Erro", "Preencha todos os campos");
            return;
        }

        if(password !== confirmPassword){
            Alert.alert("Erro", "As senhas não coincidem");
            return;
        }

        inserirUsuario(
            nome,
            login,
            password,
            email,
            celular,
            perguntaSeguranca,
            respostaSeguranca
        );

        Alert.alert("Sucesso", "Usuário cadastrado");
        router.push("/login");
        console.log({
            nome,
            login,
            password,
            email,
            celular,
            perguntaSeguranca,
            respostaSeguranca
        });
    }

    return(
        <View style={styles.container}>
            <Topo/>
        <View style={{ flex: 1, justifyContent: "center", width: "100%", alignItems: "center" }}>
            <ColocaTexto
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
            />
            <ColocaTexto
                placeholder="Login"
                value={login}
                onChangeText={setLogin}
            />

            <ColocaTexto
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                senha={true}
            />

            <ColocaTexto
                placeholder="Confirmar senha"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                senha={true}
            />

            <ColocaTexto
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />

            <ColocaTexto
                placeholder="Celular"
                value={celular}
                onChangeText={setCelular}
            />

            <ColocaTexto
                placeholder="Pergunta de segurança"
                value={perguntaSeguranca}
                onChangeText={setPerguntaSeguranca}
            />

            <ColocaTexto
                placeholder="Resposta de segurança"
                value={respostaSeguranca}
                onChangeText={setRespostaSeguranca}
            />

            <TouchableOpacity
                onPress={cadastrar}
                style={styles.estiloBotao}
            >
                <Text style={[styles.fonteDefault, { textAlign: "center" }, styles.corFonteBranca]}>
                    Cadastrar
                </Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default Cadastro;