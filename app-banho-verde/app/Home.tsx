import React from 'react';
import { Text, View, StyleSheet } from "react-native";
import Button from "./Button"; // Seu componente Button
import { useNavigation, DrawerActions } from '@react-navigation/native'; 
import { Image } from 'expo-image';
import Entypo from '@expo/vector-icons/Entypo';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function HomeScreen() {
  const navigation = useNavigation(); 
  return (
    <View style={styles.container}>
      {/* Menu Header */}
      <View style={styles.header}>
        <Entypo
          name="menu"
          size={40}
          color="#40E0D0"
          style={styles.entypo}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
      </View>

      {/* Profile Section */}
      <View style={styles.profile}>
        <Image 
          style={styles.imgProfile} 
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png" }}
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        />
        <Text style={styles.greetingText}>Olá, Amanda</Text>
      </View>

      {/* Options Section */}
      <View style={styles.options}>
        <Text style={styles.sectionTitle}>PARA VOCÊ</Text>

        <View style={styles.buttonContainer}>
          <Button
            title="SOBRE A CIDADE"
            icon="city"
            route='City'
            styleButton={styles.styleButton}
            textStyle={{ color: "#000" }}
          />
          <Button
            title="RESTAURANTE"
            icon="food-fork-drink"
           route='Restaurant'
            styleButton={styles.styleButton}
            textStyle={{ color: "#000" }}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="RIOS E BANHOS"
            icon="waterfall"
            route='Dip'
            styleButton={styles.styleButton}
            textStyle={{ color: "#000" }}
          />
          <Button
            title="HOSPEDAGEM"
            icon="sleep"
            route='Hotel'
            styleButton={styles.styleButton}
            textStyle={{ color: "#000" }}
          />
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
    width: "100%",
    padding: 10,
    backgroundColor: "#fff",
  },
  entypo: {
    marginLeft: 10,
  },
  profile: {
    width: "100%",
    height: 140,
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop: 10,
    padding: 10,
  },
  imgProfile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#40E0D0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    marginBottom: 10,
  },
  greetingText: {
    fontSize: 18,
    color: "#333",
    borderBottomColor: "#D3D3D3",
    borderBottomWidth: 1,
    textAlign: "center",
    width: "80%",
  },
  options: {
    flex: 1,
    width: "100%",
    backgroundColor: "#F0F0F0",
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#40E0D0",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 15,
  },
  styleButton: {
    backgroundColor: "#98FF98",
    width: 150,
    height: 120,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
});
