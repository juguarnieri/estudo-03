// CardDownload.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function CardDownload({ title, image }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.downloadButton}>
        <Text style={styles.downloadText}>Baixar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 6,
  },
  title: {
    flex: 1,
    fontWeight: 'bold',
  },
  downloadButton: {
    padding: 6,
  },
  downloadText: {
    color: '#007AFF',
  },
});
