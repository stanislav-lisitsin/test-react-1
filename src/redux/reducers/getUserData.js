import action from '../constants/getUserData';

const initialState = {
    userData: {},
    userDataError: null,
};

const getUserDataReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case action.GET_USER_DATA_SUCCESS:
            return {
                ...state,
                userData: payload,
                userDataError: null,
            };
        case action.GET_USER_DATA_ERROR:
            return {
                ...state,
                userData: {},
                userDataError: payload,
            };
        default:
            return state;
    }
}

export default getUserDataReducer;