import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

// Componente Button com as propriedades 'title' e 'icon'
interface ButtonProps {
  title?: string;
  icon?: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
}

const Button: React.FC<ButtonProps> = ({ title = "Clique aqui", icon }) => { 
  const handlePress = () => {
    console.log('Botão personalizado pressionado!');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={handlePress}
      >
        {/* Se a propriedade 'icon' for passada, renderiza o ícone */}

        <MaterialCommunityIcons name={icon} size={45} color="black" style={styles.icon}  />
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
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
