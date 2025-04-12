// CardBlog.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function CardBlog({ title, description, image }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 16,
    padding: 12,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 140,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    fontSize: 13,
    color: '#666',
  },
});
