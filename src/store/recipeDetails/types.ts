import {ResponseRecipeDTO} from 'models/recipe';

export interface RecipeDetailsState {
    recipe: ResponseRecipeDTO,
    isLoading: boolean,
}
