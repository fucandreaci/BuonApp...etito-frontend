/*
 * File: authentication
 * Project: BuonApp...etito-frontend
 * File Created: 02/09/22 - 12:57
 * Author: Andrea Fucci (fucciandrea01@gmail.com)
 * Copyright © 2022-2022 Andrea Fucci
 */

import {Role} from './user';

export interface RequestLoginDTO {
    email: string,
    password: string
}

export interface ResponseLoginDTO {
    token: string,
    role: Role
    userId: number
}