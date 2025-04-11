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

import Card from '../components/Card';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
            <Card key={fav.id} type="round" title={fav.title} image={fav.image} />
          ))}
        </View>

        {/* Destaques */}
        <Text style={styles.sectionTitle}>Destaques</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {destaques.map((item) => (
            <Card
              key={item.id}
              type="highlight"
              title={item.texto}
              image={item.imagem}
            />
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
          <Card
            key={idx}
            type="news"
            title={item.title}
            subtitle={item.time}
            image={item.image}
          />
        ))}

        {/* Categorias */}
        <Text style={styles.sectionTitle}>Categorias</Text>
        <View style={styles.grid}>
          {['Doces', 'Salgados', 'Bebidas', 'Snacks'].map((cat, idx) => (
            <Card
              key={idx}
              type="category"
              title={cat}
              image={require('../assets/image.png')}
            />
          ))}
        </View>

        {/* Arquivos Salvos */}
        <Text style={styles.sectionTitle}>Arquivos Salvos</Text>
        {[1, 2, 3].map((i) => (
          <View key={i} style={styles.downloadCard}>
            <Image source={require('../assets/image.png')} style={styles.downloadImage} />
            <Text style={styles.downloadText}>Arquivo {i}</Text>
            <TouchableOpacity style={styles.downloadButton}>
              <Text style={{ color: '#007AFF' }}>Baixar</Text>
            </TouchableOpacity>
          </View>
        ))}

        {/* Recomendações */}
        <Text style={styles.sectionTitle}>Recomendações</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card
              key={i}
              type="recommendation"
              title={`Destaque ${i}`}
              image={require('../assets/image.png')}
            />
          ))}
        </ScrollView>

        {/* Filtros */}
        <Text style={styles.sectionTitle}>Filtros</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {['Rápido', 'Vegano', 'Low Carb', 'Docinho', 'Mamão'].map((label, idx) => (
            <View key={idx} style={[styles.filterCard, { marginRight: 10 }]}>
              <Text style={styles.filterText}>{label}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Do Blog */}
        <Text style={styles.sectionTitle}>Do Blog</Text>
        {[1, 2].map((i) => (
          <View key={i} style={styles.blogCard}>
            <Image source={require('../assets/image.png')} style={styles.blogImage} />
            <Text style={styles.blogTitle}>Postagem {i}</Text>
            <Text style={styles.blogDesc}>Uma breve descrição sobre o conteúdo do post {i}.</Text>
          </View>
        ))}
        

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
  highlightCard: {
    marginRight: 12,
    width: 160,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  highlightImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  highlightText: {
    color: '#fff',
    fontWeight: 'bold',
    padding: 8,
    backgroundColor: 'rgba(0,0,0,0.4)',
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
  newsCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  newsImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 8,
  },
  newsTitle: {
    fontWeight: 'bold',
  },
  newsTime: {
    fontSize: 12,
    color: 'gray',
  },
  
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  catCard: {
    width: '47%',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
  },
  catImage: {
    width: 60,
    height: 60,
    marginBottom: 8,
  },
  catText: {
    fontWeight: 'bold',
  },
  
  downloadCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  downloadImage: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 6,
  },
  downloadText: {
    flex: 1,
    fontWeight: 'bold',
  },
  downloadButton: {
    padding: 6,
  },
  
  featuredCard: {
    width: '47%',
    backgroundColor: '#007AFF',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
  },
  featuredImage: {
    width: '100%',
    height: 100,
  },
  featuredTitle: {
    color: '#fff',
    fontWeight: 'bold',
    padding: 8,
  },
  featuredButton: {
    backgroundColor: '#005BBB',
    padding: 8,
    alignItems: 'center',
  },
  
  filterCard: {
    backgroundColor: '#ddd',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  filterText: {
    fontWeight: 'bold',
  },
  
  blogCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 16,
    padding: 12,
    elevation: 2,
  },
  blogImage: {
    width: '100%',
    height: 140,
    borderRadius: 8,
    marginBottom: 8,
  },
  blogTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  blogDesc: {
    fontSize: 13,
    color: '#666',
  },
  
});
