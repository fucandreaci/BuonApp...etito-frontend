import {ResponseRecipeDTO} from 'models/recipe';

export interface RecipeListState {
    recipes: ResponseRecipeDTO[],
    isLoading: boolean,
}
