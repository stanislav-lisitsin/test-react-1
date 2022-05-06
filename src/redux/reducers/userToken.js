import action from '../constants/userToken';


const initialState = {
    authToken: '',
    loginError: null,
};

const userTokenReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case action.GET_USER_TOKEN_SUCCESS:
            return {
                ...state,
                authToken: payload,
                loginError: null,
            };
        case action.GET_USER_TOKEN_ERROR:
            return {
                ...state,
                authToken: '',
                loginError: payload,
            };
        default:
            return state;
    }
}

export default userTokenReducer;