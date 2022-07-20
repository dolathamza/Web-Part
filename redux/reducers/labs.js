import * as actionTypes from '../types';

export const initialState = {
    labs: [],
    labsLoading: false,
    fetched: false
};

// ===========================|| USER REDUCER ||=========================== //

const labsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LABS_LOADING:
            return {
                ...state,
                labsLoading: action.payload
            }
        case actionTypes.GET_ALL_LABS:
            return {
                ...state,
                labsLoading: false,
                labs: action.payload,
                fetched: true
            }

        default:
            return state;
    }
};

export default labsReducer;