
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function CardRecommendation({ title, image }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ver Mais</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 140,
    marginRight: 10,
    backgroundColor: '#007AFF',
    borderRadius: 10,
    overflow: 'hidden',
    paddingBottom: 8,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingTop: 8,
  },
  button: {
    marginTop: 6,
    backgroundColor: '#005BBB',
    alignItems: 'center',
    paddingVertical: 6,
    marginHorizontal: 8,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
  },
});
