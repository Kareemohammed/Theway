import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  StatusBar
} from 'react-native';
import { DrawerActions } from '@react-navigation/native';

const MainScreen = ({navigation}) => {
  
  const [searchText, setSearchText] = useState('');

  const careerOptions = [
    {
      title: 'Engineering',
      image: require('../assets/engineering.jpg'),
      description: 'Design and build the future.',
    },
    {
      title: 'Medicine',
      image: require('../assets/medicine.jpg'),
      description: 'Heal and save lives.',
    },
    // {
    //   title: 'ArtDesign',
    //   image: require('../assets/art.jpg'),
    //   description: 'Express yourself through creativity.',
    // },
    
  ];

  const filteredCareers = careerOptions.filter(option =>
    option.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/bg2.jpg')}
        style={styles.backgroundImage}
      />
      
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Explore Career Opportunities</Text>
        <Text style={styles.descriptionText}>
          Discover a wide range of career options and find the perfect fit for
          your skills and interests.
        </Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for a career..."
            placeholderTextColor="black"
            value={searchText}
            onChangeText={setSearchText}
          />

          <TouchableHighlight
            style={styles.searchButton}
            underlayColor="#374777"
          >
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableHighlight>
        </View>
      </View>

      <View style={styles.careerOptionsContainer}>
        {filteredCareers.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionCard}
            onPress={() => navigation.navigate(option.title)}
          >
            <Image source={option.image} style={styles.optionImage} />
            <Text style={styles.optionTitle}>{option.title}</Text>
            <Text style={styles.optionDescription}>{option.description}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    position: 'relative',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.7,
  },
  headerContainer: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4A55A2',
    marginBottom: 20,
    textAlign: 'center',
  },
  descriptionText: {
    fontSize: 20,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  searchContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginRight: 10,
    borderWidth: 2,
    borderColor: 'black',
    color: 'black',
    fontSize: 16,
  },
  searchButton: {
    backgroundColor: '#4A55A2',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 5,
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  careerOptionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  optionCard: {
    width: 150,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    overflow: 'hidden',
    elevation: 5,
    borderWidth: 2,
    borderColor: 'black',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  optionImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    padding: 10,
    textAlign: 'center',
  },
  optionDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingBottom: 10,
  },
});

export default MainScreen;
