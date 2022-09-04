/*
 * File: recipe
 * Project: BuonApp...etito-frontend
 * File Created: 04/09/22 - 13:28
 * Author: Andrea Fucci (fucciandrea01@gmail.com)
 * Copyright © 2022-2022 Andrea Fucci
 */

import {IngredientDTO} from './ingredient';
import {Type} from './type';

export interface ResponseRecipeDTO {
    id: number,
    name: string,
    preparation: string,
    isPublic: boolean,
    ingredients: IngredientDTO[],
    types: Type[],
}