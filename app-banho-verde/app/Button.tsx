import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Link } from 'expo-router';

// Componente Button com as propriedades 'title' e 'icon'
interface ButtonProps {
  title?: string;
  color?: string;
  width?: number;
  height?: number;
  icon?: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
}

const Button: React.FC<ButtonProps> = ({ title = "Clique aqui", icon, color, width, height}) => { 
  const handlePress = () => {
    console.log("Botão clicado");
  };

  return (
    <Link href ={"/dip"} style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={handlePress}
      >
        <MaterialCommunityIcons name={icon} size={45} color="black" style={styles.icon}  />
        <Text style={styles.text}>{title}</Text>
        
      </TouchableOpacity>
    </Link>
  );
};

// Estilos do botão
const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#98FF98',
    paddingVertical: 12,
    paddingHorizontal: 12,
    height: 100,
    width: 170,
    borderRadius: 5,
    flexDirection: 'column', // Organiza o ícone e o texto na horizontal
  },
  icon: {
    marginRight: 10, // Espaço entre o ícone e o texto
    textAlign: 'center',
  },
  text: {
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Button;
