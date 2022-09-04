import {createReducer} from '@reduxjs/toolkit';
import { RecipeListState } from './types';
import {recipeListAction} from './recipeList.action';

const initialState: RecipeListState = {
    recipes: [],
    isLoading: false,
};

export const recipeListReducer = {
    recipesList: createReducer(initialState, (builder) => {
        builder.addCase(recipeListAction.fetchMyRecipes.pending, (state, action) => {
            return {
                ...state,
                isLoading: true
            }
        });

        builder.addCase(recipeListAction.fetchMyRecipes.fulfilled, (state, action) => {
            return {
                ...state,
                recipes: action.payload.data,
                isLoading: false
            }
        });

        builder.addCase(recipeListAction.fetchMyRecipes.rejected, (state, action) => {
            return {
                ...state,
                isLoading: false
            }
        });

        builder.addDefaultCase((state, action) => {
            return state;
        });
    })
}
