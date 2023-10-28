import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const ArtDesignScreen = () => {
  const generateGANImage = () => {
    return require('../assets/bg2.jpg');
  };

  const fields = [
  
    {
      title: 'Fine Arts',
      description:
        'Fine artists produce original works of art using various mediums.',
    },
    {
      title: 'Interior Design',
      description:
        'Interior designers plan and create functional and aesthetic spaces.',
    },
    {
      title: 'Fine Arts',
      description:
        'Fine artists produce original works of art using various mediums.',
    },
    {
      title: 'Interior Design',
      description:
        'Interior designers plan and create functional and aesthetic spaces.',
    },
    {
      title: 'Fine Arts',
      description:
        'Fine artists produce original works of art using various mediums.',
    },
    {
      title: 'Interior Design',
      description:
        'Interior designers plan and create functional and aesthetic spaces.',
    },
    {
      title: 'Fine Arts',
      description:
        'Fine artists produce original works of art using various mediums.',
    },
    {
      title: 'Interior Design',
      description:
        'Interior designers plan and create functional and aesthetic spaces.',
    },
    // Add more fields as needed
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={generateGANImage()} style={styles.headerImage} />
        <View style={styles.overlay} />
        <Text style={styles.title}>
          Art and Design involve creativity and visual communication.
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
    left: 3,
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

export default ArtDesignScreen;
