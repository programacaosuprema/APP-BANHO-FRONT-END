// Index.tsx
import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { Image } from 'expo-image';
import Button from './Button' ;
import { APP_NAME } from "./config/config";


export default function Index() {

  return (
    <View style={styles.container}>
      <Image 
        style={styles.imgProfile} 
        source={{ uri: "https://madeinweb.com.br/wp-content/uploads/2019/01/importancia-da-identidade-visual-de-um-aplicativo-2.png" }}
      />
      <Text style={styles.appName}>{APP_NAME}</Text>
      <Text style={styles.tagline}>Encontre os lugares mais espetaculares</Text>
      <Button 
        title="LOGIN" 
        route='Login' 
        styleButton={styles.loginButton} 
        textStyle={styles.loginText}
      />
      <Button 
        title="CADASTRO" 
        route='Cadastro' 
        styleButton={styles.cadastroButton} 
        textStyle={styles.cadastroText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20, // Adicione padding para dispositivos menores
  },
  imgProfile: {
    width: "100%",
    height: 294,
    borderRadius: 30,
    marginBottom: 20, // Espaço abaixo da imagem
  },
  appName: {
    fontSize: 60,
    alignContent: "center",
    color: "#40E0D0",
    marginBottom: 10,
  },
  tagline: {
    color: "#40E0D0",
    fontSize: 18,
    marginBottom: 30,
  },
  loginButton: {
    backgroundColor: "#40E0D0",
    width: '100%', // Use porcentagem para responsividade
    height: 57,
    borderRadius: 15,
    marginTop: 20,
  },
  loginText: {
    color: "#fff",
  },
  cadastroButton: {
    backgroundColor: "#fff",
    width: '100%',
    height: 57,
    borderRadius: 15,
    borderColor: "#40E0D0",
    borderWidth: 2,
    marginTop: 20,
  },
  cadastroText: {
    color: "#000",
  },
});


