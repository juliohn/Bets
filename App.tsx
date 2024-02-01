import React from 'react';
import { ThemeProvider } from 'styled-components';

import Theme from './src/styles/theme';

import { Routes } from './src/routes/index';


export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Routes />
    </ThemeProvider>
   
  );
}