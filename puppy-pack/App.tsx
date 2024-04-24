//@ts-nocheck
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from './app/account/[username]';

const Stack = createStackNavigator();


import { TamaguiProvider } from "tamagui";
import config from "./tamagui.config";

import LoginScreen from './app/(login)/index';
import { NavigationContainer } from '@react-navigation/native';
import { headers } from 'next/headers';

export default function App(): React.ReactComponentElement<any> {
  return (  
    <NavigationContainer>
        <TamaguiProvider config={config}>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Account" component={AccountScreen} options={{headerShown: false}}/>
          </Stack.Navigator>
          <StatusBar style="auto" />
        </TamaguiProvider>
    </NavigationContainer>
  );
};

