import {fork, put, select, takeLatest} from "redux-saga/effects";
import axios from "axios";
import action from '../constants/registrationUser';
import {GET_USERS} from 'config/api';


import {registrationNewUserSuccess, registrationNewUserError} from "redux/actions/registrationUser";
import {getUsers} from "redux/actions/getUsers";

function* watchCreateNewUser() {
    yield takeLatest(action.REGISTRATION_NEW_USER, handlerCreateNewUser)
}

function* handlerCreateNewUser({payload,actions}) {

    console.log(payload)

    try {
        const currentAuthToken = yield select(state => state.authToken.authToken);

        const formData = new FormData();

        formData.append('name', payload.name);
        formData.append('email', payload.email);
        formData.append('phone', payload.phone);
        formData.append('position_id', payload.position_id);
        formData.append('photo', payload.photo);


        const createUser = yield axios({
            method: "POST",
            url: GET_USERS,
            accept: "application/json",
            data: formData,
            headers: {
                'Token': currentAuthToken,
                "Content-Type": "multipart/form-data"
            }
        }).then(response => response.data);

        console.log(createUser)

        if (createUser.success) {
            yield put(registrationNewUserSuccess(createUser,));

            yield put(getUsers({
                page: 1,
            }));

            actions.successActions();
        }

    } catch (error) {
        console.log(error.message);
        console.log(error.response);
        yield put(registrationNewUserError(error.response.data));
    }

}


export default function* RegistrationUser() {
    yield fork(watchCreateNewUser);

}
