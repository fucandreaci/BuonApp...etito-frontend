import {i18nConfig} from './i18n.config';

const defaultLanguage = 'en';

export type Languages = 'en' | 'it' | 'es' | 'fr' | 'nl' | 'sv' | 'de';

const loadDefaultLanguage = (namespace: string, i18nTexts: any): void => {
    if (!i18nConfig.hasResourceBundle(defaultLanguage, namespace)) {
        i18nConfig.addResourceBundle(defaultLanguage, namespace, i18nTexts[defaultLanguage]);
    }
};
/**
 * Load the translation connecting them to a specific namespace. No overwrite is not allowed
 * @param namespace
 * @param i18nTexts
 */
export const loadTranslations = (namespace: string, i18nTexts: any): void => {
    loadDefaultLanguage(namespace, i18nTexts);
    if (!i18nConfig.hasResourceBundle(getCurrentLanguage(), namespace)) {
        i18nConfig.addResourceBundle(getCurrentLanguage(), namespace, i18nTexts[getCurrentLanguage()]);
    }
};
/**
 * Load the translation connecting them to a specific namespace. overwrite is allowed
 * @param namespace
 * @param i18nTexts
 */
export const overwriteTranslations = (namespace: string, i18nTexts: any) => {
    if (i18nConfig.hasResourceBundle(getCurrentLanguage(), namespace)) {
        i18nConfig.addResourceBundle(getCurrentLanguage(), namespace, i18nTexts[getCurrentLanguage()], true, true);
    } else {
        i18nConfig.addResourceBundle(getCurrentLanguage(), namespace, i18nTexts[getCurrentLanguage()]);
    }
};

export const getCurrentLanguage = (): Languages => {
    if (i18nConfig.languages && i18nConfig.languages.length) {
        return i18nConfig.languages[0] as Languages;
    }
    return defaultLanguage;
};
