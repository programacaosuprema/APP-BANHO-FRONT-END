import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import Detail from './Detail';
import Button from "./Button";  // Seu componente Button
import axios from 'axios';
import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:8080/dips/search';

export default function Dip() {

    const [data, setData] = useState<{ name: string; description: string; state: string; city: string; temperature: string; access: string; location: number; images: []}[]>([]);

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
        <View>
            {data.map((dip, index) => (
                <ScrollView style={styles.container} key={index}>
            
                <Image 
                    style={styles.imgProfile} 
                    source={{ uri: "http://www.publicdomainpictures.net/pictures/30000/velka/fast-flowing-river.jpg" }}
                />
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
                <Button title="QUERO CONHECER" styleButton={{backgroundColor: "#FFED8F", width: "100%", height: 50, borderRadius: 10}} />
            </ScrollView>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F0',
        padding: 36,
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
