// CardCategory.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function CardCategory({ title, image }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '47%',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
    marginBottom: 16,
  },
  image: {
    width: 60,
    height: 60,
    marginBottom: 8,
  },
  title: {
    fontWeight: 'bold',
  },
});
