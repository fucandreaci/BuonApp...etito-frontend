/*
 * File: recipeDetails.selector
 * Project: BuonApp...etito-frontend
 * File Created: 07/09/22 - 18:59
 * Author: Andrea Fucci (fucciandrea01@gmail.com)
 * Copyright © 2022-2022 Andrea Fucci
 */

import {RootState} from '../reducer.config';

const getRecipeDetails = (state: RootState) => state.recipeDetails.recipe;

export const recipeDetailsSelector = {
    getRecipeDetails
}