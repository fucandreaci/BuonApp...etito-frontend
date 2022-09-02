/*
 * File: exceptionManager
 * Project: BuonApp...etito-frontend
 * File Created: 02/09/22 - 16:29
 * Author: Andrea Fucci (fucciandrea01@gmail.com)
 * Copyright © 2022-2022 Andrea Fucci
 */

export interface ExceptionManager {
    code: number,
    domain: string,
    message: string,
    status: string,
    timestamp: Date
}