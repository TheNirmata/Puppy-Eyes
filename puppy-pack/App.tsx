//@ts-nocheck
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, Text } from 'react-native';

import { TamaguiProvider } from "tamagui";
import config from "./tamagui.config";

import LoginScreen from './app/(login)/index';

export default function App(): React.ReactComponentElement<any> {
  return (  
    <TamaguiProvider config={config}>
      
      <SafeAreaView>
        <LoginScreen />
      </SafeAreaView>
      <StatusBar style="auto" />
    </TamaguiProvider>
    
  );
};

