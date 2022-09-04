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
import {Box, Card, CardBody, CardFooter, Grid, Image, Tag, Text} from 'grommet';
import './recipeItem.scss'
import {CustomBadge} from '../../../../../../shared/customBadge/customBadge.component';


interface RecipeItemProps{

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
        <div className={`${componentClassName}`}>
            <div className={`${componentClassName}__profile_card`}>
                <div className={`${componentClassName}__profile_card__img-box`}>
                    <img className={`${componentClassName}__profile_card__img`} src={'https://images.pexels.com/photos/5186/person-woman-coffee-cup.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} />
                </div>

                <div className={`${componentClassName}__profile_card__content`}>
                    <h2 className={`${componentClassName}__profile_card__title`}>John Doe</h2>
                    <div className={`${componentClassName}__profile_card__type`}>
                        <CustomBadge value={'Test'} />
                        <CustomBadge value={'Test'} />
                        <CustomBadge value={'Test'} />
                    </div>
                    <p className={`${componentClassName}__profile_card__school`}>Lorem ipsum</p>
                </div>
            </div>
        </div>
    )
};
