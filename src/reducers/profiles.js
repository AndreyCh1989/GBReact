import {PROFILES_REQUEST, PROFILES_LOAD_SUCCESS, PROFILES_REQUEST_FAILURE} from 'actions/profiles';

const initialState = {
    loading: false,
    error: false,
    entries: [],
};

export const profilesReducer = (state = initialState, action) => {
    switch(action.type){
        case PROFILES_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            };

        case PROFILES_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                entries: action.payload,
            };

        case PROFILES_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            };

        default:
            return state;
    }
};
