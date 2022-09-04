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
import './customBadge.scss'

interface CustomBadgeProps{
    value: string
}

const componentClassName = 'custom-badge';

export const CustomBadge = (props: CustomBadgeProps) => {
    const i18nTexts = {
        'en': enTexts,
        'it': itTexts,
        'de': deTexts,
        'es': esTexts,
        'fr': frTexts,
        'nl': nlTexts,
        'sv': svTexts,
    };
    loadTranslations('customBadge', i18nTexts);
    const {t} = useTranslation('customBadge');

    return (
        <div className={`${componentClassName}`}>
            {props.value}
        </div>
    )
};
