//@ts-nocheck
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AccountScreen from './app/account/[username]';
import LoginScreen from './app/(login)/index';
import * as Font from 'expo-font'


const Stack = createStackNavigator();
const PixelCode = require('./assets/fonts/PixelCode.ttf');

// import { TamaguiProvider } from "tamagui";
// import config from "./tamagui.config";
{/* <TamaguiProvider config={config}> */}
{/* </TamaguiProvider> */}

const token = () => {
  return(
    <View>
      <Text> Getting token...</Text>
      <ActivityIndicator size='large' />
    </View>
  )
};


export default function App(): React.ReactComponentElement<any> {
  const [isSignedIn, setIsSignedIn] = useState(false);
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
    <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false }}/>
            <Stack.Screen name="Account" component={AccountScreen} options={{headerShown: false}}/>
          </Stack.Navigator>
          <StatusBar style="auto" />
    </NavigationContainer>
  );
};
