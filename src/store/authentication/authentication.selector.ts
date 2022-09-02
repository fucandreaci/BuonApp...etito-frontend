import {RootState} from '../reducer.config';

const getUser = (state: RootState) => state.authentication;

export const authenticationSelector = {
    getUser
}