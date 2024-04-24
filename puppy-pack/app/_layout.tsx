//@ts-nocheck
import React, { useEffect } from 'react';
import { useColorScheme } from 'react-native'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
// import { SplashScreen, Stack } from 'expo-router';
import { TamaguiProvider, Theme } from '@tamagui/core';
import tamaguiConfig from '../tamagui.config';

import { UserProvider } from '../context/userContext';

//use this bc AppLoading is depcreated 
SplashScreen.preventAutoHideAsync();

export default () => {
  const colorScheme = useColorScheme();
  const [ fontLoaded ] = useFonts({
    'InterBold': require('@tamagui/font-inter/otf/Inter-Bold.otf'),
    'Inter': require('@tamagui/font-inter/otf/Inter-Medium.otf'),
  });


  useEffect(() => {
    if (fontLoaded) {
      // SplashScreen.hideAsync();
    }
  }, [fontLoaded]);
  
  if (!fontLoaded) {
    return <AppLoading />
  }
  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme}>
      <ThemeProvider value={colorScheme === 'light' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Puppy Pack', headerShown:false }} />
        <UserProvider>
        <Stack.Screen name="account"  options={{ title: 'Account', headerShown:false }}/>
        </UserProvider>
        <Stack.Screen name="signup" options={{ headerShown:false }}/>
      </Stack>
      </ThemeProvider>
    </TamaguiProvider>
  );
};
