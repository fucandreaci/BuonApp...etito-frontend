import {createReducer} from '@reduxjs/toolkit';
import languageActions from './language.action';
import {LanguageState} from './types';

const languageState: LanguageState = {
    code: 'en'
};

export const languageReducer = {
    language: createReducer(languageState, (builder) => {
            builder.addCase(languageActions.setLanguage, (state, action) => {
                return {
                    code: action.payload.newLanguage
                }
            });
        }
    )
}
