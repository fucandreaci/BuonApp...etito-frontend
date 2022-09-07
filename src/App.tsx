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
import {useTranslation} from 'react-i18next';
import {Login} from 'screens/login/login.component';
import { Grommet } from 'grommet';
import {Toastr} from './shared/toastr/toastr.component';
import {HomeComponent} from './screens/homeComponent/homeComponent.component';
import {RecipeDetails} from './screens/recipeDetails/recipeDetails.component';
import customHistory from './navigation/customHistory.config';
import './App.css';

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

    const onClickItem = (id: number) => {
        customHistory.push(`/recipe/${id}`);
    }

    const onClickHeader = () => {
        customHistory.push('/home');
    }

    const onClickLogout = () => {
        customHistory.push('/logout');
    }

    const theme = {
        global: {
            colors: {
                primary: '#8a3b3b',
            }
        }
    }

    return (
        <Grommet theme={theme}>
            <Toastr />
            <Router history={customHistory}>
                <Switch>
                    <Route path="/login" exact={true}>
                        <Login/>
                    </Route>
                    <Route path="/home" exact={true}>
                        <HomeComponent onClickItem={onClickItem} onClickHeader={onClickHeader} onClickLogout={onClickLogout}/>
                    </Route>
                    <Route path="/recipe/:recipeId" exact={true}>
                        <RecipeDetails onClickHeader={onClickHeader} onClickLogout={onClickLogout}/>
                    </Route>
                </Switch>
            </Router>
        </Grommet>
    );
}

export default App;
