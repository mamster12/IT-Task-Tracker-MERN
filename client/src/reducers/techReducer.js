import {
    GET_TECHS,
    ADD_TECH,
    DELETE_TECH,
    SET_LOADING,
    TECHS_ERROR,
    SET_CURRENT_TECH,
    CLEAR_CURRENT_TECH
} from '../actions/types';

const initialState = {
    techs: null,
    current: null,
    loading: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TECHS:
            return {
                ...state,
                techs: action.payload,
                loading: false
            };

        case ADD_TECH:
            return {
                ...state,
                techs: [...state.techs, action.payload],
                loading: false
            };
        case SET_CURRENT_TECH:
            return {
                ...state,
                current: action.payload
            };
        case CLEAR_CURRENT_TECH:
            return {
                ...state,
                current: null
            };
        case DELETE_TECH:
            return {
                ...state,
                techs: state.techs.filter(
                    (tech) => tech._id !== action.payload
                ),
                loading: false
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case TECHS_ERROR:
            console.error(action.payload);
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        default:
            return state;
    }
};
