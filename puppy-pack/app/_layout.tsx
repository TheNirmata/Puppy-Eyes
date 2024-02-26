import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { TamaguiProvider, Theme } from '@tamagui/core';
import tamaguiConfig from '../tamagui.config';

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useColorScheme } from 'react-native'


SplashScreen.preventAutoHideAsync();

export default () => {
  const colorScheme = useColorScheme();
  const [ fontLoaded ] = useFonts({
    // Inter: require('@tamaagui/font-inter/otf/Inter-Medium.otf'),
    // InterBold: require('@tamaagui/font-inter/otf/Inter-Bold.otf'),
  });


useEffect(()=> {
  if (fontLoaded) {
    SplashScreen.hideAsync();
  }
}, [ fontLoaded ]);
  
if (!fontLoaded) {
  return null;
}

    return (
      <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme}>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>

        <Stack>
          <Stack.Screen name="index" options={{ title: 'Puppy Pack', headerShown:false }} />
          <Stack.Screen name="AccountScreen">

          </Stack.Screen>
          <Stack.Screen name="SignupScreen" />
        </Stack>
        </ThemeProvider>
      </TamaguiProvider>
    );

};
