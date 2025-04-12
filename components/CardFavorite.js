// CardFavorite.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function CardFavorite({ title, image }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    width: 100,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  title: {
    marginTop: 5,
    fontSize: 14,
  },
});
