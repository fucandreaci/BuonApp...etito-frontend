import {createAsyncThunk} from '@reduxjs/toolkit';
import {recipeService} from 'api/recipe.service';
import {errorParse} from 'utils/errorParse';
import {AxiosError} from 'axios';
import {toastActions} from '../toast/toast.action';
import {ToastType} from '../toast/types';

export const enum RECIPE_DETAILS_ACTION {
    FETCH_RECIPE_DETAILS = 'FETCH_RECIPE_DETAILS',
}

const fetchRecipe = createAsyncThunk(RECIPE_DETAILS_ACTION.FETCH_RECIPE_DETAILS, async (params: {id: number}, thunkAPI) => {
    try {
        const response = await recipeService.get(params.id)
        return response.data;
    } catch (err) {
        console.log('err', err)
        const e = errorParse.getException(err as AxiosError);

        console.log(e)
        thunkAPI.dispatch(toastActions.showToast({
            message: e.domain + ':' + e.message,
            type: ToastType.BACKEND_ERROR
        }))
        throw err;
    }
});

export const recipeDetailsAction = {
    fetchRecipe
}
