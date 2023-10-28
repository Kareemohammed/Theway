import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ProfileSetup = () => {
  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    phoneNumber: '',
    email: '',
  });

  const handleInputChange = (field, text) => {
    setFormData({...formData, [field]: text});
  };

  const handleSubmit = () => {
    // if (!formData.firstName || !formData.lastName || !formData.age || !formData.phoneNumber || !formData.email) {
    //   alert('Please fill in all fields.');
    //   return;
    // }

    navigation.navigate('Main');
  };

  return (
    <ImageBackground
      source={require('../assets/bg2.jpg')}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.header}>Welcome</Text>
        <View style={styles.formContainer}>
          <View style={styles.nameGroup}>
            <View style={styles.nameInput}>
              <Text style={styles.label}>First Name</Text>
              <TextInput
                style={[styles.input]}
                placeholder=" Enter first name"
                placeholderTextColor="gray" 
                onChangeText={text => handleInputChange('firstName', text)}
                value={formData.firstName}
              />
            </View>
            <View style={styles.nameInput}>
              <Text style={styles.label}>Last Name</Text>
              <TextInput
                style={[styles.input, {color: 'black'}]}
                placeholder="Enter last name"
                placeholderTextColor="gray" 
                onChangeText={text => handleInputChange('lastName', text)}
                value={formData.lastName}
              />
            </View>
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Age</Text>
            <TextInput
              style={[styles.input, {color: 'black'}]}
              placeholder="Enter your age"
              placeholderTextColor="gray" 
              onChangeText={text => handleInputChange('age', text)}
              value={formData.age}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={[styles.input, {color: 'black'}]}
              placeholder="Enter your phone number"
              placeholderTextColor="gray" 
              onChangeText={text => handleInputChange('phoneNumber', text)}
              value={formData.phoneNumber}
              keyboardType="phone-pad"
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={[styles.input, {color: 'black'}]}
              placeholder="Enter your email"
              placeholderTextColor="gray" 
              onChangeText={text => handleInputChange('email', text)}
              value={formData.email}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'black',
  },
  formContainer: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    padding: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'black',
  },
  nameGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  nameInput: {
    flex: 1,
    marginRight: 10,
    color: 'black',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  },

  inputGroup: {
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#4A55A2',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfileSetup;
