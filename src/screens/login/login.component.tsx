import React, {useEffect, useState} from 'react';
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
import {RequestLoginDTO, RequestSignupDTO} from '../../models/authentication';
import {useSelector} from 'react-redux';
import {authenticationAction} from '../../store/authentication/authentication.action';
import {useAppDispatch} from '../../store/store.config';
import {authenticationSelector} from '../../store/authentication/authentication.selector';
import {toastActions} from '../../store/toast/toast.action';
import {ToastType} from '../../store/toast/types';

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
    const loggedUser = useSelector(authenticationSelector.getUser);

    const [name, setName] = useState<string>('');
    const [surname, setSurname] = useState<string>('');
    const [emailSignup, setEmailSignup] = useState<string>('');
    const [passwordSignup, setPasswordSignup] = useState<string>('');

    const [emailLogin, setEmailLogin] = useState<string>('');
    const [passwordLogin, setPasswordLogin] = useState<string>('');

    const [isShowSignup, setIsShowSignup] = useState<boolean>(false);

    useEffect(() => {
        if (loggedUser.isLogged) {
            dispatch(toastActions.showToast({
                type: ToastType.SUCCESS,
                message: t('login:LOGIN_SUCCESS'),
                options: {
                    autoClose: 2000
                }
            }))
            // TODO: REDIRECT
        }
    }, [loggedUser]);

    const login = async () => {
        if (!emailLogin || !passwordLogin) {
            dispatch(toastActions.showToast({
                type: ToastType.ERROR,
                message: t('login:ERROR:FILL_ALL_FIELDS'),
            }))
            return
        }

        const request: RequestLoginDTO = {
            email: emailLogin,
            password: passwordLogin
        }
        await dispatch(authenticationAction.signInAction(request))
    }

    const signup = async () => {
        if (!emailSignup || !passwordSignup || !name || !surname) {
            dispatch(toastActions.showToast({
                type: ToastType.ERROR,
                message: t('login:ERROR:FILL_ALL_FIELDS'),
            }))
            return
        }

        const request: RequestSignupDTO = {
            email: emailSignup,
            password: passwordSignup,
            name,
            surname
        }

        const data = await dispatch(authenticationAction.signUpAction(request))
        if (data.type.includes('fulfilled')) {
            setIsShowSignup(false);
            dispatch(toastActions.showToast({
                type: ToastType.SUCCESS,
                message: t('login:SIGNUP_SUCCESS'),
            }))
        }
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
                    onClickSignup={signup}
                />

                <Signin
                    isShow={!isShowSignup}
                    switchToSignup={() => setIsShowSignup(!isShowSignup)}
                    emailLogin={emailLogin}
                    setEmailLogin={setEmailLogin}
                    passwordLogin={passwordLogin}
                    setPasswordLogin={setPasswordLogin}
                    onClickSigin={login}
                    onGoogleLogin={() => {
                    }}
                />

            </div>
        </div>
    )
};
