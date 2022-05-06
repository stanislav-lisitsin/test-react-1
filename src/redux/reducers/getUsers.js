import action from '../constants/getUsers';

const initialState = {
    users: {},
    usersError: null,
    spinnerLoading: false
};


const getUsersReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case action.SHOW_MORE_USERS:
            return {
                ...state,
                spinnerLoading: true
            };
        case action.GET_USERS_SUCCESS:
            return {
                ...state,
                users: payload,
                usersError: null,
                spinnerLoading: false
            };
        case action.GET_USERS_ERROR:
            return {
                ...state,
                users: {},
                usersError: payload,
                spinnerLoading: false
            };
        default:
            return state;
    }
}

export default getUsersReducer;