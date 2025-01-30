import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import Detail from './Detail';
import Button from "./Button";  // Seu componente Button
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import React from 'react';

const API_URL = 'http://localhost:8080/dips/search';

//.jpg

export default function DipScreen() {
    const navigation = useNavigation();
    const [data, setData] = useState<{
        name: string;
        description: string;
        state: string;
        city: string;
        temperature: number; // Era string, mas o dado é numérico
        access: string;
        location: string; // Era number, mas o dado é uma string
        images: {
          id: null | number;
          name: string;
          src: string;
          filetype: string;
        }[];
      }[]>([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(API_URL);
            setData(response.data); // Salva os dados recebidos na variável 'data'
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <ScrollView>
            {data.map((dip, index) => (
                <ScrollView style={styles.container} key={index}>
                
                {dip.images.map((image, index) => (
                    <Image 
                        key={index}
                        style={styles.imgProfile} 
                        source={{ uri: image.src.concat(image.name).concat('.').concat(image.filetype)}}
                    />
                ))}
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
                    <Ionicons name="chevron-back" size={24} color="#40E0D0" style={{ fontSize: 40 }} />
                </TouchableOpacity>
                <View style={styles.containerInformation}>
                    <View style={styles.information}>
                        <Text style={{ fontFamily: 'Montserrat_400Bold', fontSize: 20 }}>VISÃO GERAL</Text>
                        <Text style={{ fontFamily: 'Montserrat_400Bold', fontSize: 16, color: "#6D6D6D", marginLeft: 40 }}>Detalhes</Text>
                    </View>
                    <View style={styles.detailContainer}>
                        <Detail title= {dip.access} icon='account-lock-open'></Detail>
                        <Detail title={dip.temperature + '°'} icon='cloud'></Detail>
                        <Detail title='4.5' icon='star'></Detail>
                    </View>
                    
                    <View>
                        <Text style={{textAlign: 'justify', marginTop:10}}>{dip.description}</Text>
                    </View>
                </View>
                <Button title="QUERO CONHECER" styleButton={{backgroundColor: "#FFED8F", width: "100%", height: 50, borderRadius: 10, marginTop: 15}} />
            </ScrollView>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F0',
        padding: 36,
    },
    backIcon: {
        position: 'absolute',
        top: 40,
        left: 20,
    },
    imgProfile: {
        width: "100%",
        height: 294,
        borderRadius: 30,
        marginTop: 1,
    },
    detailContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 370
    },
    information: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 370,
    },
    containerInformation: {
        backgroundColor: "#fff", 
        marginTop: 25, 
        shadowRadius: 10, 
        shadowOpacity: 20, 
        padding: 15, 
        alignItems: 'center'
    }
});
