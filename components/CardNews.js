// CardNews.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function CardNews({ title, subtitle, image }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.textBlock}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 8,
  },
  textBlock: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 12,
    color: 'gray',
  },
});
