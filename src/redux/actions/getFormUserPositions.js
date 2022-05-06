import action from '../constants/getFormUserPositions';

export const getUserPositionsForm = () => ({
    type: action.GET_FORM_USER_POSITIONS,
});

export const getFormUserPositionsSuccess = (successData) => ({
    type: action.GET_FORM_USER_POSITIONS_SUCCESS,
    payload: successData
});

export const getFormUserPositionsError = (errorData) => ({
    type: action.GET_FORM_USER_POSITIONS_ERROR,
    payload: errorData
});