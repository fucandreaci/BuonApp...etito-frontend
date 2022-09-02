/*
 * File: auth.service
 * Project: BuonApp...etito-frontend
 * File Created: 02/09/22 - 12:59
 * Author: Andrea Fucci (fucciandrea01@gmail.com)
 * Copyright © 2022-2022 Andrea Fucci
 */

import {RequestLoginDTO, RequestSignupDTO, ResponseLoginDTO, ResponseSignupDTO} from 'models/authentication';
import axios, {AxiosResponse} from 'axios';

const rest = 'auth';

const login = (loginDTO: RequestLoginDTO): Promise<AxiosResponse<ResponseLoginDTO>> => {
    return axios.post<ResponseLoginDTO>(rest + '/login', loginDTO);
}

const signup = (signupDTO: RequestSignupDTO): Promise<AxiosResponse<ResponseSignupDTO>> => {
    return axios.post<ResponseSignupDTO>(rest + '/signup', signupDTO);
}

export const authService = {
    login,
    signup
}