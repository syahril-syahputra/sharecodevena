import * as ACTION_TYPES from '../actions/action_type';

export const initialState = {
    isAuth: false,
    username: '',
    token: '',
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AuthReducer = (
    state = initialState,
    action: { type: string; username: string; token: string }
) => {
    switch (action.type) {
        case ACTION_TYPES.LOGIN:
            return {
                ...state,
                isAuth: true,
                username: action.username,
                token: action.token,
            };
        case ACTION_TYPES.LOGOUT:
            return {
                ...state,
                isAuth: false,
                username: '',
                token: '',
            };
        default:
            return state;
    }
};
