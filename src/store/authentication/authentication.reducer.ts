import {createReducer} from '@reduxjs/toolkit';
import {AuthenticationState} from './types';
import {Role} from 'models/user';
import {authenticationAction} from './authentication.action';

const initialState: AuthenticationState = {
    token: '',
    role: Role.USER,
    userId: 0,
    isLoading: false,
    error: ''
};

export const authenticationReducer = createReducer(initialState, (builder) => {

    builder.addCase(authenticationAction.signInAction.pending, (state, action) => {
        return {
            ...state,
            isLoading: true,
            error: ''
        }
    });

    builder.addCase(authenticationAction.signInAction.fulfilled, (state, action) => {
        return {
            ...state,
            token: action.payload.token,
            role: action.payload.role,
            userId: action.payload.userId,
            isLoading: false,
            error: ''
        }
    });

    builder.addCase(authenticationAction.signInAction.rejected, (state, action) => {
        return {
            ...state,
            isLoading: false,
            error: action.error.message || 'Error'
        }
    });

    builder.addDefaultCase((state, action) => {
        return state;
    });
});
