import {PROFILE_LOAD} from 'actions/profiles';

import {profiles} from '../data/profile';

const initialState = {
    loading: false,
    entries: [],
};

export const profilesReducer = (state = initialState, action) => {
    switch(action.type){
        case PROFILE_LOAD:
            return {
                ...state,
                entries: profiles,
            };

        default:
            return state;
    }
}
