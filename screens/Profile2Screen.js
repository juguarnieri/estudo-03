import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
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
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title="Perfil" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        {/* Favoritos */}
        <Text style={styles.sectionTitle}>Favoritos</Text>
        <View style={styles.favGrid}>
          <CardFavorite title="F1" image={require('../assets/image.png')} />
          <CardFavorite title="F2" image={require('../assets/image.png')} />
          <CardFavorite title="F3" image={require('../assets/image.png')} />
          <CardFavorite title="F4" image={require('../assets/image.png')} />
          <CardFavorite title="F5" image={require('../assets/image.png')} />
          <CardFavorite title="F6" image={require('../assets/image.png')} />
        </View>

        {/* Destaques */}
        <Text style={styles.sectionTitle}>Destaques</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <CardHighlight title="Texto 1" image={require('../assets/image.png')} />
          <CardHighlight title="Texto 2" image={require('../assets/image.png')} />
          <CardHighlight title="Texto 3" image={require('../assets/image.png')} />
          <CardHighlight title="Texto 4" image={require('../assets/image.png')} />
        </ScrollView>

        {/* Atalhos */}
        <Text style={styles.sectionTitle}>Atalhos</Text>
        <View style={styles.iconBlock}>
          <View style={styles.iconBlockGrid}>
            <View style={styles.iconCard}>
              <Text style={styles.iconText}>⚡</Text>
              <Text style={styles.iconLabel}>Ação 1</Text>
            </View>
            <View style={styles.iconCard}>
              <Text style={styles.iconText}>📥</Text>
              <Text style={styles.iconLabel}>Ação 2</Text>
            </View>
            <View style={styles.iconCard}>
              <Text style={styles.iconText}>🔒</Text>
              <Text style={styles.iconLabel}>Ação 3</Text>
            </View>
            <View style={styles.iconCard}>
              <Text style={styles.iconText}>💬</Text>
              <Text style={styles.iconLabel}>Ação 4</Text>
            </View>
          </View>
        </View>

        {/* Notícias Recentes */}
        <Text style={styles.sectionTitle}>Notícias Recentes</Text>
        <CardNews title="Nova Receita Publicada" subtitle="2h atrás" image={require('../assets/image.png')} />
        <CardNews title="Dicas de Culinária" subtitle="1 dia atrás" image={require('../assets/image.png')} />
        <CardNews title="Atualização de App" subtitle="3 dias atrás" image={require('../assets/image.png')} />

        {/* Categorias */}
        <Text style={styles.sectionTitle}>Categorias</Text>
        <View style={styles.grid}>
          <CardCategory title="Doces" image={require('../assets/image.png')} />
          <CardCategory title="Salgados" image={require('../assets/image.png')} />
          <CardCategory title="Bebidas" image={require('../assets/image.png')} />
          <CardCategory title="Snacks" image={require('../assets/image.png')} />
        </View>

        {/* Arquivos Salvos */}
        <Text style={styles.sectionTitle}>Arquivos Salvos</Text>
        <CardDownload />
        <CardDownload />
        <CardDownload />

        {/* Recomendações */}
        <Text style={styles.sectionTitle}>Recomendações</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <CardRecommendation title="Destaque 1" image={require('../assets/image.png')} />
          <CardRecommendation title="Destaque 2" image={require('../assets/image.png')} />
          <CardRecommendation title="Destaque 3" image={require('../assets/image.png')} />
        </ScrollView>

        {/* Filtros */}
        <Text style={styles.sectionTitle}>Filtros</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <CardFilter label="Rápido" />
          <CardFilter label="Vegano" />
          <CardFilter label="Low Carb" />
          <CardFilter label="Docinho" />
          <CardFilter label="Mamão" />
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
    width: '23%',
    marginBottom: 16,
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
