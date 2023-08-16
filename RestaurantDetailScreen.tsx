import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;

  const renderStars = rating => {
    const starIcons = [];
    for (let i = 0; i < 5; i++) {
      starIcons.push(
        <FontAwesome
          key={i}
          name={i < rating ? 'star' : 'star-o'}
          size={20}
          color={i < rating ? '#FFD700' : '#FFF'}
        />
      );
    }
    return starIcons;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.cardShadow}></View>
        <Image source={{ uri: restaurant.coverImageUrl }} style={styles.cardImage} resizeMode="cover" />
        <View style={styles.cardBackground}></View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>{restaurant.name}</Text>
          <View style={styles.starRatingContainer}>
            {renderStars(restaurant.rating)}
          </View>
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTitle}>Sobre o Restaurante</Text>
        <Text style={styles.cardDescription}>{restaurant.description}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2C2E',
  },
  cardContainer: {
    width: 414,
    height: 361,
    position: 'relative',
  },
  cardShadow: {
    width: 414,
    height: 361,
    position: 'absolute',
    left: 0,
    top: 0,
    borderRadius: 20,
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.16)',
  },
  cardImage: {
    width: 414,
    height: 361,
    position: 'absolute',
    left: 0,
    top: 0,
    borderRadius: 20,
  },
  cardBackground: {
    width: 414,
    height: 361,
    position: 'absolute',
    left: 0,
    top: 0,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.40)',
  },
  cardInfo: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  cardTitle: {
    color: '#FFF',
    fontFamily: 'Poppins',
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 32,
  },
  starRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  descriptionContainer: {
    padding: 20,
  },
  descriptionTitle: {
    color: '#FFF',
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  cardDescription: {
    color: '#FFF',
    fontFamily: 'Poppins',
    fontSize: 14,
  },
});

export default RestaurantDetailScreen;
