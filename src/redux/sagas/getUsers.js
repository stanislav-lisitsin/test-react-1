import {fork, put, select, takeLatest} from "redux-saga/effects";
import axios from "axios";
import action from 'redux/constants/getUsers';
import {GET_USERS} from 'config/api';

import {getAllUsersSuccess, getAllUsersError} from "redux/actions/getUsers";

function* watchGetAllUsers() {
    yield takeLatest(action.GET_USERS, handlerGetUserPositions)
}

function* handlerGetUserPositions({payload}) {

    try {

        const getUsers = yield axios({
            method: "GET",
            url: GET_USERS + `?page=${payload.page}&count=6`,
            accept: "application/json",
        })
            .then(response => response.data);

        yield put(getAllUsersSuccess(getUsers));

    } catch (error) {
        console.log(error.message);
        yield put(getAllUsersError(error.message));
    }

}


function* watchShowMoreUsers() {
    yield takeLatest(action.SHOW_MORE_USERS, handlerShowMoreUsers)
}

function* handlerShowMoreUsers({payload}) {

    try {
        const currentUsersList = yield select(state => state.users.users);

        const getUsers = yield axios({
            method: "GET",
            url: GET_USERS + `?page=${payload.page}&count=6`,
            accept: "application/json",
        })
            .then(response => response.data);

        const concatUsers = currentUsersList.users.concat(getUsers.users);
        const newStateUsersData = {...getUsers, users: concatUsers};
        yield put(getAllUsersSuccess(newStateUsersData));


    } catch (error) {
        console.log(error.message);
        yield put(getAllUsersError(error.message));
    }

}

export default function* getUsers() {
    yield fork(watchGetAllUsers);
    yield fork(watchShowMoreUsers);
}
