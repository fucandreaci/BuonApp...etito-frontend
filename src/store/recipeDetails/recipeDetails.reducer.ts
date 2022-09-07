import {createReducer} from '@reduxjs/toolkit';
import { RecipeDetailsState } from './types';
import {recipeDetailsAction} from './recipeDetails.action';

const initialState: RecipeDetailsState = {
    isLoading: false,
    recipe: {
        id: 0,
        types: [],
        name: '',
        preparation: '',
        ingredients: [],
        isPublic: false,
        imgUrl: '',
    },
};

export const recipeDetailsReducer = {
    recipeDetails: createReducer(initialState, (builder) => {
        builder.addCase(recipeDetailsAction.fetchRecipe.pending, (state, action) => {
            return {
                ...state,
                isLoading: true
            }
        });

        builder.addCase(recipeDetailsAction.fetchRecipe.fulfilled, (state, action) => {
            return {
                ...state,
                recipe: action.payload,
                isLoading: false
            }
        });

        builder.addCase(recipeDetailsAction.fetchRecipe.rejected, (state, action) => {
            return {
                ...state,
                isLoading: false
            }
        });
    }) 
}
