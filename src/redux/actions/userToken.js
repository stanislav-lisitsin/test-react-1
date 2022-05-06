import action from '../constants/userToken';

export const getUserToken = () => ({
    type: action.GET_USER_TOKEN,
});

export const getUserTokenSuccess = (successData) => ({
    type: action.GET_USER_TOKEN_SUCCESS,
    payload: successData
});

export const getUserTokenError = (errorData) => ({
    type: action.GET_USER_TOKEN_ERROR,
    payload: errorData
});