import * as actionTypes from '../types';

export const initialState = {
    diets: [],
    dietsLoading: false,
    fetched: false
};

// ===========================|| USER REDUCER ||=========================== //

const diestsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DIETS_LOADING:
            return {
                ...state,
                dietsLoading: action.payload
            }
        case actionTypes.GET_ALL_DIETS:
            return {
                ...state,
                dietsLoading: false,
                diets: action.payload,
                fetched: true
            }

        default:
            return state;
    }
};

export default diestsReducer;