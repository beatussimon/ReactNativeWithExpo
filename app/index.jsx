import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Link } from 'expo-router'

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={{uri: "https://picsum.photos/200"}} style={styles.img}/>
      </View>
      <Text style={styles.bottomtext}>Above is the beautiful image</Text>
        <Link href="/Contacts" style={styles.links}>
          <Text style={[styles.links, styles.text]}> Contact Us </Text>
        </Link>
        <Link href="/About" style={styles.links}>
          <Text style={[styles.links, styles.text]}> About page </Text>
        </Link>

    </View>
  );
}

const styles = StyleSheet.create({

  links:{
    textDecorationLine:"underline"
  },
  img:{
    width: 300, 
    height: 200
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  bottomtext:{
    backgroundColor:"#fff",
    color:"green", 
    fontSize: 48,
    textAlign: "center"
  }
});
