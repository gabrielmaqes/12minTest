import { StatusBar } from 'expo-status-bar';
import React from 'react';

import HomeStack from './src/routes/PagesStack';

export default function App() {
  return (
    <>
      <HomeStack />
      <StatusBar style="light" />
    </>
  );
}


