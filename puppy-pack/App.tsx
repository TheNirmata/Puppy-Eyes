//@ts-nocheck
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AccountScreen from './app/account/[username]';
import LoginScreen from './app/(login)/index';
import SignupScreen from './app/signup/index';
import Layout from './_layout';
import * as Font from 'expo-font'
import { UserContextProvider } from '../puppy-pack/context/userContext';

const Stack = createStackNavigator();
const PixelCode = require('./assets/fonts/PixelCode.ttf');


const token = () => {
  return(
    <View>
      <Text> Getting token...</Text>
      <ActivityIndicator size='large' />
    </View>
  )
};



export default function App() {
  const [fontsLoaded] = Font.useFonts({
    PixelCode: PixelCode
  });
  const [shouldRenderLoginScreen, setShouldRenderLoginScreen] = useState(false);


  useEffect(() => {
    if (fontsLoaded) {
      setShouldRenderLoginScreen(true);
    }
  }, [fontsLoaded]);

  if (!shouldRenderLoginScreen) {
    return null;
  }

  return (  
    // <Layout>
    <NavigationContainer>
      <UserContextProvider>
        <Stack.Navigator>
            <Stack.Screen 
              name="Login" 
              component={LoginScreen} 
              options={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
              }}
              />
            <Stack.Screen 
              name="Account" 
              component={AccountScreen} 
              options={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
              }}
              />
            <Stack.Screen 
              name="GetADogTag" 
              component={SignupScreen} 
              options={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
              }}
              />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </UserContextProvider>
    </NavigationContainer>
  // </Layout>
  );
};
