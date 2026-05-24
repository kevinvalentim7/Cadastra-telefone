import { View, Text, TouchableOpacity } from "react-native";
import styles from "../style/styles";
import ColocaTexto from "../components/colocaTexto";
import { useState } from "react";

function ContainerTelefone({nome}){
    return(
        <View style={styles.containerTelefone}>
            <Text>Nome: {nome}</Text>
            <Text><Telefone>: {telefone}</Telefone></Text>    
        </View>
    )
}

export default ContainerTelefone;