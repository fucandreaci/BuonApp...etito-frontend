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
import {useParams} from 'react-router-dom';
import {Button, Header, Heading} from 'grommet';
import {Logout} from 'grommet-icons';
import {CustomBadge} from 'shared/customBadge/customBadge.component';
import {useAppDispatch} from 'store/store.config';
import {recipeDetailsAction} from 'store/recipeDetails/recipeDetails.action';
import {useSelector} from 'react-redux';
import {recipeDetailsSelector} from 'store/recipeDetails/recipeDetails.selector';
import './recipeDetails.scss'

interface RecipeDetailsProps{
}

const componentClassName = 'recipe-details';

export const RecipeDetails = (props: RecipeDetailsProps) => {
    const i18nTexts = {
        'en': enTexts,
        'it': itTexts,
        'de': deTexts,
        'es': esTexts,
        'fr': frTexts,
        'nl': nlTexts,
        'sv': svTexts,
    };
    loadTranslations('recipeDetails', i18nTexts);
    const {t} = useTranslation('recipeDetails');
    const params = useParams<{recipeId: string}>();
    const dispatch = useAppDispatch();

    const recipeId = params.recipeId;

    const recipeDetails = useSelector(recipeDetailsSelector.getRecipeDetails);

    useEffect(() => {
        const id = parseInt(recipeId);
        dispatch(recipeDetailsAction.fetchRecipe({id}));
    }, [])

    return (
        <div className={`${componentClassName}`}>
            <Header background="primary" pad={{horizontal: 'small'}}>
                <Heading margin="none" style={{fontSize: '25px'}}>Buon app...etito</Heading>
                <Button icon={<Logout />} hoverIndicator />
            </Header>

            <div className={`${componentClassName}__image`}>
                <img src={'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574'} />
            </div>

            <div className={`${componentClassName}__content`}>
                <div className={`${componentClassName}__card`}>
                    <h2 className={`${componentClassName}__title`}>{ recipeDetails.name }</h2>

                    <div className={`${componentClassName}__type`}>
                        {
                            recipeDetails.types.map((type) => <CustomBadge value={type.name} key={type.id}/>)
                        }
                    </div>

                    <div className={`${componentClassName}__ingredients`}>
                        <h4 className={`${componentClassName}__subtitle`}>{ t('recipeDetails:INGREDIENTS') }</h4>
                        <ul>
                            {
                                recipeDetails.ingredients.map((ingredient) => <li key={ingredient.id}><b>{ingredient.name}</b> {ingredient.quantity}</li>)
                            }
                        </ul>
                    </div>

                    <div className={`${componentClassName}__preparation`}>
                        <h4 className={`${componentClassName}__subtitle`}>{ t('recipeDetails:PREPARATION') }</h4>
                        <p>
                            { recipeDetails.preparation }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};
