import {createReducer} from '@reduxjs/toolkit';
import {ToastState, ToastType} from './types';
import {toastActions} from './toast.action';

const initialState: ToastState = {
    message: '',
    show: false,
    type: ToastType.SUCCESS
};

export const toastReducer = {
    toast: createReducer(initialState, (builder) => {
        builder.addCase(toastActions.showToast, (state, action) => {
            return {
                show: true,
                message: action.payload.message,
                type: action.payload.type,
                options: action.payload.options
            }
        });

        builder.addCase(toastActions.hideToast, (state, action) => {
            return {
                ...initialState,
                show: false
            }
        });

    })
}
