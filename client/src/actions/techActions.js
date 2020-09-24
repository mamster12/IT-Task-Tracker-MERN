import {
    GET_TECHS,
    ADD_TECH,
    DELETE_TECH,
    SET_LOADING,
    TECHS_ERROR,
    SET_CURRENT_TECH,
    CLEAR_CURRENT_TECH
} from './types';

// Get techs from server
export const getTechs = () => async (dispatch) => {
    try {
        setLoading();

        const res = await fetch('/techs');
        const data = await res.json();

        dispatch({
            type: GET_TECHS,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.statusText
        });
    }
};

// Add Technician to Server
export const addTech = (tech) => async (dispatch) => {
    try {
        setLoading();

        const res = await fetch('/techs', {
            method: 'POST',
            body: JSON.stringify(tech),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();

        dispatch({
            type: ADD_TECH,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.statusText
        });
    }
};

// Delete a tech from server
export const deleteTech = (id) => async (dispatch) => {
    try {
        setLoading();

        await fetch(`/techs/${id}`, {
            method: 'DELETE'
        });

        dispatch({
            type: DELETE_TECH,
            payload: id
        });
    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.statusText
        });
    }
};

// Set Curent Log
export const setCurrentTech = (tech) => {
    return {
        type: SET_CURRENT_TECH,
        payload: tech
    };
};

// Clear current log
export const clearCurrentTech = () => {
    return {
        type: CLEAR_CURRENT_TECH
    };
};

// Set Loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};
