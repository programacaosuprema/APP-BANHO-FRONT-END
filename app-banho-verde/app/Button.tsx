// Button.tsx
import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from '../types'; // Ajuste o caminho conforme necessário

// Interface para as propriedades do botão
interface ButtonProps {
  title?: string;
  route?: keyof RootStackParamList; // Nome da rota de navegação
  icon?: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  styleButton?: ViewStyle;
  textStyle?: TextStyle;
  onPress?: () => void; // Função para ser chamada ao pressionar
}

const Button: React.FC<ButtonProps> = ({
  title = "Clique aqui",
  icon,
  route,
  textStyle,
  styleButton,
  onPress,
}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // Função de clique
  const handlePress = () => {
    if (onPress) {
      onPress(); // Chama a função passada, se houver
    } else if (route) {
      navigation.navigate(route as never); // Navega para a rota especificada
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styleButton, styles.button]}
    >
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={45}
          color="black"
          style={styles.icon}
        />
      )}
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

// Estilos do botão
const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    flexDirection: "column", // Ícone e texto na vertical
    alignItems: "center",
  },
  icon: {
    marginBottom: 5, // Espaço entre o ícone e o texto
    textAlign: "center",
  },
  text: {
    color: "#000",
    fontSize: 16,
    textAlign: "center",
  },
});  

export default Button;
