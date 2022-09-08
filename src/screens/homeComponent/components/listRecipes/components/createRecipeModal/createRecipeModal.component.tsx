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
import {Layer} from 'grommet';
import './createRecipeModal.scss'
import {CustomInput} from '../../../../../../shared/customInput/customInput.component';
import {CustomButton} from '../../../../../../shared/customButton/customButton.component';

interface CreateRecipeModalProps{
    showPopup: boolean,
    setShowPopup: (showPopup: boolean) => void
}

const componentClassName = 'create-recipe-modal';

export const CreateRecipeModal = (props: CreateRecipeModalProps) => {
    const i18nTexts = {
        'en': enTexts,
        'it': itTexts,
        'de': deTexts,
        'es': esTexts,
        'fr': frTexts,
        'nl': nlTexts,
        'sv': svTexts,
    };
    loadTranslations('createRecipeModal', i18nTexts);
    const {t} = useTranslation('createRecipeModal');

    const [name, setName] = useState('');
    const [preparation, setPreparation] = useState('');
    const [image, setImage] = useState('');

    return (
        <div className={`${componentClassName}`}>
            <Layer
                onEsc={() => props.setShowPopup(false)}
                onClickOutside={() => props.setShowPopup(false)}
            >
                <div className={`${componentClassName}__content`}>
                    <div className={`${componentClassName}__title`}>
                        {t('createRecipeModal:TITLE')}
                    </div>

                    <CustomInput
                        inputType={'text'}
                        placeholderKey={'createRecipeModal:RECIPE_NAME'}
                        value={name}
                        onChange={setName}
                    />

                    {/*TODO: Convert to textarea */}
                    <CustomInput
                        inputType={'text'}
                        placeholderKey={'createRecipeModal:RECIPE_PREPARATION'}
                        value={preparation}
                        onChange={setPreparation}
                    />

                    <CustomInput
                        inputType={'text'}
                        placeholderKey={'createRecipeModal:IMG_URL'}
                        value={image}
                        onChange={setImage}
                    />


                    {/*TODO: Add ingredients*/}
                    {/*TODO: Add types*/}

                    <CustomButton
                        textKey={'createRecipeModal:CREATE'}
                        onClick={() => {}}
                    />
                </div>
            </Layer>
        </div>
    )
};
