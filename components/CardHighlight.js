import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function CardHighlight({ title, image }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 160,
    height: 100,
    marginRight: 12,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    padding: 8,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
});
