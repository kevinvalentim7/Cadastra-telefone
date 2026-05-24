import { View, Text, TouchableOpacity } from "react-native";
import styles from "../style/styles";

function Home(){
    return(
        <View>
            <TouchableOpacity style={styles.estiloBotao}>
                <Text>Cadastrar novo telefone +</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;