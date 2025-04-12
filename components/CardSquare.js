import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function CardSquare({ title, image }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '47%',
    height: 130,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    borderRadius: 8,
    padding: 10,
  },
  image: {
    width: 60,
    height: 60,
    marginBottom: 10,
    borderRadius: 8,
  },
  text: {
    fontWeight: 'bold',
  },
});
