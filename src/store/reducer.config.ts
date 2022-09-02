import {combineReducers} from 'redux';
import {languageReducer} from './language/language.reducer';
import {AppAction} from './types';
import {authenticationReducer} from './authentication/authentication.reducer';

const appReducer = combineReducers({
    ...languageReducer,
    ...authenticationReducer
});

export const RESET_STORE = 'RESET_STORE';
export const rootReducer = (state: any, action: any) => {
    if (action.type === RESET_STORE) {
        state = undefined;
    }

    return appReducer(state, action);
};

export const resetStore = (): AppAction => ({
    type: RESET_STORE
});

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;
