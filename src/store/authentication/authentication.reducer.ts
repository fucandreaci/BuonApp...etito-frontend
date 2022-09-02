import {createReducer} from '@reduxjs/toolkit';
import {AuthenticationState} from './types';
import {Role} from 'models/user';
import {authenticationAction} from './authentication.action';

const initialState: AuthenticationState = {
    token: '',
    role: Role.USER,
    userId: 0,
    isLoading: false,
    isLogged: false
};

export const authenticationReducer = {
    authentication: createReducer(initialState, (builder) => {
        builder.addCase(authenticationAction.signInAction.pending, (state, action) => {
            return {
                ...state,
                isLoading: true,
                isLogged: false
            }
        });

        builder.addCase(authenticationAction.signInAction.fulfilled, (state, action) => {
            return {
                ...state,
                token: action.payload.token,
                role: action.payload.role,
                userId: action.payload.userId,
                isLoading: false,
                isLogged: true
            }
        });

        builder.addCase(authenticationAction.signInAction.rejected, (state, action) => {
            return {
                ...state,
                isLoading: false,
                isLogged: false
            }
        });

        builder.addDefaultCase((state, action) => {
            return state;
        });
    })
}
