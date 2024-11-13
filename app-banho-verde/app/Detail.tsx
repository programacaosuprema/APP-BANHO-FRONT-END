import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

interface DetailProps {
  title?: string;
  icon?: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
}

const Detail: React.FC<DetailProps> = ({ title = "Detail", icon}) => { 

  return (
    <View style={styles.container}>
        <MaterialCommunityIcons name={icon} size={15} color="black" style={styles.icon}  />
        <Text style={styles.text}>{title}</Text>
    </View>
  );
};

// Estilos do botão
const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    marginRight: 10, // Espaço entre o ícone e o texto
    textAlign: 'center',
  },
  text: {
    color: '#6D6D6D',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Montserrat_400Bold',
  },
});

export default Detail;
