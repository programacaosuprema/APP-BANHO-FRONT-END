import React from 'react';
import { Text, View, StyleSheet } from "react-native";
import Button from "./Button";  // Seu componente Button
import { useNavigation } from '@react-navigation/native'; 
import { Image } from 'expo-image';
import Entypo from '@expo/vector-icons/Entypo';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function Home() {
  const navigation = useNavigation(); 
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Entypo name="menu" size={40} color="#40E0D0" style={styles.entypo } onPress={() => navigation.openDrawer()} />
      </View>
      <View style={styles.profile}>
        <Image 
          style={styles.imgProfile} 
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png" }}
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        />
        <Text style={{ fontSize: 20, borderBottomColor: "#D3D3D3", borderBottomWidth: 1 }}>Olá, Amanda</Text>
      </View>
      <View style={styles.options}>
        <Text style={[{ fontSize: 16 }, { pointerEvents: 'none' }]}>PARA VOCÊ</Text>
        

        <View style={styles.buttonContainer}>
          <Button title="SOBRE A CIDADE" icon="city" />
          <Button title="RESTAURANTE" icon="food-fork-drink" />
        </View>
        
        <View style={styles.buttonContainer}>
          <Button title="RIOS E BANHOS" icon="waterfall" />
          <Button title="HOSPEDAGEM" icon="sleep" />
        </View>
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    backgroundColor: "#fff",
    borderRadius: 5,
    width: "100%",
  },
  entypo: {
    padding: 10,
    marginLeft: 10,
  },
  profile: {
    width: "100%",
    height: 135,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
    pointerEvents: 'none',  // Definido aqui
  },
  imgProfile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 10,
    borderColor: "#40E0D0",
    borderBottomWidth: 4,
  },
  options: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F0F0F0",
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: 'row',  
    justifyContent: 'space-between',  
    width: '100%',  
    marginBottom: 10,  
  }
});