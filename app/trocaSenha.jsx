import { View, Alert, TouchableOpacity, Text } from "react-native";
import styles from "../style/styles";
import ColocaTexto from "../components/colocaTexto";
import { useState } from "react";
import Topo from "../components/topo";
import { esqueciSenha } from "../src/db/database";
import { useRouter } from "expo-router";

function TrocaSenha() {

    const router = useRouter();

    const [login, setLogin] = useState("");
    const [respostaSeguranca, setRespostaSeguranca] = useState("");
    const [novaSenha, setNovaSenha] = useState("");
    const [confirmaNovaSenha, setConfirmaNovaSenha] = useState("");

    function handleTrocaSenha() {

        if (
            !login ||
            !respostaSeguranca ||
            !novaSenha ||
            !confirmaNovaSenha
        ) {

            Alert.alert("Erro", "Preencha todos os campos");
            return;

        }

        if (novaSenha !== confirmaNovaSenha) {

            Alert.alert("Erro", "As senhas não coincidem");
            return;

        }

        const usuario = esqueciSenha(
            login,
            respostaSeguranca,
            novaSenha
        );

        if (usuario) {

            Alert.alert(
                "Sucesso",
                "Senha alterada com sucesso"
            );

            router.push("/login");

        } else {

            Alert.alert(
                "Erro",
                "Login ou resposta de segurança incorretos"
            );

        }

    }

    return (

        <View style={styles.container}>

            <Topo />

            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    width: "100%",
                    alignItems: "center"
                }}
            >

                <ColocaTexto
                    textoDentro="Login"
                    tipo="default"
                    value={login}
                    onChangeText={setLogin}
                />

                <ColocaTexto
                    textoDentro="Resposta de segurança"
                    tipo="default"
                    value={respostaSeguranca}
                    onChangeText={setRespostaSeguranca}
                />

                <ColocaTexto
                    textoDentro="Nova senha"
                    tipo="default"
                    senha={true}
                    value={novaSenha}
                    onChangeText={setNovaSenha}
                />

                <ColocaTexto
                    textoDentro="Confirmar nova senha"
                    tipo="default"
                    senha={true}
                    value={confirmaNovaSenha}
                    onChangeText={setConfirmaNovaSenha}
                />

                <TouchableOpacity
                    style={styles.estiloBotao}
                    onPress={handleTrocaSenha}
                >

                    <Text
                        style={[
                            styles.fonteDefault,
                            styles.corFonteBranca,
                            { textAlign: "center" }
                        ]}
                    >
                        Alterar Senha
                    </Text>

                </TouchableOpacity>

            </View>

        </View>

    );

}

export default TrocaSenha;