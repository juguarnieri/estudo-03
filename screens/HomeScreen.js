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

import CardRound from "../components/CardRound";
import CardImageSide from "../components/CardImageSide";
import CardSquare from "../components/CardSquare";
import CardImageTop from "../components/CardImageTop";
import CardNovidade from "../components/CardNovidade";
import CardHighlight from "../components/CardHighlight";
import CardRecommendation from "../components/CardRecommendation";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safe}>
      <Header title="Home" />

      <View style={styles.content}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>

          {/* 🔘 Botão para navegar para a tela de detalhes */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Details")}
          >
            <Text style={styles.buttonText}>Ir para Detalhes</Text>
          </TouchableOpacity>

          {/* 🔴 Cards redondos */}
          <Text style={styles.sectionTitle}>Redondos</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <CardRound
              title="Mario"
              subtitle="O herói do Reino Cogumelo"
              image={require("../assets/image.png")}
            />
            <CardRound
              title="Luigi"
              subtitle="O irmão mais alto"
              image={require("../assets/image.png")}
            />
            <CardRound
              title="Peach"
              subtitle="A princesa"
              image={require("../assets/image.png")}
            />
            <CardRound
              title="Toadette"
              subtitle="Companheira alegre"
              image={require("../assets/image.png")}
            />
            <CardRound
              title="Birdo"
              subtitle="A enigmática"
              image={require("../assets/image.png")}
            />
            <CardRound
              title="Diddy Kong"
              subtitle="O parceiro saltitante"
              image={require("../assets/image.png")}
            />
          </ScrollView>

          {/* 🟪 Cards com imagem ao lado */}
          <Text style={styles.sectionTitle}>Imagem ao lado</Text>
          <CardImageSide
            title="Yoshi"
            subtitle="Companheiro fiel"
            image={require("../assets/image.png")}
          />
          <CardImageSide
            title="Toad"
            subtitle="Corajoso e rápido"
            image={require("../assets/image.png")}
          />

          {/* 🟩 Cards quadrados */}
          <Text style={styles.sectionTitle}>Quadrados</Text>
          <FlatList
            data={[
              { id: 9, title: "Bowser", image: require("../assets/image.png") },
              { id: 10, title: "Donkey Kong", image: require("../assets/image.png") },
              { id: 11, title: "Wario", image: require("../assets/image.png") },
            ]}
            renderItem={({ item }) => (
              <CardSquare title={item.title} image={item.image} />
            )}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            contentContainerStyle={{ paddingBottom: 16 }}
          />

          {/* 🟦 Cards com imagem acima */}
          <Text style={styles.sectionTitle}>Imagem em cima</Text>
          <CardImageTop
            title="Daisy"
            image={require("../assets/image.png")}
          />
          <CardImageTop
            title="Rosalina"
            image={require("../assets/image.png")}
          />

          {/* 🟨 Serviços */}
          <Text style={styles.sectionTitle}>Serviços</Text>
          <FlatList
            data={[
              { id: 18, title: "Consultas", image: require("../assets/image.png") },
              { id: 19, title: "Exames", image: require("../assets/image.png") },
              { id: 20, title: "Farmácias", image: require("../assets/image.png") },
              { id: 21, title: "Atestado", image: require("../assets/image.png") },
              { id: 22, title: "Perfil Saúde", image: require("../assets/image.png") },
              { id: 23, title: "Notícias", image: require("../assets/image.png") },
            ]}
            renderItem={({ item }) => (
              <CardSquare title={item.title} image={item.image} />
            )}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            contentContainerStyle={{ padding: 16 }}
          />

          {/* 📰 Novidades */}
          <Text style={styles.sectionTitle}>Novidades</Text>
          <FlatList
            data={[
              { id: 14, titulo: "Card 1", imagem: require("../assets/image.png") },
              { id: 15, titulo: "Card 2", imagem: require("../assets/image.png") },
              { id: 16, titulo: "Card 3", imagem: require("../assets/image.png") },
              { id: 17, titulo: "Card 4", imagem: require("../assets/image.png") },
            ]}
            renderItem={({ item }) => (
              <CardNovidade title={item.titulo} image={item.imagem} />
            )}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            contentContainerStyle={{ paddingBottom: 16 }}
          />

          {/* ✨ Destaques - Scroll horizontal */}
          <Text style={styles.sectionTitle}>Destaque</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <CardHighlight
              title="Grande evento ao vivo"
              image={require("../assets/image.png")}
            />
            <CardHighlight
              title="Lançamento exclusivo"
              image={require("../assets/image.png")}
            />
            <CardHighlight
              title="Promoções imperdíveis"
              image={require("../assets/image.png")}
            />
          </ScrollView>

          {/* ✨ Recomendação - Scroll horizontal */}
          <Text style={styles.sectionTitle}>Recomendação</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <CardRecommendation
              title="Você também pode gostar"
              image={require("../assets/image.png")}
            />
            <CardRecommendation
              title="Destaque do mês"
              image={require("../assets/image.png")}
            />
            <CardRecommendation
              title="Novidades para você"
              image={require("../assets/image.png")}
            />
          </ScrollView>

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
});
