/*
 * File: auth.service
 * Project: BuonApp...etito-frontend
 * File Created: 02/09/22 - 12:59
 * Author: Andrea Fucci (fucciandrea01@gmail.com)
 * Copyright © 2022-2022 Andrea Fucci
 */

import {RequestLoginDTO, ResponseLoginDTO} from 'models/authentication';
import axios, {AxiosResponse} from 'axios';

const rest = 'auth';

const login = (loginDTO: RequestLoginDTO): Promise<AxiosResponse<ResponseLoginDTO>> => {
    return axios.post<ResponseLoginDTO>(rest + '/login', loginDTO);
}

export const authService = {
    login
}