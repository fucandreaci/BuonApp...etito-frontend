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
import './signup.scss'
import {CustomInput} from 'shared/customInput/customInput.component';
import {CustomButton} from 'shared/customButton/customButton.component';

interface SignupProps{
    name: string
    setName: (name: string) => void
    surname: string
    setSurname: (surname: string) => void
    emailSignup: string
    setEmailSignup: (email: string) => void
    passwordSignup: string
    setPasswordSignup: (password: string) => void
    onClickSignup: () => void
    isShow: boolean
    switchToSignin: () => void
}

const componentClassName = 'signup';

export const Signup = (props: SignupProps) => {
    const i18nTexts = {
        'en': enTexts,
        'it': itTexts,
        'de': deTexts,
        'es': esTexts,
        'fr': frTexts,
        'nl': nlTexts,
        'sv': svTexts,
    };
    loadTranslations('signup', i18nTexts);
    const {t} = useTranslation('signup');

    return (
        <div className={`${componentClassName}`}>
            <label
                aria-hidden="true"
                className={`${componentClassName}__label ` + (!props.isShow ? `${componentClassName}__not_showing_label` : '')}
                onClick={props.switchToSignin}
            >
                { t('login:SIGNUP_LABEL') }
            </label>

            <CustomInput inputType={'text'} placeholderKey={'login:NAME'} value={props.name} onChange={props.setName} />
            <CustomInput inputType={'text'} placeholderKey={'login:SURNAME'} value={props.surname} onChange={props.setSurname} />
            <CustomInput inputType={'email'} placeholderKey={'login:EMAIL'} value={props.emailSignup} onChange={props.setEmailSignup} />
            <CustomInput inputType={'password'} placeholderKey={'login:PASSWORD'} value={props.passwordSignup} onChange={props.setPasswordSignup} />

            <CustomButton textKey={'login:SIGNUP_BUTTON'} onClick={props.onClickSignup} />
        </div>
    )
};
