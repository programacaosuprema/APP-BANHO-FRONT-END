import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { Image } from 'expo-image';

const { width } = Dimensions.get("window");

interface Data {
    name: string;
    src: string;
    filetype: string;
}

const ImageCarousel = ({ data }: { data: Data[] }) => {
 
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Carousel
        loop
        width={width - 100}
        height={200}
        autoPlay
        data={data}
        scrollAnimationDuration={2000}
        renderItem={({ item }) => (
          <Image 
            style={styles.imgProfile} 
            source={{ uri: item.src.concat(item.name).concat('.').concat(item.filetype)}}
            />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    imgProfile: {
        width: "100%",
        height: 294,
        borderRadius: 30,
        marginTop: 1,
    },
});

export default ImageCarousel;
