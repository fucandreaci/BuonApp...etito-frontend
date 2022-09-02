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
import './signin.scss'
import {CustomInput} from '../../../../shared/customInput/customInput.component';
import {CustomButton} from '../../../../shared/customButton/customButton.component';
import {Avatar} from 'grommet';
import {Google} from 'grommet-icons';

interface SigninProps{
    emailLogin: string
    setEmailLogin: (email: string) => void
    passwordLogin: string
    setPasswordLogin: (password: string) => void
    onClickSigin: () => void
    onGoogleLogin: () => void
    isShow: boolean,
    switchToSignup: () => void
}

const componentClassName = 'signin';

export const Signin = (props: SigninProps) => {
    const i18nTexts = {
        'en': enTexts,
        'it': itTexts,
        'de': deTexts,
        'es': esTexts,
        'fr': frTexts,
        'nl': nlTexts,
        'sv': svTexts,
    };
    loadTranslations('signin', i18nTexts);
    const {t} = useTranslation('signin');

    return (
        <div className={`${componentClassName} ` + (props.isShow ? `${componentClassName}__showing` : '')}>
            <label
                aria-hidden="true"
                className={`${componentClassName}__label ` + (props.isShow ? `${componentClassName}__showing_label` : '')}
                onClick={props.switchToSignup}
            >
                Login
            </label>

            <CustomInput inputType={'email'} placeholderKey={'login:EMAIL'} value={props.emailLogin} onChange={props.setEmailLogin} />
            <CustomInput inputType={'password'} placeholderKey={'login:PASSWORD'} value={props.passwordLogin} onChange={props.setPasswordLogin} />

            <CustomButton textKey={'login:SIGNIN_BUTTON'} onClick={props.onClickSigin} />
            <CustomButton textKey={''} outline={true} onClick={props.onGoogleLogin}>
                <Avatar background={"white"} size={'small'}>
                    <Google />
                </Avatar>
            </CustomButton>
        </div>
    )
};
