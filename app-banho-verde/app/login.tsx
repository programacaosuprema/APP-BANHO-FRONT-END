// LoginScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Button from './Button';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootStackParamList } from '../types';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Loading from "../app/utils/loader";
import AlertModal from '@/components/AlertModal';
import { APP_NAME } from "./config/config";

const API_URL = 'http://localhost:8080/auth/login';

export default function LoginScreen() {

  const nav = useNavigation<NavigationProp<RootStackParamList>>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); 


  const handleLogin = async () => {
    if (!email || !password) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    const payload = {
      login: email,
      password: password,
    };
    try {
      setLoading(true); // Ativa o loading antes da requisição
      const response = await axios.post(API_URL, payload);
      if (response.status >= 200 && response.status < 300) {
        await AsyncStorage.setItem('token', response.data.token); //salvando token no AsyncStorage
        
        <AlertModal title="Login" message="Login realizado com sucesso!" type="success"></AlertModal>
        nav.navigate('Navigation' as never); // Navega para a tela Home
      } else {

        const msg = `Falha no Login: ${response.status} - ${response.data?.message || 'Erro desconhecido'}`;
 
        <AlertModal title="Erro" message={msg} type="error"></AlertModal>
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const msg = `Ocorreu um erro ao realizar o login: ${error.response.status} - ${error.response.data?.message || 'Erro desconhecido'}`;
        <AlertModal title="Erro" message={msg} type="error"></AlertModal>

      } else {
        <AlertModal title="Erro" message="Não foi possível conectar no servidor" type="error"></AlertModal>
      }
    }finally{
      setLoading(false); // Desativa o loading após a requisição
    }    
  };

  return (
    <View style={styles.container}>
      <Loading visible={loading} /> {/* Componente de loading */}
      <TouchableOpacity onPress={() => nav.goBack()} style={styles.backIcon}>
        <Ionicons name="chevron-back" size={24} color="#40E0D0" style={{ fontSize: 40 }} />
      </TouchableOpacity>

      <Text style={styles.appName}>{APP_NAME}</Text>

      <Text style={styles.welcomeText}>Boas vindas!</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputWithIcon}
          placeholder="Senha"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => setShowPassword(!showPassword)}
        >
          <FontAwesome
            name={showPassword ? 'eye-slash' : 'eye'}
            size={20}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => nav.navigate('Esqueceu' as never)} style={styles.link}>
        <Text>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <Button
        title="LOGIN"
        onPress={handleLogin}
        styleButton={{
          backgroundColor: '#40E0D0',
          width: '100%',
          height: 57,
          borderRadius: 15,
        }}
        textStyle={{ color: '#fff' }}
      />

      <Text style={styles.orText}>ou continue com</Text>

      <View style={styles.socialIcons}>
        <TouchableOpacity onPress={() => nav.navigate('Facebook' as never)}>
          <FontAwesome name="facebook" size={32} color="#4267B2" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => nav.navigate('Google' as never)}>
          <FontAwesome name="google" size={32} color="#DB4437" />
        </TouchableOpacity>
      </View>

      <Text style={styles.registerLink}>
        Não tem uma conta?{' '}
        <Button 
          title="Cadastre-se" 
          route="Cadastro"  // Passa a rota como parâmetro
          styleButton={{ backgroundColor: '#fff' }}
          textStyle={{ color: '#40E0D0' }}
        />
      </Text>
      <Toast
        config={{
          success: (props) => (
            <View style={styles.toastContainer}>
              <Text style={[props.text1Style, styles.text1]}>{props.text1}</Text>
              <Text style={[props.text2Style, {color: '#40E0D0', fontSize: 16}]}>{props.text2}</Text>
            </View>
          ),
          error: (props) => (
            <View style={styles.toastContainer}>
              <Text style={[props.text1Style, styles.text1]}>{props.text1}</Text>
              <Text style={[props.text2Style, {color: 'red', fontSize: 16}]}>{props.text2}</Text>
            </View>
          ),
          info: (props) => (
            <View style={styles.toastContainer}>
              <Text style={[props.text1Style, styles.text1]}>{props.text1}</Text>
              <Text style={[props.text2Style, {color: 'black', fontSize: 16}]}>{props.text2}</Text>
            </View>
          ),
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  backIcon: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  appName: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10,
    color: '#40E0D0',
  },
  welcomeText: {
    fontSize: 20,
    textAlign: 'left',
    marginBottom: 20,
    color: '#40E0D0',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
  },
  link: {
    marginTop: 15,
    color: '#40E0D0',
    textAlign: 'right',
    marginBottom: 15,
  },
  orText: {
    textAlign: 'center',
    marginBottom: 10,
    color: '#40E0D0',
    padding: 20,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  registerLink: {
    textAlign: 'center',
    color: '#000',
  },
  inputContainer: {
    position: 'relative',
  },
  inputWithIcon: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 12,
    paddingRight: 40,
    paddingLeft: 12,
    fontSize: 16,
  },
  iconContainer: {
    position: 'absolute',
    right: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  toastContainer: {
    padding: 16,
    backgroundColor: '#fff', 
    borderRadius: 8,
    borderColor: "#000",
    borderWidth: 1,
  },
  text1: {
    fontSize: 25, // Tamanho da fonte do texto principal
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  }
});
