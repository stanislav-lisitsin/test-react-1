import action from '../constants/getUserData';

export const getUserData = () => ({
    type: action.GET_USER_DATA,
});

export const getUserDataSuccess = (successData) => ({
    type: action.GET_USER_DATA_SUCCESS,
    payload: successData
});

export const getUserDataError = (errorData) => ({
    type: action.GET_USER_DATA_ERROR,
    payload: errorData
});