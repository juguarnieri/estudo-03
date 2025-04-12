import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function CardNovidade({ title, image }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{title}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ver</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 16,
    marginHorizontal: 4,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 14,
    padding: 8,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 6,
    marginHorizontal: 8,
    marginBottom: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
