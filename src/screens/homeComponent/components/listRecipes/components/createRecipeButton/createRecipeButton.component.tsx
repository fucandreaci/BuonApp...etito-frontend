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
import {Add} from 'grommet-icons';
import './createRecipeButton.scss'
import {Layer} from 'grommet';

interface CreateRecipeButtonProps {

}

const componentClassName = 'create-recipe-button';

export const CreateRecipeButton = (props: CreateRecipeButtonProps) => {
    const i18nTexts = {
        'en': enTexts,
        'it': itTexts,
        'de': deTexts,
        'es': esTexts,
        'fr': frTexts,
        'nl': nlTexts,
        'sv': svTexts,
    };
    loadTranslations('createRecipeButton', i18nTexts);
    const {t} = useTranslation('createRecipeButton');

    const [showPopup, setShowPopup] = useState<boolean>(false);

    return (
        <div className={`${componentClassName}`}>
            <a className={`${componentClassName}__floatingButton`} onClick={() => setShowPopup(true)}>
                <Add color={'white'}/>
            </a>

            {
                showPopup && (
                    <Layer
                        onEsc={() => setShowPopup(false)}
                        onClickOutside={() => setShowPopup(false)}
                    >
                    </Layer>
                )
            }
        </div>
    )
};
