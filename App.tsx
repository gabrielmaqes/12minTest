import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import HomeStack from './src/routes/PagesStack';
import { AppLoading } from 'expo';

export default function App() {
  const [fonstLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Roboto_400Regular,
    Roboto_700Bold
  })

  if (!fonstLoaded) {
    return <AppLoading />
  }
  
  return (
    <>
      <HomeStack />
      <StatusBar style="light" />
    </>
  );
}


