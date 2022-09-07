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
import {CustomBadge} from 'shared/customBadge/customBadge.component';
import {Type} from 'models/type';
import './recipeItem.scss'

interface RecipeItemProps{
    recipeName: string,
    types: Type[],
    image: string,
    preparation: string,
    onClick?: () => void
}

const componentClassName = 'recipe-item';

export const RecipeItem = (props: RecipeItemProps) => {
    const i18nTexts = {
        'en': enTexts,
        'it': itTexts,
        'de': deTexts,
        'es': esTexts,
        'fr': frTexts,
        'nl': nlTexts,
        'sv': svTexts,
    };
    loadTranslations('recipeItem', i18nTexts);
    const {t} = useTranslation('recipeItem');

    return (
        <div className={`${componentClassName}`} onClick={props.onClick} style={props.onClick ? {cursor: 'pointer'} : {}}>
            <div className={`${componentClassName}__profile_card`}>
                <div className={`${componentClassName}__profile_card__img-box`}>
                    <img className={`${componentClassName}__profile_card__img`} src={props.image} />
                </div>

                <div className={`${componentClassName}__profile_card__content`}>
                    <h2 className={`${componentClassName}__profile_card__title`}>{props.recipeName}</h2>
                    <div className={`${componentClassName}__profile_card__type`}>
                        {
                            props.types.map((type) => <CustomBadge value={type.name} key={type.id}/>)
                        }
                    </div>
                    <p className={`${componentClassName}__profile_card__description`}>{props.preparation}</p>
                </div>
            </div>
        </div>
    )
};
