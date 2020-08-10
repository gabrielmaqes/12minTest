import { StatusBar } from 'expo-status-bar';
import React from 'react';

import BooksList from './src/pages/BooksList';

export default function App() {
  return (
    <>
      <BooksList />
      <StatusBar style="auto" />
    </>
  );
}


