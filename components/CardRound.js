import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function CardRound({ title, image }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
  },
});

