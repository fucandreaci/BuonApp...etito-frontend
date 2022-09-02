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
import './customInput.scss'

interface CustomInputProps{
    inputType: string;
    placeholderKey: string;
    value: string;
    onChange: (value: string) => void;
}

const componentClassName = 'custom-input';

export const CustomInput = (props: CustomInputProps) => {
    const i18nTexts = {
        'en': enTexts,
        'it': itTexts,
        'de': deTexts,
        'es': esTexts,
        'fr': frTexts,
        'nl': nlTexts,
        'sv': svTexts,
    };
    loadTranslations('customInput', i18nTexts);
    const {t} = useTranslation('customInput');

    return (
        <div className={`${componentClassName}`}>
            <input
                type={props.inputType}
                placeholder={t(props.placeholderKey)}
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
                className={`${componentClassName}__input`}
            />
        </div>
    )
};
