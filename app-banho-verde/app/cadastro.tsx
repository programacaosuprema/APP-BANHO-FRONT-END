import { useState } from "react";
import { TextInput, StyleSheet, View, Text, TouchableOpacity, Button, Image} from "react-native";
import { Link } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import * as ImagePicker from 'expo-image-picker';

export default function Cadastro() {
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
        // Solicitar permissões
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permissionResult.granted) {
            alert('É necessário permitir o acesso à galeria para selecionar imagens.');
            return;
        }

        // Selecionar imagem
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
        }
    };  

    return (
        <View style={styles.container}>

            <Link href={"./"} style={styles.backIcon}>
                <Ionicons name="chevron-back" size={40} color="#40E0D0" />
            </Link>

            <Text style={styles.appName}>LAZZ</Text>

            <Text style={styles.welcomeText}>Faça parte da comunidade do LAZZ!</Text>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="Selecionar Imagem" onPress={pickImage} />
                {selectedImage && (
                    <Image
                        source={{ uri: selectedImage }}
                        style={{ width: 200, height: 200, marginTop: 20 }}
                    />
                )}
            </View>

            {/* Campos de texto */}
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
                keyboardType="default"
                value={phone_number}
                onChangeText={setPhoneNumber}
            />

            {/* Campo de senha com ícone de olho */}
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

            {/* Campo de repetir senha com ícone de olho */}
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 36,
        paddingTop: 60, // Espaço para acomodar o ícone de voltar
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
        marginTop: 20, // Espaçamento extra abaixo do ícone
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
    inputWithIcon: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingVertical: 12,
        paddingRight: 40, // Espaço para o ícone
        paddingLeft: 12,
        fontSize: 16,
    },
    inputContainer: {
        position: 'relative',
        marginBottom: 20,
    },
    iconContainer: {
        position: 'absolute',
        right: 10,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
