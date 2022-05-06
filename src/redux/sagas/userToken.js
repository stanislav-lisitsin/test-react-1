import {fork, put, takeLatest} from "redux-saga/effects";
import axios from "axios";
import action from 'redux/constants/userToken';
import {GET_TOKEN} from 'config/api';


import {getUserTokenSuccess, getUserTokenError} from "redux/actions/userToken";


function* watchGetToken() {
    yield takeLatest(action.GET_USER_TOKEN, getToken)
}

function* getToken() {

    try {

        // fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
        //     .then(function (response) {
        //         return response.json();
        //     })
        //     .then(function (data) {
        //         console.log(data);
        //     }).catch(function (error) { // proccess network errors
        //
        // });

        const getTokenUser = yield axios({
            method: "GET",
            url: GET_TOKEN,
            accept: "application/json",
        })
            .then(response => response.data);

        // console.log(getTokenUser)

        if (getTokenUser.success){
            yield put(getUserTokenSuccess(getTokenUser.token));
        }

    } catch (error) {
        console.log(error.message);
        yield put(getUserTokenError(error.message));
    }

}


export default function* AuthSagas() {
    yield fork(watchGetToken);

}
