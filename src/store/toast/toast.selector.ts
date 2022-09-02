import {ToastState} from './types';
import {RootState} from '../reducer.config';

const getPayload = (state: RootState): ToastState => {
    return state.toast;
}

export const toastSelector = {
    getPayload
}