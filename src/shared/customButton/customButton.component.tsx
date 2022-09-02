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
import './customButton.scss'

interface CustomButtonProps{
    textKey: string,
    outline?: boolean,
    onClick: () => void,
    children?: JSX.Element,
}

const componentClassName = 'custom-button';

export const CustomButton = (props: CustomButtonProps) => {
    const i18nTexts = {
        'en': enTexts,
        'it': itTexts,
        'de': deTexts,
        'es': esTexts,
        'fr': frTexts,
        'nl': nlTexts,
        'sv': svTexts,
    };
    loadTranslations('customButton', i18nTexts);
    const {t} = useTranslation('customButton');

    return (
        <div className={`${componentClassName}`}>
            <button className={`${componentClassName}__button` + (props.outline ? '_outline' : '')}>
                {
                    props.outline ? props.children : t(props.textKey)
                }
            </button>
        </div>
    )
};
