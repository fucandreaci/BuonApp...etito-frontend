import {i18Mfe} from './i18n.config';

const defaultLanguage = 'en';

export type Languages = 'en' | 'it' | 'es' | 'fr' | 'nl' | 'sv' | 'de';

const loadDefaultLanguage = (namespace: string, i18nTexts: any): void => {
    if (!i18Mfe.hasResourceBundle(defaultLanguage, namespace)) {
        i18Mfe.addResourceBundle(defaultLanguage, namespace, i18nTexts[defaultLanguage]);
    }
};
/**
 * Load the translation connecting them to a specific namespace. No overwrite is not allowed
 * @param namespace
 * @param i18nTexts
 */
export const loadTranslations = (namespace: string, i18nTexts: any): void => {
    loadDefaultLanguage(namespace, i18nTexts);
    if (!i18Mfe.hasResourceBundle(getCurrentLanguage(), namespace)) {
        i18Mfe.addResourceBundle(getCurrentLanguage(), namespace, i18nTexts[getCurrentLanguage()]);
    }
};
/**
 * Load the translation connecting them to a specific namespace. overwrite is allowed
 * @param namespace
 * @param i18nTexts
 */
export const overwriteTranslations = (namespace: string, i18nTexts: any) => {
    if (i18Mfe.hasResourceBundle(getCurrentLanguage(), namespace)) {
        i18Mfe.addResourceBundle(getCurrentLanguage(), namespace, i18nTexts[getCurrentLanguage()], true, true);
    } else {
        i18Mfe.addResourceBundle(getCurrentLanguage(), namespace, i18nTexts[getCurrentLanguage()]);
    }
};

export const getCurrentLanguage = (): Languages => {
    if (i18Mfe.languages && i18Mfe.languages.length) {
        return i18Mfe.languages[0] as Languages;
    }
    return defaultLanguage;
};
