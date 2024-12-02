import React from 'react';
import { Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Href, Link } from 'expo-router';

// Interface para as propriedades do botão
interface ButtonProps {
  title?: string;
  href?: Href;
  icon?: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  styleButton?: ViewStyle;
  textStyle?: TextStyle;
  onPress?: () => void; // Função para ser chamada ao pressionar
}

const Button: React.FC<ButtonProps> = ({ 
  title = "Clique aqui", 
  icon, 
  href, 
  textStyle, 
  styleButton, 
  onPress 
}) => { 
  const content = (
    <TouchableOpacity
      onPress={onPress} // Chama a função se fornecida
      style={[styleButton, styles.button]}
    >
      {icon && (
        <MaterialCommunityIcons name={icon} size={45} color="black" style={styles.icon} />
      )}
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );

  // Se 'href' for passado, renderiza com Link; caso contrário, apenas o botão
  return href ? <Link href={href} style={styles.container}>{content}</Link> : content;
};

// Estilos do botão
const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    alignItems: 'center',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    flexDirection: 'column', // Ícone e texto na vertical
    alignItems: 'center',
  },
  icon: {
    marginBottom: 5, // Espaço entre o ícone e o texto
    textAlign: 'center',
  },
  text: {
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Button;
  