import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Link } from 'expo-router'

export default class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> About page</Text>        
        <Link href="/" style={styles.links}>
            <Text style={styles.text}> Go Home</Text>
        </Link>        
      </View>
    )
  }
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
    fontSize: 72,
    fontWeight: "bold",
    color: "#333",
  },
  bottomtext:{
    backgroundColor:"#fff",
    color:"green", 
    fontSize: 48,
    textAlign: "center"
  }
})
