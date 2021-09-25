import React from 'react';
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider} from '@material-ui/core/styles';

import {indigo, deepPurple } from '@material-ui/core/colors/' 
import App from './App';
import './index.css'


const theme = createTheme({
  palette: {
    primary: {
      main: indigo[900],
  },
    secondary: {
      main: deepPurple[700]
    }
}});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


