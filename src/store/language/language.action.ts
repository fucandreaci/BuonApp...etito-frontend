import {createAction} from '@reduxjs/toolkit';
import {Languages} from 'i18n/i18n.service';



const setLanguage = createAction('setLanguage', (newLanguage: Languages) => {
    return {
        payload: {
            newLanguage
        }
    }
})

const languageActions = {
    setLanguage
}

export default languageActions;