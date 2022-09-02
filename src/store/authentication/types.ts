import {Role} from 'models/user';

export interface AuthenticationState {
    token: string,
    role: Role
    userId: number,
    isLoading: boolean,
    error: string
}
