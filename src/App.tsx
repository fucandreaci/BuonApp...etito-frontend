import React, {useEffect} from 'react';
import './App.css';
import {i18nConfig, initAppTranslator} from './i18n/i18n.config';
import {I18nextProvider} from 'react-i18next';
import AppContext from './AppContext.component';

const App = () => {
  useEffect(() => {
    initAppTranslator()
  }, []);

  return (
      <><I18nextProvider i18n={i18nConfig}/><AppContext/></>
  );
}

export default App;
