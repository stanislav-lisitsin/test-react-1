import action from '../constants/getFormUserPositions';

const initialState = {
    positions: {},
    positionsError: null,
};
const getFormUserPositionsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case action.GET_FORM_USER_POSITIONS_SUCCESS:
            return {
                ...state,
                positions: payload,
                positionsError: null,
            };
        case action.GET_FORM_USER_POSITIONS_ERROR:
            return {
                ...state,
                positions: {},
                positionsError: payload,
            };
        default:
            return state;
    }
}

export default getFormUserPositionsReducer;