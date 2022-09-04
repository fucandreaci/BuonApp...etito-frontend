/*
 * File: utils
 * Project: BuonApp...etito-frontend
 * File Created: 04/09/22 - 21:13
 * Author: Andrea Fucci (fucciandrea01@gmail.com)
 * Copyright © 2022-2022 Andrea Fucci
 */

const getJWTHeader = (): string => {
    const prefix = 'Bearer ';
    return localStorage.getItem('token') ? prefix + localStorage.getItem('token') : '';
}

export const utils = {
    getJWTHeader
}