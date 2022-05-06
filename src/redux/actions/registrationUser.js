import action from '../constants/registrationUser';

export const registrationNewUser = (userData,actions) => ({
    type: action.REGISTRATION_NEW_USER,
    payload: userData,
    actions
});

export const registrationNewUserSuccess = (successData) => ({
    type: action.REGISTRATION_NEW_USER_SUCCESS,
    payload: successData
});

export const registrationNewUserError = (errorData) => ({
    type: action.REGISTRATION_NEW_USER_ERROR,
    payload: errorData
});
export const clearDataUserRegistration = () => ({
    type: action.REGISTRATION_NEW_USER_ERROR,
});