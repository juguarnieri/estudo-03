import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from "react-native";
import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  const redondos = [
    { id: 1, title: "Mario", subtitle: "O herói do Reino Cogumelo", image: require("../assets/image.png") },
    { id: 2, title: "Luigi", subtitle: "O irmão mais alto", image: require("../assets/image.png") },
    { id: 3, title: "Peach", subtitle: "A princesa", image: require("../assets/image.png") },
    { id: 4, title: "Toadette", subtitle: "Companheira alegre", image: require("../assets/image.png") },
    { id: 5, title: "Birdo", subtitle: "A enigmática", image: require("../assets/image.png") },
    { id: 6, title: "Diddy Kong", subtitle: "O parceiro saltitante", image: require("../assets/image.png") },
  ];

  const imagemLado = [
    { id: 7, title: "Yoshi", subtitle: "Companheiro fiel", image: require("../assets/image.png") },
    { id: 8, title: "Toad", subtitle: "Corajoso e rápido", image: require("../assets/image.png") },
  ];

  const quadrados = [
    { id: 9, title: "Bowser", image: require("../assets/image.png") },
    { id: 10, title: "Donkey Kong", image: require("../assets/image.png") },
    { id: 11, title: "Wario", image: require("../assets/image.png") },
  ];

  const imagemCima = [
    { id: 12, title: "Daisy", image: require("../assets/image.png") },
    { id: 13, title: "Rosalina", image: require("../assets/image.png") },
  ];

  const novidades = [
    { id: 14, titulo: "Card 1", imagem: require("../assets/image.png") },
    { id: 15, titulo: "Card 2", imagem: require("../assets/image.png") },
    { id: 16, titulo: "Card 3", imagem: require("../assets/image.png") },
    { id: 17, titulo: "Card 4", imagem: require("../assets/image.png") },
  ];

  const data = [
    { id: 18, title: "Consultas", image: require("../assets/image.png") },
    { id: 19, title: "Exames", image: require("../assets/image.png") },
    { id: 20, title: "Farmácias", image: require("../assets/image.png") },
    { id: 21, title: "Atestado", image: require("../assets/image.png") },
    { id: 22, title: "Perfil Saúde", image: require("../assets/image.png") },
    { id: 23, title: "Notícias", image: require("../assets/image.png") },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <Header title="Home" />

      <View style={styles.content}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Details")}
          >
            <Text style={styles.buttonText}>Ir para Detalhes</Text>
          </TouchableOpacity>

          <Text style={styles.sectionTitle}>Redondos</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {redondos.map((item) => (
              <Card
                key={item.id}
                type="round"
                title={item.title}
                subtitle={item.subtitle}
                image={item.image}
              />
            ))}
          </ScrollView>

          <Text style={styles.sectionTitle}>Imagem ao lado</Text>
          {imagemLado.map((item) => (
            <Card
              key={item.id}
              type="imageSide"
              title={item.title}
              subtitle={item.subtitle}
              image={item.image}
            />
          ))}

          <Text style={styles.sectionTitle}>Quadrados</Text>
          <FlatList
            data={quadrados}
            renderItem={({ item }) => (
              <Card type="square" title={item.title} image={item.image} />
            )}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            contentContainerStyle={{ paddingBottom: 16 }}
          />

          <Text style={styles.sectionTitle}>Imagem em cima</Text>
          {imagemCima.map((item) => (
            <Card
              key={item.id}
              type="imageTop"
              title={item.title}
              image={item.image}
            />
          ))}

          <Text style={styles.sectionTitle}>Serviços</Text>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <Card type="square" title={item.title} image={item.image} />
            )}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            contentContainerStyle={{ padding: 16 }}
          />

          <Text style={styles.sectionTitle}>Novidades</Text>
          <FlatList
            data={novidades}
            renderItem={({ item }) => (
              <Card type="novidade" title={item.titulo} image={item.imagem} />
            )}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            contentContainerStyle={{ paddingBottom: 16 }}
          />
        </ScrollView>

        <Footer />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
  },
  scrollContainer: {
    padding: 16,
    paddingBottom: 100,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  cardGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginHorizontal: -8,
    marginBottom: 20,
  },
});
