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
import {createBrowserHistory} from "history";
import './App.css';
import {useTranslation} from 'react-i18next';
import {Login} from 'screens/login/login.component';
import { Grommet } from 'grommet';
import {Toastr} from './shared/toastr/toastr.component';

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
    const browserHistory = createBrowserHistory();

    const theme = {
        global: {
            colors: {
                primary: '#3e4684',
                primary_light: '#dde5f4',
                primary_light_2: '#f1f7fe',
            }
        }
    }

    return (
        <Grommet theme={theme}>
            <Toastr />
            <Router history={browserHistory}>
                <Switch>
                    <Route path="/login" exact={true}>
                        <Login/>
                    </Route>
                </Switch>
            </Router>
        </Grommet>
    );
}

export default App;
