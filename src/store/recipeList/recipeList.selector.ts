/*
 * File: recipeList.selector
 * Project: BuonApp...etito-frontend
 * File Created: 04/09/22 - 13:45
 * Author: Andrea Fucci (fucciandrea01@gmail.com)
 * Copyright © 2022-2022 Andrea Fucci
 */
import {RootState} from '../reducer.config';

const getMyRecipes = (state: RootState) => state.recipesList.recipes;

export const recipeListSelector = {
    getMyRecipes
}
