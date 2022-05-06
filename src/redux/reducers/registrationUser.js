import action from '../constants/registrationUser';

const initialState = {
    getResponse: {},
    registrationStatus: false,
    spinnerLoading: false
};

const registrationUserReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case action.REGISTRATION_NEW_USER:
            return {
                ...state,
                getResponse: {},
                registrationStatus: false,
                spinnerLoading: true
            };
        case action.REGISTRATION_NEW_USER_SUCCESS:
            return {
                ...state,
                getResponse: payload,
                registrationStatus: true,
                spinnerLoading: false
            };
        case action.REGISTRATION_NEW_USER_ERROR:
            return {
                ...state,
                getResponse: payload,
                registrationStatus: false,
                spinnerLoading: false
            };
        case action.CLEAR_DATA:
            return {
                ...state,
                getResponse: {},
                registrationStatus: false,
                spinnerLoading: false
            };
        default:
            return state;
    }
}

export default registrationUserReducer;