import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function DetailScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <Header title="Detalhes" backButton goHome />

      <View style={styles.container}>
        <Text style={styles.nameText}>Seu Nome Aqui</Text>
      </View>

      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});
