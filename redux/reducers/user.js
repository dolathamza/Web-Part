import * as actionTypes from '../types';

export const initialState = {
    user: null,
    isAuthenticated: false,
    fetched: false,
    loading: true,
    error: false,
    up_loading: false,


    profile: null,
    profileLoading: false,
};

// ===========================|| USER REDUCER ||=========================== //

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
                fetched: true,
                loading: false,
            }
        case actionTypes.GET_USER:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
                fetched: true,
                loading: false,
            }
        case actionTypes.Loading:
            return {
                ...state,
                loading: action.payload
            }
        case actionTypes.logout:
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                fetched: true,
                loading: false,
            }
        case actionTypes.register_User:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
                fetched: true,
                loading: false,
            }
        case actionTypes.UPDATE_USER:
            return {
                ...state,
                user: action.payload
            }
        case actionTypes.UPDATE_PASS :
            return {
                ...state,
                update: action.payload.update,
                up_loading: action.payload.up_loading,
                error: action.payload.error
            }
        case actionTypes.UP_LOADING:
            return {
                ...state,
                up_loading: action.payload
            }

        case actionTypes.GET_USER_PROFILE:
            return {
                ...state,
                profileLoading: false,
                profile: action.payload
            }
        case actionTypes.USER_PROFILE_LOADING:
            return {
                ...state,
                profileLoading: action.payload
            }
        default:
            return state;
    }
};

export default userReducer;