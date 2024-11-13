import {Text, StyleSheet, View} from 'react-native';
import {Image} from 'expo-image';
import Detail from './Detail';

export default function dip() {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.imgProfile} 
                source={{ uri: "http://www.publicdomainpictures.net/pictures/30000/velka/fast-flowing-river.jpg" }}
            />
            <View>
                <View style={styles.information}>
                    <Text style={{fontFamily: 'Montserrat_400Bold', fontSize: 20}}>VISÃO GERAL</Text>
                    <Text style={{fontFamily: 'Montserrat_400Bold', fontSize: 16, color: "#6D6D6D"}}>Detalhes</Text>
                </View>
                <View style={styles.detailContainer}>
                    <Detail title='Público' icon='account-lock-open'></Detail>
                    <Detail title='30 °C' icon='cloud'></Detail>
                    <Detail title='4.5' icon='star'></Detail>
                </View>
                
                <Text>O povoado Riacho Grande, em Icatu, Maranhão, é um refúgio natural com belas paisagens e 
                    águas tranquilas. O riacho oferece áreas de banho públicas e pedras ideais para fotos. No verão, 
                    as águas são cristalinas, e no inverno ficam um pouco mais escuras, mas o charme do local permanece.
                    Regras locais: é proibido levar bebidas ao rio, mas há bares próximos. Não há estacionamento no local,
                     por isso os visitantes precisam deixar seus veículos no acostamento. O rio é tam...</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
        width: 370,
        padding: 10,
    },
    information: {
        flexDirection: 'row',
        marginRight: 40,
        width: 370,
        padding: 10,
    },
});