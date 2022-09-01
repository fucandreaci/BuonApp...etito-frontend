import React from 'react';
import itTexts from 'i18n/common-translations/it.json';
import enTexts from 'i18n/common-translations/en.json';
import esTexts from 'i18n/common-translations/es.json';
import frTexts from 'i18n/common-translations/fr.json';
import deTexts from 'i18n/common-translations/de.json';
import nlTexts from 'i18n/common-translations/nl.json';
import svTexts from 'i18n/common-translations/sv.json';
import {Route, Router, Switch} from 'react-router-dom';
import {loadTranslations} from 'i18n/i18n.service';
import { createBrowserHistory } from "history";


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
    const customHistory = createBrowserHistory();

    return (
        <Switch>
            <Router history={customHistory}>
                <Route path="/login" exact={true}>
                    HOME
                </Route>
            </Router>
        </Switch>
    );
}

export default App;
