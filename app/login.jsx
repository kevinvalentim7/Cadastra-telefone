import { Text, TouchableOpacity, View, Alert} from "react-native";
import { useState } from "react";
import styles from "../style/styles";
import ColocaTexto from "../components/colocaTexto";
import { useRouter } from "expo-router";
import Topo from "../components/topo";
import { logarUsuario } from "../src/db/database";

function Login() {

  const router = useRouter();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const usuario = logarUsuario(login, password);

    if (usuario) {
      Alert.alert("Sucesso", "Usuário logado");
      router.push("/home");
    } else {
      Alert.alert("Erro", "Login ou senha incorretos");
    }
  }
  
  return (

    <View style={styles.container}>

      <Topo />

      <View style={{ flex: 1, justifyContent: "center", width: "100%", alignItems: "center" }}>

        <ColocaTexto
          textoDentro="Login"
          tipo="default"
          value={login}
          onChangeText={setLogin}
        />

        <ColocaTexto
          textoDentro="Senha"
          tipo="default"
          senha={true}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.estiloBotao} onPress={handleLogin}>
          <Text
            style={[
              styles.fonteDefault,
              styles.corFonteBranca,
              { textAlign: "center" }
            ]}
          >
            Logar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/trocaSenha")}>
          <Text style={[styles.fonteDefault, styles.corFonteBranca]}>
            Esqueci minha senha
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/cadastro")}
          style={[
            styles.estiloBotao,
            { backgroundColor: "white" }
          ]}
        >
          <Text
            style={[
              styles.fonteDefault,
              { color: "blue", textAlign: "center" }
            ]}
          >
            Cadastrar-se
          </Text>
        </TouchableOpacity>

        {/* Apenas para teste */}

        <Text style={{ color: "white" }}>
          {login}
        </Text>

        <Text style={{ color: "white" }}>
          {password}
        </Text>

      </View>

    </View>

  );

}

export default Login;