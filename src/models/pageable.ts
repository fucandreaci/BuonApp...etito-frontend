/*
 * File: pageable
 * Project: BuonApp...etito-frontend
 * File Created: 04/09/22 - 13:31
 * Author: Andrea Fucci (fucciandrea01@gmail.com)
 * Copyright © 2022-2022 Andrea Fucci
 */

interface pageable {
    offset: number,
    count: number,
    sort: {
        sorted: boolean,
        unsorted: boolean,
        empty: boolean
    },
    pageSize: number,
    pageNumber: number,
    unpaged: boolean,
    paged: boolean
}

export interface PageableResponseDTO<T> {
    data: T[],
}