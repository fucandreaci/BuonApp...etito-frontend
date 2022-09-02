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
import {Signin} from './components/signin/signin.component';
import {Signup} from './components/signup/signup.component';
import './login.scss'
import {RequestLoginDTO} from '../../models/authentication';
import {useDispatch} from 'react-redux';
import {authenticationAction} from '../../store/authentication/authentication.action';
import {useAppDispatch} from '../../store/store.config';

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

    const dispatch = useAppDispatch();

    const [name, setName] = useState<string>('');
    const [surname, setSurname] = useState<string>('');
    const [emailSignup, setEmailSignup] = useState<string>('');
    const [passwordSignup, setPasswordSignup] = useState<string>('');

    const [emailLogin, setEmailLogin] = useState<string>('');
    const [passwordLogin, setPasswordLogin] = useState<string>('');

    const [isShowSignup, setIsShowSignup] = useState<boolean>(false);

    const login = async () => {
        console.log('Click')
        const request: RequestLoginDTO = {
            email: emailLogin,
            password: passwordLogin
        }

        await dispatch(authenticationAction.signInAction(request))
    }

    return (
        <div className={`${componentClassName}`}>
            <div className={`${componentClassName}__container`}>
                    <Signup
                        isShow={isShowSignup}
                        switchToSignin={() => setIsShowSignup(!isShowSignup)}
                        name={name}
                        setName={setName}
                        surname={surname}
                        setSurname={setSurname}
                        emailSignup={emailSignup}
                        setEmailSignup={setEmailSignup}
                        passwordSignup={passwordSignup}
                        setPasswordSignup={setPasswordSignup}
                        onClickSignup={() => {}}
                    />

                    <Signin
                        isShow={!isShowSignup}
                        switchToSignup={() => setIsShowSignup(!isShowSignup)}
                        emailLogin={emailLogin}
                        setEmailLogin={setEmailLogin}
                        passwordLogin={passwordLogin}
                        setPasswordLogin={setPasswordLogin}
                        onClickSigin={login}
                        onGoogleLogin={() => {}}
                    />

            </div>
        </div>
    )
};
