import { Text, StyleSheet, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import Detail from './Detail';
import Button from "./Button";  // Seu componente Button
import { Ionicons } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import React from 'react';
import {fetchDipData} from './services/apiDip'; // Função que busca os dados do cliente
import Loading from './utils/loader';
import { RootStackParamList } from '@/types';
import ImageCarousel from '@/components/ImageCarousel';
import Entypo from '@expo/vector-icons/Entypo';

const data_tipo = [
    {id: 1, title: 'Banho de Lua'},
    {id: 1, title: 'Banho de Sol'},
    {id: 1, title: 'Banho de Mar'}
];

export default function DipScreen() {
   const nav = useNavigation<NavigationProp<RootStackParamList>>();
   
    const [loading, setLoading] = useState(true); 
    const [data, setData] = useState<{
        id: number;
        name: string;
        description: string;
        state: string;
        city: string;
        temperature: number; 
        access: string;
        location: string; 
        images: {
          id: number;
          name: string;
          src: string;
          filetype: string;
        }[];
      }[]>([]);

    useEffect(() => {
        const loadDip = async () => {
              console.log("🔄 Iniciando busca dos dados do banhos...");
              const data = await fetchDipData();
              
              if (data) {
        
                setData(data);  
              } else {
                alert("❌ Nenhum dado dos banhos recebido.");
              }
              
              setLoading(false);
            };
        
        loadDip();
    }, []);

    return (
        <ScrollView style={styles.scrollContainer}>
            <Loading visible={loading} /> {/* Componente de loading */}
            <TouchableOpacity onPress={() => nav.goBack()} style={styles.backIcon}>
                    <Ionicons name="chevron-back" size={24} color="#40E0D0" style={{ fontSize: 40 }} />
            </TouchableOpacity>

            {data.map((dip, index) => (
                
                <View style={styles.container} key={index}>
                
                    <ImageCarousel data={dip.images.map(img => ({
                        name: img.name,
                        src: img.src,
                        filetype: img.filetype
                    }))} />
                    
                    <View style={styles.localization}>
                        <Text style={{fontSize: 29, fontWeight: 'bold'  }}>{dip.name}</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Entypo name="location-pin" size={24} color="black" />
                            <Text>{dip.city} - {dip.state}</Text>
                        </View>
                    </View>
                                
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
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 36,
        alignContent: 'center',
        alignItems: 'center',
    },
    scrollContainer: {
        flex: 1,
        padding: 16,
        
    },
    localization: {
        backgroundColor: "#D9FFFB",
        marginTop: -80,
        height: 70,
        width: 350,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        fontSize: 40,
    },
    slide: {
        justifyContent: 'center',
        alignItems: 'center',
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
    },
    icon: {
        marginBottom: 5, // Espaço entre o ícone e o texto
        textAlign: "center",
    },
});
