import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import themeObj from './theme';
import App from './App';
import './index.css';

// For styled component example - https://dev.to/rasaf_ibrahim/styled-components-in-material-ui-mui-with-styled-utility-3l3j

const theme = createTheme(themeObj);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
