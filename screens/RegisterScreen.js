import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleRegister = () => {
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={styles.formContainer}>
        <Text style={styles.registerText}>Register</Text>
        <Text style={styles.subText}>Create a new account</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            value={name}
            onChangeText={(text) => setName(text)}
            style={styles.input}
            placeholder="Enter your name"
            placeholderTextColor="gray"
          />
        </View>
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

        <Pressable onPress={handleRegister} style={styles.registerButton}>
          <Text style={styles.registerButtonText}>Register</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Login")}
          style={styles.loginButton}
        >
        <Text style={styles.loginButtonText}>
            Already have an account? Sign in
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4A55A2",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  formContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "90%",
    height: "75%",
    alignItems: "center",
    marginTop: 100, 
  },
  registerText: {
    color: "#4A55A2",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subText: {
    fontSize: 18,
    color: "gray",
    marginBottom: 30,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4A55A2",
  },
  input: {
    fontSize: 18,
    borderBottomColor: "#4A55A2",
    borderBottomWidth: 2,
    padding: 10,
    width: "100%",
  },
  registerButton: {
    backgroundColor: "#4A55A2",
    width: "70%",
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    
  },
  registerButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  loginButton: {
    marginTop: 20,
  },
  loginButtonText: {
    color: "#4A55A2",
    fontSize: 16,
    textAlign: "center",
  },
});

export default RegisterScreen;
