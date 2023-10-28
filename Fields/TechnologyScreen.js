import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const TechnologyScreen = () => {
  const generateGANImage = () => {
    return require('../assets/bg2.jpg');
  };

  const fields = [
    
    {
      title: 'Data Science',
      description: 'Data scientists analyze and interpret complex data sets.',
    },
    {
      title: 'Cybersecurity',
      description: 'Cybersecurity experts protect systems from threats.',
    },
    {
      title: 'Data Science',
      description: 'Data scientists analyze and interpret complex data sets.',
    },
    {
      title: 'Cybersecurity',
      description: 'Cybersecurity experts protect systems from threats.',
    },
    {
      title: 'Data Science',
      description: 'Data scientists analyze and interpret complex data sets.',
    },
    {
      title: 'Cybersecurity',
      description: 'Cybersecurity experts protect systems from threats.',
    },
    {
      title: 'Data Science',
      description: 'Data scientists analyze and interpret complex data sets.',
    },
    {
      title: 'Cybersecurity',
      description: 'Cybersecurity experts protect systems from threats.',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={generateGANImage()} style={styles.headerImage} />
        <View style={styles.overlay} />
        <Text style={styles.title}>
          Technology drives innovation and shapes our digital future.
        </Text>
      </View>

      <View style={styles.fieldsContainer}>
        {fields.map((field, index) => (
          <TouchableOpacity key={index} style={styles.field}>
            <Text style={styles.fieldTitle}>{field.title}</Text>
            <Text style={styles.fieldDescription}>{field.description}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: 200, // Adjust height as needed
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  title: {
    fontSize: 20,
    color: 'white',
    position: 'absolute',
    bottom: 16,
    left: 25,
    textAlign: 'center',
  },
  introText: {
    fontSize: 16,
    color: 'black',
    lineHeight: 24,
    margin: 16,
    textAlign: 'center',
  },
  fieldsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 16,
  },
  field: {
    width: '48%',
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 4,
    padding: 16,
    borderColor:"black",
    borderWidth:1,
  },
  fieldTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 8,
    textAlign: 'center',
  },
  fieldDescription: {
    fontSize: 14,
    color: 'black',
    lineHeight: 20,
    textAlign: 'center',
  },
});

export default TechnologyScreen;
