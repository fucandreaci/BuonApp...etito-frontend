import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {i18Mfe, initAppTranslator} from './i18n/i18n.config';
import {I18nextProvider} from 'react-i18next';
import store from './store/store.config';
import axios from 'axios';

const container = document.getElementById('root')!;
const root = createRoot(container);

initAppTranslator();

axios.defaults.baseURL = 'http://localhost:8080/';
axios.defaults.headers.post['Content-Type'] = 'application/json';


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={ i18Mfe }><App /></I18nextProvider>

      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
