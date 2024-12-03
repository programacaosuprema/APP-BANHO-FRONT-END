import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Button from './Button';
import { FontAwesome } from '@expo/vector-icons';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation(); // Hook para usar a navegação

  const handleLogin = () => {
    if (!email || !password) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    if (email !== 'dannielaraujooficial@gmail.com' || password !== '1234') {
      alert('Email ou senha incorretos!');
    } else {
      navigation.navigate('Navigation' as never); // Redireciona para a rota "Navigation"
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
        <Ionicons name="chevron-back" size={24} color="#40E0D0" style={{ fontSize: 40 }} />
      </TouchableOpacity>

      <Text style={styles.appName}>LAZZ</Text>

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

      <TouchableOpacity onPress={() => navigation.navigate('Esqueceu' as never)} style={styles.link}>
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
        <TouchableOpacity onPress={() => navigation.navigate('Facebook' as never)}>
          <FontAwesome name="facebook" size={32} color="#4267B2" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Google' as never)}>
          <FontAwesome name="google" size={32} color="#DB4437" />
        </TouchableOpacity>
      </View>

      <Text style={styles.registerLink}>
        Não tem uma conta?{' '}
        <Text
          onPress={() => navigation.navigate('Cadastro' as never)}
          style={{ color: '#40E0D0' }}
        >
          Cadastre-se
        </Text>
      </Text>
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
    color: '#000',
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
});
