import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import MainScreen from './screens/MainScreen';
import ProfileSetup from './screens/ProfileSetup';
import Interest from './screens/SurveyScreen';
import SurveyScreen from './screens/SurveyScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import EngineeringScreen from './Fields/EngineeringScreen';
import MedicineScreen from './Fields/MedicineScreen';
import ArtDesignScreen from './Fields/ArtDesignScreen';
import TechnologyScreen from './Fields/TechnologyScreen';
import DetailsScreen from './Fields/DetailsScreen';


const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      {/* Wrap your stack navigator with NavigationContainer */}
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProfileSetup"
          component={ProfileSetup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Intrest"
          component={SurveyScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Medicine"
          component={MedicineScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ArtDesign"
          component={ArtDesignScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Technology"
          component={TechnologyScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Engineering"
          component={EngineeringScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />

       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
