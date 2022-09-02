import {createAsyncThunk} from '@reduxjs/toolkit';
import {RequestLoginDTO} from 'models/authentication';
import {authService} from 'api/auth.service';
import {AxiosError} from 'axios';
import {errorParse} from 'utils/errorParse';

export const enum AUTHENTICATION_ACTION {
    SIGN_IN = 'SIGN_IN',
}

const signInAction = createAsyncThunk(AUTHENTICATION_ACTION.SIGN_IN, async (params: RequestLoginDTO, thunkAPI) => {
    try {
        const response = await authService.login(params);
        return response.data;
    } catch (err) {
        // TODO: handle error
        const e = errorParse.getException(err as AxiosError);
        console.log(e);
        throw err;
    }
});

export const authenticationAction = {
    signInAction
}
