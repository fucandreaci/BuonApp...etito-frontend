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
import './listRecipes.scss'
import {RecipeItem} from './components/recipeItem/recipeItem.component';
import { Container, Row, Col } from 'react-grid-system';


interface ListRecipesProps{

}

const componentClassName = 'list-recipes';

export const ListRecipes = (props: ListRecipesProps) => {
    const i18nTexts = {
        'en': enTexts,
        'it': itTexts,
        'de': deTexts,
        'es': esTexts,
        'fr': frTexts,
        'nl': nlTexts,
        'sv': svTexts,
    };
    loadTranslations('listRecipes', i18nTexts);
    const {t} = useTranslation('listRecipes');

    return (
        <div className={`${componentClassName}`}>
            <Row>
                <Col sm={10} md={6} lg={4} className={`${componentClassName}__recipe_col`}>
                    <RecipeItem />
                </Col>
                <Col sm={10} md={6} lg={4} className={`${componentClassName}__recipe_col`}>
                    <RecipeItem />
                </Col>
                <Col sm={10} md={6} lg={4} className={`${componentClassName}__recipe_col`}>
                    <RecipeItem />
                </Col>
                <Col sm={10} md={6} lg={4} className={`${componentClassName}__recipe_col`}>
                    <RecipeItem />
                </Col>
                <Col sm={10} md={6} lg={4} className={`${componentClassName}__recipe_col`}>
                    <RecipeItem />
                </Col>
                <Col sm={10} md={6} lg={4} className={`${componentClassName}__recipe_col`}>
                    <RecipeItem />
                </Col>
            </Row>
        </div>
    )
};
