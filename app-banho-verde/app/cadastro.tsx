import { useState } from "react";
import { TextInput, StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from "@react-navigation/native";
import Button from "./Button";
import Toast from 'react-native-toast-message';

export default function Cadastro() {
    const navigation = useNavigation(); // Hook para usar a navegação
    const [name, setName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [repeatPassword, setRepeatPassword] = useState('');
    const [showRepeatPassword, setRepeatShowPassword] = useState(false);

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const pickImage = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!permissionResult.granted) {
            alert('É necessário permitir o acesso à galeria para selecionar imagens.');
            return;
        };
        
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
        }
    };

    const removeImage = () => {
        setSelectedImage(null);
    };

    const feedback = (type: string, text1: string, text2: string) => {
        Toast.show({
            type: type,
            text1: text1,
            text2: text2,
        })
    };

    const formatPhoneNumber = (value: string) => {
        const onlyNumbers = value.replace(/\D/g, '');
        if (onlyNumbers.length <= 10) {
          return onlyNumbers.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
        }
        return onlyNumbers.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
    };
    
    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    
    const isValidPhoneNumber = (phone: string) => {
        const onlyNumbers = phone.replace(/\D/g, '');
        return onlyNumbers.length === 11 || onlyNumbers.length === 10; // Aceita 10 ou 11 dígitos
    };
    
    const passwordCriteria = {
        length: (password: string) => password.length >= 8 && password.length <= 13,
        uppercase: (password: string) => /[A-Z]/.test(password),
        number: (password: string) => /[0-9]/.test(password),
        symbol: (password: string) => /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };
    
    const handleLogin = () => {
        if (
            name === '' ||
            last_name === '' ||
            email === '' ||
            phone_number === '' ||
            password === '' ||
            repeatPassword === ''
        ) {
            feedback('error', 'Erro', 'Por favor, preencha todos os campos!');
            return;
        }
        
        if (!isValidEmail(email)) {
            feedback('error', 'Erro no e-mail', 'Por favor, insira um e-mail válido!');
            return;
        }
        
        if (!isValidPhoneNumber(phone_number)) {
            feedback('error', 'Erro no telefone', 'Por favor, insira um telefone válido!');
            return;
        }
        
        if (
            !passwordCriteria.length(password) ||
            !passwordCriteria.uppercase(password) ||
            !passwordCriteria.number(password) ||
            !passwordCriteria.symbol(password)
        ) {
            feedback('error', 'Erro na senha', 'A senha não atende aos critérios de segurança!');
            return;
        }
        
        if (password !== repeatPassword) {
            feedback('error', 'Erro na senha', 'As senhas não coincidem!');
            return;
        }
        
        // Sucesso
        feedback('success', 'Sucesso', 'Cadastro realizado com sucesso!');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
                <Ionicons name="chevron-back" size={24} color="#40E0D0" style={{ fontSize: 40 }} />
            </TouchableOpacity>

            <Text style={styles.appName}>LAZZ</Text>
            <Text style={styles.welcomeText}>Faça parte da comunidade do LAZZ!</Text>

            <View style={styles.photoWrapper}>
                <TouchableOpacity style={styles.photoContainer} onPress={pickImage}>
                    {selectedImage ? (
                        <Image source={{ uri: selectedImage }} style={styles.profileImage} />
                    ) : (
                        <Ionicons name="camera" size={40} color="#aaa" />
                    )}
                </TouchableOpacity>
                {selectedImage && (
                    <TouchableOpacity style={styles.removeButton} onPress={removeImage}>
                        <Ionicons name="close-circle" size={30} color="red" />
                    </TouchableOpacity>
                )}
            </View>

            <TextInput
                style={styles.input}
                placeholder="Nome"
                keyboardType="default"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Sobrenome"
                keyboardType="default"
                value={last_name}
                onChangeText={setLastName}
            />
            <TextInput
                style={styles.input}
                placeholder="Digite seu email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Telefone"
                keyboardType="phone-pad"
                value={phone_number}
                onChangeText={(text) => setPhoneNumber(formatPhoneNumber(text))}
                maxLength={15}
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
                    <FontAwesome name={showPassword ? 'eye-slash' : 'eye'} size={20} color="gray" />
                </TouchableOpacity>
            </View>

            <View style={styles.passwordCriteria}>
                <Text style={{ color: passwordCriteria.length(password) ? 'green' : 'red' }}>
                    - Entre 8 e 13 caracteres
                </Text>
                <Text style={{ color: passwordCriteria.uppercase(password) ? 'green' : 'red' }}>
                    - Pelo menos uma letra maiúscula
                </Text>
                <Text style={{ color: passwordCriteria.number(password) ? 'green' : 'red' }}>
                    - Pelo menos um número
                </Text>
                <Text style={{ color: passwordCriteria.symbol(password) ? 'green' : 'red' }}>
                    - Pelo menos um símbolo (!, @, #, etc.)
                </Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputWithIcon}
                    placeholder="Repetir Senha"
                    secureTextEntry={!showRepeatPassword}
                    value={repeatPassword}
                    onChangeText={setRepeatPassword}
                />
                <TouchableOpacity
                    style={styles.iconContainer}
                    onPress={() => setRepeatShowPassword(!showRepeatPassword)}
                >
                    <FontAwesome name={showRepeatPassword ? 'eye-slash' : 'eye'} size={20} color="gray" />
                </TouchableOpacity>
            </View>

            <Button
                title="CADASTRAR"
                onPress={handleLogin}
                styleButton={{
                backgroundColor: '#40E0D0',
                width: '100%',
                height: 57,
                borderRadius: 15,
                }}
                textStyle={{ color: '#fff' }}
            />
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
                )
            }}
      />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 36,
        paddingTop: 60,
    },
    backIcon: {
        position: 'absolute',
        top: 20,
        left: 20,
    },
    appName: {
        fontSize: 48,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 10,
        color: '#40E0D0',
        marginTop: 20,
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
    photoWrapper: {
        alignSelf: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    photoContainer: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    profileImage: {
        width: '100%',
        height: '100%',
        borderRadius: 60,
    },
    removeButton: {
        marginTop: 10,
    },
    inputContainer: {
        position: 'relative',
        marginBottom: 20,
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
    passwordCriteria: {
        marginTop: 10,
        marginBottom: 20,
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
