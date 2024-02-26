//@ts-nocheck
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { TamaguiProvider } from "tamagui";
import AppConfig from "./tamagui.config";
import LandingScreen from './app';
import AccountScreen from './app/AccountScreen';
import SignupScreen from './app/SignupScreen';
const Stack = createStackNavigator();

const theme = {
  colors: {
    primary: '#007BFF',
    secondary: '#6C757D',
    // Add more colors here
  },
  typography: {
    body: {
      fontSize: 16,
      lineHeight: 24,
      // Add more typography styles here
    },
    // Add more typography variants here
  },
  button: {
    primary: {
      backgroundColor: '$primary',
      color: 'white',
      // Add more styles here
    },
  },
  // Add more design tokens here
};

export default function App(): React.ReactComponentElement<any> {
  return (  
    <NavigationContainer>
        {/* <TamaguiProvider config={AppConfig} theme={theme}> */}
        <Stack.Navigator initialRouteName='Landing'>
          <Stack.Screen name="Landing"  options={{ headerShown: false }}  component={LandingScreen}/>
          <Stack.Screen name="Account" options={{ headerShown: false }}>
            {userInfo => <AccountScreen {...userInfo} />}
          </Stack.Screen>
          <Stack.Screen name="Signup" component={SignupScreen} />
        </Stack.Navigator>
      {/* </TamaguiProvider> */}
    </NavigationContainer>
  );
}

