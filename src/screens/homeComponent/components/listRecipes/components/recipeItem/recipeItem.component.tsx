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
            <Card height="medium" width="medium" background="light-1">
                <CardBody pad="none">
                    <Image
                        fit="cover"
                        src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
                    />
                </CardBody>
                <CardFooter pad={"small"} background="light-2" style={{'justifyContent': 'flex-start'}}>
                    <div className={`${componentClassName}__types`}>
                        <div className={`${componentClassName}__padding_all`}>
                            <CustomBadge value="Secondo" />
                        </div>
                    </div>
                        <div className={`${componentClassName}__title`}>
                            <Text  margin={"auto"}>Pennette alla vodka</Text>
                        </div>
                </CardFooter>
            </Card>
        </div>
    )
};
