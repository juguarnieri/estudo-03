// CardFilter.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CardFilter({ label }) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ddd',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  text: {
    fontWeight: 'bold',
  },
});
