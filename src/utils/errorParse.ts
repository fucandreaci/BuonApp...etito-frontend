/*
 * File: errorParse
 * Project: BuonApp...etito-frontend
 * File Created: 02/09/22 - 16:30
 * Author: Andrea Fucci (fucciandrea01@gmail.com)
 * Copyright © 2022-2022 Andrea Fucci
 */

import {AxiosError} from 'axios';
import {ExceptionManager} from '../models/exceptionManager';

const getException = (err: AxiosError): ExceptionManager => {
    return err.response?.data as ExceptionManager;
}

export const errorParse = {
    getException
}