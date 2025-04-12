import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';

import CardFavorite from "../components/CardFavorite";
import CardHighlight from "../components/CardHighlight";
import CardNews from "../components/CardNews";
import CardRecommendation from "../components/CardRecommendation";
import CardFilter from "../components/CardFilter";
import CardCategory from "../components/CardCategory";
import CardDownload from "../components/CardDownload";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ProfileScreen() {
  const favoritos = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    title: `F${i + 1}`,
    image: require('../assets/image.png'),
  }));

  const destaques = [
    { id: 1, texto: 'Texto 1', imagem: require('../assets/image.png') },
    { id: 2, texto: 'Texto 2', imagem: require('../assets/image.png') },
    { id: 3, texto: 'Texto 3', imagem: require('../assets/image.png') },
    { id: 4, texto: 'Texto 4', imagem: require('../assets/image.png') },
  ];

  const atalhos = [
    { icon: '⚡', label: 'Ação 1' },
    { icon: '📥', label: 'Ação 2' },
    { icon: '🔒', label: 'Ação 3' },
    { icon: '💬', label: 'Ação 4' },
    { icon: '🛠️', label: 'Ação 5' },
    { icon: '📊', label: 'Ação 6' },
    { icon: '🎯', label: 'Ação 7' },
    { icon: '📍', label: 'Ação 8' },
    { icon: '📝', label: 'Ação 9' },
    { icon: '📁', label: 'Ação 10' },
    { icon: '🔔', label: 'Ação 11' },
    { icon: '💡', label: 'Ação 12' },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title="Perfil" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        {/* Favoritos */}
        <Text style={styles.sectionTitle}>Favoritos</Text>
        <View style={styles.favGrid}>
          {favoritos.map((fav) => (
            <CardFavorite key={fav.id} title={fav.title} image={fav.image} />
          ))}
        </View>

        {/* Destaques */}
        <Text style={styles.sectionTitle}>Destaques</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {destaques.map((item) => (
            <CardHighlight key={item.id} title={item.texto} image={item.imagem} />
          ))}
        </ScrollView>

        {/* Atalhos */}
        <Text style={styles.sectionTitle}>Atalhos</Text>
        <View style={styles.iconBlock}>
          <View style={styles.iconBlockGrid}>
            {atalhos.map((item, idx) => (
              <View key={idx} style={styles.iconCard}>
                <Text style={styles.iconText}>{item.icon}</Text>
                <Text style={styles.iconLabel}>{item.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Notícias Recentes */}
        <Text style={styles.sectionTitle}>Notícias Recentes</Text>
        {[
          { title: 'Nova Receita Publicada', time: '2h atrás', image: require('../assets/image.png') },
          { title: 'Dicas de Culinária', time: '1 dia atrás', image: require('../assets/image.png') },
          { title: 'Atualização de App', time: '3 dias atrás', image: require('../assets/image.png') },
        ].map((item, idx) => (
          <CardNews key={idx} title={item.title} subtitle={item.time} image={item.image} />
        ))}

        {/* Categorias */}
        <Text style={styles.sectionTitle}>Categorias</Text>
        <View style={styles.grid}>
          {['Doces', 'Salgados', 'Bebidas', 'Snacks'].map((cat, idx) => (
            <CardCategory key={idx} title={cat} image={require('../assets/image.png')} />
          ))}
        </View>

        {/* Arquivos Salvos */}
        <Text style={styles.sectionTitle}>Arquivos Salvos</Text>
        {[1, 2, 3].map((i) => (
          <CardDownload key={i} />
        ))}

        {/* Recomendações */}
        <Text style={styles.sectionTitle}>Recomendações</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <CardRecommendation key={i} title={`Destaque ${i}`} image={require('../assets/image.png')} />
          ))}
        </ScrollView>

        {/* Filtros */}
        <Text style={styles.sectionTitle}>Filtros</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {['Rápido', 'Vegano', 'Low Carb', 'Docinho', 'Mamão'].map((label, idx) => (
            <CardFilter key={idx} label={label} />
          ))}
        </ScrollView>

      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 16,
    paddingBottom: 100,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10,
  },
  favGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'space-between',
  },
  iconBlock: {
    backgroundColor: '#cce4ff',
    borderRadius: 16,
    padding: 16,
    marginTop: 10,
  },
  iconBlockGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 20,
  },
  iconCard: {
    width: '22%',
    aspectRatio: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  iconText: {
    fontSize: 26,
  },
  iconLabel: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 6,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
});
