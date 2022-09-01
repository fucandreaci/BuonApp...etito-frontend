import i18next from 'i18next';
import enCommon from './common-translations/en.json';
import itCommon from './common-translations/it.json';
import deCommon from './common-translations/de.json';
import esCommon from './common-translations/es.json';
import frCommon from './common-translations/fr.json';
import nlCommon from './common-translations/nl.json';
import svCommon from './common-translations/sv.json';

/**
 * initializer of the translate module
 */
export const i18nConfig = i18next.createInstance({
    lng: 'en',
    fallbackLng: 'en',
    resources: {},
    interpolation: {
        escapeValue: false,
        format: (value, format, lng) => {
            if(format === 'uppercase'){
                return value.toUpperCase();
            }
            if(format === 'lowercase'){
                return value.toLowerCase();
            }
            if(format === 'capitalize'){
                const firstChar = value.charAt(0);
                return firstChar.toUpperCase() + value.slice(1).toLowerCase()
            }
            return value
        }
    },
    react: {
        transSupportBasicHtmlNodes: true
    },
});

export const initAppTranslator = () => {
    i18nConfig.init();
    i18nConfig.addResourceBundle('en', 'common', enCommon);
    i18nConfig.addResourceBundle('it', 'common', itCommon);
    i18nConfig.addResourceBundle('de', 'common', deCommon);
    i18nConfig.addResourceBundle('es', 'common', esCommon);
    i18nConfig.addResourceBundle('fr', 'common', frCommon);
    i18nConfig.addResourceBundle('nl', 'common', nlCommon);
    i18nConfig.addResourceBundle('sv', 'common', svCommon);

};
export const setUserSelectedLanguage = (language: string) => {
    i18nConfig.changeLanguage(language);
};
