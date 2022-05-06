import action from '../constants/getUsers';

export const getUsers = (userData) => ({
    type: action.GET_USERS,
    payload:userData
});

export const getAllUsersSuccess = (successData) => ({
    type: action.GET_USERS_SUCCESS,
    payload: successData
});

export const getAllUsersError = (errorData) => ({
    type: action.GET_USERS_ERROR,
    payload: errorData
});

export const showMoreUsers = (userData) => ({
    type: action.SHOW_MORE_USERS,
    payload: userData
});