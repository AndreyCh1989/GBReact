export const PROFILES_REQUEST = 'PROFILES_REQUEST';
export const PROFILES_LOAD_SUCCESS = 'PROFILES_LOAD_SUCCESS';
export const PROFILES_REQUEST_FAILURE = 'PROFILES_REQUEST_FAILURE';

export const profilesRequestAction = () => ({
    type: PROFILES_REQUEST,
});

export const profilesLoadSuccessAction = (data) => ({
    type: PROFILES_LOAD_SUCCESS,
    payload: data,
});

export const profilesRequestFailureAction = (error) => ({
    type: PROFILES_REQUEST_FAILURE,
    payload: error,
});

export const profilesLoadAction = () => {
    return async (dispatch) => {
        try {
            dispatch(profilesRequestAction());
            const result = await fetch('http://localhost:3000/profiles');
            dispatch(profilesLoadSuccessAction(await result.json()));
        } catch(error){
            dispatch(profilesRequestFailureAction(error));
        }
    };
};

