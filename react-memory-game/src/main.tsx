import React from 'react'
import ReactDOM from 'react-dom/client'
import RoutesApp from './components/Routes.tsx';
import { ThemeProvider } from '@mui/material';
import { GameTheme } from './theme/GameTheme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={GameTheme}>
      <RoutesApp />
    </ThemeProvider>
  </React.StrictMode>,
);