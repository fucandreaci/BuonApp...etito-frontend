import React, {useState} from 'react';
import {loadTranslations} from 'i18n/i18n.service';
import {useTranslation} from 'react-i18next';
import enTexts from './i18n/en.json';
import itTexts from './i18n/it.json';
import deTexts from './i18n/de.json';
import esTexts from './i18n/es.json';
import frTexts from './i18n/fr.json';
import nlTexts from './i18n/nl.json';
import svTexts from './i18n/sv.json';
import './login.scss'
import {Avatar} from 'grommet';
import {Google} from 'grommet-icons';
import {CustomInput} from 'shared/customInput/customInput.component';
import {CustomButton} from '../../shared/customButton/customButton.component';

interface LoginProps {

}

const componentClassName = 'login';

export const Login = (props: LoginProps) => {
    const i18nTexts = {
        'en': enTexts,
        'it': itTexts,
        'de': deTexts,
        'es': esTexts,
        'fr': frTexts,
        'nl': nlTexts,
        'sv': svTexts,
    };
    loadTranslations('login', i18nTexts);
    const {t} = useTranslation('login');

    const [name, setName] = useState<string>('');
    const [surname, setSurname] = useState<string>('');
    const [emailSignup, setEmailSignup] = useState<string>('');
    const [passwordSignup, setPasswordSignup] = useState<string>('');

    const [emailLogin, setEmailLogin] = useState<string>('');
    const [passwordLogin, setPasswordLogin] = useState<string>('');

    return (
        <div className={`${componentClassName}`}>
            <div className={`${componentClassName}__container`}>
                <input type="checkbox" id="chk" aria-hidden="true"/>
                <div className={`${componentClassName}__signup`}>
                    <label htmlFor="chk" aria-hidden="true" className={`${componentClassName}__label`}>{ t('login:SIGNUP_LABEL') }</label>
                    <CustomInput inputType={'text'} placeholderKey={'login:NAME'} value={name} onChange={setName} />
                    <CustomInput inputType={'text'} placeholderKey={'login:SURNAME'} value={surname} onChange={setSurname} />
                    <CustomInput inputType={'email'} placeholderKey={'login:EMAIL'} value={emailSignup} onChange={setEmailSignup} />
                    <CustomInput inputType={'password'} placeholderKey={'login:PASSWORD'} value={passwordSignup} onChange={setPasswordSignup} />

                    <CustomButton textKey={'login:SIGNUP_BUTTON'} onClick={() => {}} />
                </div>

                <div className={`${componentClassName}__login`}>
                    <label htmlFor="chk" aria-hidden="true" className={`${componentClassName}__label`}>Login</label>
                    <CustomInput inputType={'email'} placeholderKey={'login:EMAIL'} value={emailLogin} onChange={setEmailLogin} />
                    <CustomInput inputType={'password'} placeholderKey={'login:PASSWORD'} value={passwordLogin} onChange={setPasswordLogin} />

                    <CustomButton textKey={'login:SIGNIN_BUTTON'} onClick={() => {}} />
                    <CustomButton textKey={''} outline={true} onClick={() => {}}>
                        <Avatar background={"white"} size={'small'}>
                            <Google />
                        </Avatar>
                    </CustomButton>
                </div>

            </div>
        </div>
    )
};
