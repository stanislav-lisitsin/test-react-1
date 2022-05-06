import {all} from "redux-saga/effects";

import getUsers from './getUsers';
import userPositions from './getFormUserPositions';
import userToken from './userToken';
import registrationUser from './registrationUser';

export default function* rootSaga() {
    yield all([
        getUsers(),
        userPositions(),
        userToken(),
        registrationUser(),
    ]);
}
