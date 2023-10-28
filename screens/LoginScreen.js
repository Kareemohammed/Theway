import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Login Error', 'Please enter both email and password.');
      return;
    }

    try {
      const user = {
        email: email,
        password: password,
      };

      const response = await axios.post('http://192.168.29.10:9000/login', user);

      if (response.data.token) {
        AsyncStorage.setItem('authToken', response.data.token);
        navigation.replace('Home');
      } else {
        Alert.alert('Login Error', 'Invalid email or password.');
      }
    } catch (error) {
      console.error('Login Error', error);
      Alert.alert('Login Error', 'An error occurred during login.');
    }
  };

  return (
    <View style={styles.container}>
      {/* <Image source={require('../assets/splash.png')} style={styles.logo} /> */}
      <KeyboardAvoidingView style={styles.formContainer}>
        <Text style={styles.signInText}>Sign In</Text>
        <Text style={styles.subText}>Sign In to Your Account</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
            placeholder="Enter Your Email"
            placeholderTextColor="gray"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="gray"
          />
        </View>
        <Pressable style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('Register')}
          style={styles.signUpButton}>
          <Text style={styles.signUpText}>Don't have an account? Sign Up</Text>
        </Pressable>
        <Pressable style={styles.skipButton} onPress={() => navigation.replace('Home')}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A55A2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // logo: {
  //   width: 150,
  //   height: 150,
  //   marginBottom: 30,
  // },
  formContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
  },
  signInText: {
    color: '#4A55A2',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subText: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
  },
  input: {
    fontSize: 18,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    padding: 10,
  },
  loginButton: {
    backgroundColor: '#4A55A2',
    width: '70%',
    padding: 15,
    borderRadius: 6,
    marginTop: 30,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  signUpButton: {
    marginTop: 20,
  },
  signUpText: {
    color: "#4A55A2",
    fontSize: 16,
    textAlign: "center",
  },
  skipButton: {
    backgroundColor: '#4A55A2',
    width: '70%',
    padding: 15,
    borderRadius: 6,
    marginTop: 10,
  },
  skipButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LoginScreen;
