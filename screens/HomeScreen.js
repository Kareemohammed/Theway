import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleNavigateToProfileSetup = () => {
    navigation.navigate('ProfileSetup');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/Bg.jpeg')} style={styles.backgroundImage} />
      <View style={styles.overlay}>
        <View style={styles.contentContainer}>
          <Text style={styles.headerText}>Explore Career Opportunities</Text>
          <Text style={styles.descriptionText}>
            Discover a wide range of career options and find the perfect fit for
            your skills and interests.
          </Text>
          <TouchableOpacity onPress={handleNavigateToProfileSetup} style={styles.exploreButton}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  descriptionText: {
    fontSize: 18,
    color: 'white',
    marginBottom: 30,
    textAlign: 'center',
  },
  exploreButton: {
    backgroundColor: '#4A55A2',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
