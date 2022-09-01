import {Action, combineReducers} from '@reduxjs/toolkit';
import {counterSlice} from '../features/counter/counterSlice';
import {languageReducer} from './language/language.reducer';

const appReducer = combineReducers({
    ...languageReducer
})

export const RESET_STORE = 'RESET_STORE';
export const rootReducer = (state: any, action: any) => {
    if (action.type === RESET_STORE) {
        state = undefined;
    }
    return appReducer(state, action);
};

export const resetStore = (): Action => ({
    type: RESET_STORE
});

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;
