import {RootState} from 'store/reducer.config';
import {Languages} from 'i18n/i18n.service';

const getCurrentLanguage = (state: RootState): Languages => {
    return state.language.code;
};

const languageSelector = {
    getCurrentLanguage
}

export default languageSelector;
