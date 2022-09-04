import React, {useEffect} from 'react';
import {loadTranslations} from 'i18n/i18n.service';
import {useTranslation} from 'react-i18next';
import enTexts from './i18n/en.json';
import itTexts from './i18n/it.json';
import deTexts from './i18n/de.json';
import esTexts from './i18n/es.json';
import frTexts from './i18n/fr.json';
import nlTexts from './i18n/nl.json';
import svTexts from './i18n/sv.json';
import {RecipeItem} from './components/recipeItem/recipeItem.component';
import { Row, Col } from 'react-grid-system';
import './listRecipes.scss'
import {useSelector} from 'react-redux';
import {recipeListSelector} from 'store/recipeList/recipeList.selector';
import {useAppDispatch} from 'store/store.config';
import {recipeListAction} from 'store/recipeList/recipeList.action';

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
    const dispatch = useAppDispatch();

    const recipes = useSelector(recipeListSelector.getMyRecipes);
    useEffect(() => {
        dispatch(recipeListAction.fetchMyRecipes({}));
    }, [recipes])

    return (
        <div className={`${componentClassName}`}>
            <Row>
                {
                    recipes.map((recipe) => {
                        return (
                            <Col sm={10} md={6} lg={4} className={`${componentClassName}__recipe_col`} key={recipe.id}>
                                {/* TODO: change image */}
                                <RecipeItem
                                    recipeName={recipe.name}
                                    preparation={recipe.preparation}
                                    image={'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574'}
                                    types={recipe.types}
                                    onClick={() => {
                                        //TODO: navigate to recipe detail
                                        console.log('click')
                                    }}
                                />
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    )
};
