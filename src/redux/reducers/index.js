import {combineReducers} from "redux";

import userPositions from './getFormUserPositions';
import userData from './getUserData';
import users from './getUsers';
import authToken from './userToken';
import registrationUser from './registrationUser';

export const rootReducer = () =>
    combineReducers({
        userPositions,
        userData,
        users,
        authToken,
        registrationUser,
    });
