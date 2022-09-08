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
import {RecipeItem} from './components/recipeItem/recipeItem.component';
import { Row, Col } from 'react-grid-system';
import {useSelector} from 'react-redux';
import {recipeListSelector} from 'store/recipeList/recipeList.selector';
import {useAppDispatch} from 'store/store.config';
import {recipeListAction} from 'store/recipeList/recipeList.action';
import {CreateRecipeButton} from './components/createRecipeButton/createRecipeButton.component';
import {CreateRecipeModal} from './components/createRecipeModal/createRecipeModal.component';
import './listRecipes.scss'

interface ListRecipesProps{
    onClickItem: (id: number) => void
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

    const [showCreationPopup, setShowCreationPopup] = useState<boolean>(false);

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
                                <RecipeItem
                                    recipeName={recipe.name}
                                    preparation={recipe.preparation}
                                    image={recipe.imgUrl}
                                    types={recipe.types}
                                    onClick={() => props.onClickItem(recipe.id)}
                                />
                            </Col>
                        )
                    })
                }
            </Row>

            <CreateRecipeButton
                showPopup={showCreationPopup}
                setShowPopup={setShowCreationPopup}
            />

            {
                showCreationPopup && (
                    <CreateRecipeModal
                        showPopup={showCreationPopup}
                        setShowPopup={setShowCreationPopup}
                    />
                )
            }
        </div>
    )
};
