import { TextInput } from "react-native";
import styles from "../style/styles";

function ColocaTexto({
  placeholder,
  textoDentro,
  tipo,
  value,
  onChangeText,
  senha,
  placeholderTextColor = "gray"
}) {

  return(

    <TextInput
      keyboardType={tipo}
      placeholder={placeholder || textoDentro}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={senha}
      placeholderTextColor={placeholderTextColor}
      style={[
        styles.colocaTexto,
        styles.fonteDefault
      ]}
    />

  );

}

export default ColocaTexto;