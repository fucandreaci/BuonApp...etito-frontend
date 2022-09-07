/*
 * File: recipe.service
 * Project: BuonApp...etito-frontend
 * File Created: 04/09/22 - 13:36
 * Author: Andrea Fucci (fucciandrea01@gmail.com)
 * Copyright © 2022-2022 Andrea Fucci
 */

import axios, {AxiosResponse} from 'axios';
import {PageableResponseDTO} from 'models/pageable';
import {ResponseRecipeDTO} from 'models/recipe';
import {utils} from 'utils/utils';

const rest = 'recipe';

const getAll = (page?: number): Promise<AxiosResponse<PageableResponseDTO<ResponseRecipeDTO>>> => {
    return axios.get<PageableResponseDTO<ResponseRecipeDTO>>(rest + '/' + (page ? '?page=' + page : ''), {
        headers: {
            Authorization: utils.getJWTHeader()
        }
    });
}

const get = (id: number): Promise<AxiosResponse<ResponseRecipeDTO>> => {
    return axios.get<ResponseRecipeDTO>(rest + '/' + id, {
        headers: {
            Authorization: utils.getJWTHeader()
        }
    });
}

export const recipeService = {
    getAll,
    get
}