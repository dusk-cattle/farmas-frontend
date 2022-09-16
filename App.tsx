// deps
import React from 'react';
import { Text } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';

// screens
import { RegisterPage, LoginPage } from './src/screens';

export default function App() {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </NativeRouter>
  );
}
