import {Text, View , StyleSheet} from 'react-native';
import { Image } from 'expo-image';
import Button from './Button';

export default function Index() {
  return (
    <View style={styles.container}>
      <Image 
          style={styles.imgProfile} 
          source={{ uri: "https://madeinweb.com.br/wp-content/uploads/2019/01/importancia-da-identidade-visual-de-um-aplicativo-2.png" }}
      />
      <Text style= {{fontSize: 60, alignContent: "center", color: "#40E0D0"}}>LAZZ</Text>
      <Text style={{color: "#40E0D0"}}>Encontre os lugares mais espetaculares</Text>
          <Button title="LOGIN" href={"./login"} styleButton={{backgroundColor: "#40E0D0", width: 450, height: 57, borderRadius: 15}} textStyle={{color: "#fff"}}/>
          <Button title="CADASTRO" href={"./cadastro"} styleButton={{backgroundColor: "#fff", width: 450, height: 57, borderRadius: 15, borderColor: "#40E0D0", borderWidth: 2}} textStyle={{color: "#000"}}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
      imgProfile: {
          width: "100%",
          height: 294,
          borderRadius: 30,
          alignItems: "center",
      },
});