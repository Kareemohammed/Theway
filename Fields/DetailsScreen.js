import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { title, description, details } = route.params.field;
  
  return (
    <View style={styles.container}>
      <Text style={styles.fieldTitle}>{title}</Text>
      <Text style={styles.fieldDescription}>{description}</Text>
      {details && (
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>Details:</Text>
          <Text style={styles.detailsText}>{details}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  fieldTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    color: 'black', // Set text color to black
  },
  fieldDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
    color: 'black', // Set text color to black
  },
  detailsContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    elevation: 4,
    marginTop: 16,
  },
  detailsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black', // Set text color to black
  },
  detailsText: {
    fontSize: 16,
    color: 'black', // Set text color to black
  },
});

export default DetailsScreen;
