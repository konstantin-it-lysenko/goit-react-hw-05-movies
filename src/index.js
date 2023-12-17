import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App/App';
import './reset.css';
import { ThemeProvider } from '@emotion/react';
import { theme } from './constants/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename='/goit-react-hw-05-movies'>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
