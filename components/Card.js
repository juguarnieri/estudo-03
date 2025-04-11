import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Card({ type, title, subtitle, image }) {
  switch (type) {
    case 'round':
      return (
        <View style={styles.roundContainer}>
          <Image source={image} style={styles.roundImage} />
          <Text style={styles.roundText}>{title}</Text>
        </View>
      );

    case 'imageSide':
      return (
        <View style={styles.sideCard}>
          <Image source={image} style={styles.sideImage} />
          <View style={{ flex: 1 }}>
            <Text style={styles.sideTitle}>{title}</Text>
            <Text style={styles.sideSubtitle}>{subtitle}</Text>
          </View>
        </View>
      );

    case 'square':
      return (
        <View style={styles.squareCard}>
          <Image source={image} style={styles.squareImage} />
          <Text style={styles.squareText}>{title}</Text>
        </View>
      );
      case 'highlight':
        return (
          <View style={styles.highlightCard}>
            <Image source={image} style={styles.highlightImage} />
            <Text style={styles.highlightText}>{title}</Text>
          </View>
        );

    case 'imageBottom':
      return (
        <View style={styles.imageBottomCard}>
          <Image source={image} style={styles.imageBottomImg} />
          <Text style={styles.imageBottomText}>{title}</Text>
        </View>
      );

      case 'novidade':
        return (
          <View style={styles.novidadeCard}>
            <Image source={image} style={styles.novidadeImage} />
            <Text style={styles.novidadeText}>{title}</Text>
            <TouchableOpacity style={styles.novidadeButton}>
              <Text style={styles.novidadeButtonText}>Ver</Text>
            </TouchableOpacity>
          </View>
        );
      

 case 'news':
      return (
        <View style={styles.newsCard}>
          <Image source={image} style={styles.newsImage} />
          <View style={{ flex: 1 }}>
            <Text style={styles.newsTitle}>{title}</Text>
            <Text style={styles.newsSubtitle}>{subtitle}</Text>
          </View>
        </View>
      );

    case 'category':
      return (
        <View style={styles.categoryCard}>
          <Image source={image} style={styles.categoryImage} />
          <Text style={styles.categoryText}>{title}</Text>
        </View>
      );

    case 'recommendation':
      return (
        <View style={styles.recommendCard}>
          <Image source={image} style={styles.recommendImage} />
          <Text style={styles.recommendTitle}>{title}</Text>
          <TouchableOpacity style={styles.recommendButton}>
            <Text style={{ color: '#fff' }}>Ver Mais</Text>
          </TouchableOpacity>
        </View>
      );

      case 'imageTop':
  return (
    <View style={styles.imageTopCard}>
      <Image source={image} style={styles.imageTopImage} />
      <Text style={styles.imageTopText}>{title}</Text>
    </View>
  );


    default:
      return (
        <View style={styles.defaultCard}>
          <Text>{title}</Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  roundContainer: {
    alignItems: 'center',
    marginRight: 10,
  },  
  roundImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
  },
  roundText: {
    fontSize: 12,
  },



  sideCard: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  sideImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  sideTitle: {
    fontWeight: 'bold',
  },
  sideSubtitle: {
    color: '#666',
    fontSize: 12,
  },




  
  squareCard: {
    width: '47%',
    height: 130,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    borderRadius: 8,
    padding: 10,
  },
  squareImage: {
    width: 60,
    height: 60,
    marginBottom: 10,
    borderRadius: 8,
  },
  highlightCard: {
    width: 160,
    height: 100,
    marginRight: 12,
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






  newsCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 10,
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
  newsSubtitle: {
    fontSize: 12,
    color: 'gray',
  },






  categoryCard: {
    width: '47%',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
    marginBottom: 12,
  },
  categoryImage: {
    width: 60,
    height: 60,
    marginBottom: 8,
  },
  categoryText: {
    fontWeight: 'bold',
  },





  recommendCard: {
    width: 140,
    marginRight: 10,
    backgroundColor: '#007AFF',
    borderRadius: 10,
    overflow: 'hidden',
    paddingBottom: 8,
  },
  recommendImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
  recommendTitle: {
    color: '#fff',
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingTop: 8,
  },
  recommendButton: {
    marginTop: 6,
    backgroundColor: '#005BBB',
    alignItems: 'center',
    paddingVertical: 6,
    marginHorizontal: 8,
    borderRadius: 6,
  },





  imageTopCard: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
    overflow: 'hidden',
    marginBottom: 12,
  },
  imageTopImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  imageTopText: {
    padding: 10,
    fontWeight: 'bold',
    fontSize: 14,
  },





  
  novidadeCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 16,
    marginHorizontal: 4,
    elevation: 2,
  },
  novidadeImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
  novidadeText: {
    fontWeight: 'bold',
    fontSize: 14,
    padding: 8,
  },
  novidadeButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 6,
    marginHorizontal: 8,
    marginBottom: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  novidadeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  

});
