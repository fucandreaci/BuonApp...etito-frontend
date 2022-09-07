import React from 'react';
import {loadTranslations} from 'i18n/i18n.service';
import {useTranslation} from 'react-i18next';
import enTexts from './i18n/en.json';
import itTexts from './i18n/it.json';
import deTexts from './i18n/de.json';
import esTexts from './i18n/es.json';
import frTexts from './i18n/fr.json';
import nlTexts from './i18n/nl.json';
import svTexts from './i18n/sv.json';
import {ListRecipes} from './components/listRecipes/listRecipes.component';
import {Button, Header, Heading, Menu} from 'grommet';
import {Logout} from 'grommet-icons';
import './homeComponent.scss'

interface HomeComponentProps{
    onClickItem: (id: number) => void
}

const componentClassName = 'home-component';

export const HomeComponent = (props: HomeComponentProps) => {
    const i18nTexts = {
        'en': enTexts,
        'it': itTexts,
        'de': deTexts,
        'es': esTexts,
        'fr': frTexts,
        'nl': nlTexts,
        'sv': svTexts,
    };
    loadTranslations('homeComponent', i18nTexts);
    const {t} = useTranslation('homeComponent');

    return (
        <div className={`${componentClassName}`}>
            <Header background="primary" pad={{horizontal: 'small'}}>
                <Heading margin="none" style={{fontSize: '25px'}}>Buon app...etito</Heading>
                <Button icon={<Logout />} hoverIndicator />
            </Header>
            <ListRecipes onClickItem={props.onClickItem}/>
        </div>
    )
};
