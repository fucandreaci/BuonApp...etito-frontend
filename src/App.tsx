import React, {Suspense} from 'react';
import itTexts from 'i18n/common-translations/it.json';
import enTexts from 'i18n/common-translations/en.json';
import esTexts from 'i18n/common-translations/es.json';
import frTexts from 'i18n/common-translations/fr.json';
import deTexts from 'i18n/common-translations/de.json';
import nlTexts from 'i18n/common-translations/nl.json';
import svTexts from 'i18n/common-translations/sv.json';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { loadTranslations} from 'i18n/i18n.service';


import './App.css';
import {useTranslation} from 'react-i18next';

function App() {
  const i18nTexts = {
    'en': enTexts,
    'it': itTexts,
    'de': deTexts,
    'es': esTexts,
    'fr': frTexts,
    'nl': nlTexts,
    'sv': svTexts,
  };
  loadTranslations('commons', i18nTexts);

  const {t} = useTranslation('commons');

  return (
      <><Suspense fallback="loading">
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <Counter/>
            <p>
              <>{t('common:BACK')}
                <br/>
                Edit <code>src/App.tsx</code> and save to reload.
              </>
            </p>
            <span>
                      <span>Learn </span>
                      <a
                          className="App-link"
                          href="https://reactjs.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                          React
                      </a>
                      <span>, </span>
                      <a
                          className="App-link"
                          href="https://redux.js.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                          Redux
                      </a>
                      <span>, </span>
                      <a
                          className="App-link"
                          href="https://redux-toolkit.js.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                          Redux Toolkit
                      </a>
                      ,<span> and </span>
                      <a
                          className="App-link"
                          href="https://react-redux.js.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                          React Redux
                      </a>
                  </span>
          </header>
        </div>
          </Suspense>
      </>
  );
}

export default App;
