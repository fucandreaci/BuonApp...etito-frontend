import React, {useEffect} from 'react';
import {loadTranslations} from 'i18n/i18n.service';
import {useTranslation} from 'react-i18next';
import enTexts from './i18n/en.json';
import itTexts from './i18n/it.json';
import deTexts from './i18n/de.json';
import esTexts from './i18n/es.json';
import frTexts from './i18n/fr.json';
import nlTexts from './i18n/nl.json';
import svTexts from './i18n/sv.json';
import {toast, ToastContainer, ToastPosition} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './toastr.scss'
import {useDispatch, useSelector} from 'react-redux';
import {toastSelector} from 'store/toast/toast.selector';
import {toastActions} from 'store/toast/toast.action';
import {ToastOptions, ToastType} from 'store/toast/types';

interface ToastrProps{
    position?: ToastPosition
    autoClose?: number
    hideProgressBar?: boolean
    newestOnTop?: boolean
    rtl?: boolean
}

const componentClassName = 'toastr';

export const Toastr = (props: ToastrProps) => {
    const i18nTexts = {
        'en': enTexts,
        'it': itTexts,
        'de': deTexts,
        'es': esTexts,
        'fr': frTexts,
        'nl': nlTexts,
        'sv': svTexts,
    };
    loadTranslations('toastr', i18nTexts);
    const {t} = useTranslation('toastr');

    const dispatch = useDispatch();
    const payload = useSelector(toastSelector.getPayload);

    useEffect(() => {
        let timeoutId;
        if (payload.show) {
            createToast(payload.message, payload.type, payload.options);
            timeoutId = setTimeout(() => {
                dispatch(toastActions.hideToast());
            }, payload.options?.autoClose || 5000);
        }

        return () => {
            clearTimeout(timeoutId);
        }
    }, [payload.show]);


    const createToast = (message: string, type: ToastType, options?: ToastOptions) => {
        const toastOptions = {
            position: options?.position || "top-right",
            autoClose: options?.autoClose || 5000,
            hideProgressBar: options?.hideProgressBar || false,
            closeOnClick:  true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        }

        switch (type) {
            case ToastType.SUCCESS:
                toast.success(message, toastOptions);
                break;

            case ToastType.BACKEND_ERROR:
                const error = t('toastr:error:' + message);
                toast.error(error, toastOptions);
                break;

            case ToastType.ERROR:
                toast.error(message, toastOptions);
                break;

            case ToastType.INFO:
                toast.info(message, toastOptions);
                break;

            case ToastType.WARNING:
                toast.warning(message, toastOptions);
                break;
        }
    }

    return (
        <div className={`${componentClassName}`}>
            <ToastContainer
                position={props.position}
                autoClose={props.autoClose}
                hideProgressBar={props.hideProgressBar}
                newestOnTop={props.newestOnTop}
                closeOnClick
                rtl={props.rtl}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
};
