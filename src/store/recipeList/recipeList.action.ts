import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {recipeService} from 'api/recipe.service';
import {errorParse} from '../../utils/errorParse';
import {AxiosError} from 'axios';
import {toastActions} from '../toast/toast.action';
import {ToastType} from '../toast/types';

export const enum RECIPE_LIST_ACTION {
    FETCH_MY_RECIPES = 'FETCH_MY_RECIPES',
}
const fetchMyRecipes = createAsyncThunk(RECIPE_LIST_ACTION.FETCH_MY_RECIPES, async (params: { page?: number }, thunkAPI) => {
    try {
        const response = await recipeService.getAll(params.page)
        return response.data;
    } catch (err) {
        const e = errorParse.getException(err as AxiosError);

        console.log(e)
        thunkAPI.dispatch(toastActions.showToast({
            message: e.domain + ':' + e.message,
            type: ToastType.BACKEND_ERROR
        }))
        throw err;
    }
});

export const recipeListAction = {
    fetchMyRecipes
}