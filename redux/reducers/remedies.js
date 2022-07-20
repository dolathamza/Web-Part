import * as actionTypes from '../types';

export const initialState = {
    remedies: [],
    remediesLoading: false,
    fetched: false
};

// ===========================|| USER REDUCER ||=========================== //

const remediesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REMEDIES_LOADING:
            return {
                ...state,
                remediesLoading: action.payload
            }
        case actionTypes.GET_ALL_REMEDIES:
            return {
                ...state,
                remediesLoading: false,
                remedies: action.payload,
                fetched: true
            }

        default:
            return state;
    }
};

export default remediesReducer;