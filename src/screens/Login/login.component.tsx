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

    return (
        <div className={`${componentClassName}`}>
            <div className={`${componentClassName}__container`}>
                <input type="checkbox" id="chk" aria-hidden="true"/>
                <div className={`${componentClassName}__signup`}>
                    <form>
                        <label htmlFor="chk" aria-hidden="true" className={`${componentClassName}__label`}>Sign
                            up</label>
                        <CustomInput inputType={'text'} placeholderKey={'login:NAME'} value={name} onChange={setName} />
                        <CustomInput inputType={'text'} placeholderKey={'login:SURNAME'} value={surname} onChange={setSurname} />
                        <CustomInput inputType={'email'} placeholderKey={'login:EMAIL'} value={emailSignup} onChange={setEmailSignup} />
                        <CustomInput inputType={'password'} placeholderKey={'login:PASSWORD'} value={passwordSignup} onChange={setPasswordSignup} />

                        <button className={`${componentClassName}__button`}>Sign up</button>
                    </form>
                </div>

                <div className={`${componentClassName}__login`}>
                    <form>
                        <label htmlFor="chk" aria-hidden="true" className={`${componentClassName}__label`}>Login</label>
                        <input type="email" name="email" placeholder="Email" className={`${componentClassName}__input`}/>
                        <input type="password" name="pswd" placeholder="Password"
                               className={`${componentClassName}__input`}/>
                        <button className={`${componentClassName}__button`}>Login</button>
                        <button className={`${componentClassName}__button_outline`}>
                            <Avatar background={"white"} size={'small'}>
                                <Google />
                            </Avatar>
                        </button>
                    </form>
                </div>

            </div>
        </div>
    )
};
