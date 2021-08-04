import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
import { ContextProvider } from './SocketContext';
import { store } from './app/store';
import { Provider } from 'react-redux';

ReactDOM.render(

  <ContextProvider>
         <App />
  </ContextProvider>,
 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
