import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.scss';
import { App } from './App.jsx';
import store from './store/store.js';
import { Provider } from 'react-redux'
import {multiply} from './math.js';

console.log('4 * 5=',multiply(4,5));

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App/>
    </Provider>
  </React.StrictMode>
);