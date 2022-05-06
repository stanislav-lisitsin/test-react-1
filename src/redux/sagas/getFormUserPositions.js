import {fork, put, takeLatest} from "redux-saga/effects";
import axios from "axios";
import action from 'redux/constants/getFormUserPositions';
import {GET_POSITIONS} from 'config/api';


import {getFormUserPositionsSuccess, getFormUserPositionsError} from "redux/actions/getFormUserPositions";


function* watchGetUserPositions() {
    yield takeLatest(action.GET_FORM_USER_POSITIONS, handlerGetUserPositions)
}

function* handlerGetUserPositions() {

    // console.log('handlerGetUserPositions')


    try {

        const getUserPositions= yield axios({
            method: "GET",
            url: GET_POSITIONS,
            accept: "application/json",
        })
            .then(response => response.data);

        // console.log("getUserPositions = ß",getUserPositions)

        yield put(getFormUserPositionsSuccess(getUserPositions));


    } catch (error) {
        console.log(error.message);
        yield put(getFormUserPositionsError(error.message));
    }

}

export default function* UserPositions() {
    yield fork(watchGetUserPositions);
}
