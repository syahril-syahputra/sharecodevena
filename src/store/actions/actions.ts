import * as ACTION_TYPES from '../actions/action_type';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const login = (data: any) => {
    return {
        type: ACTION_TYPES.LOGIN,
        username: data.username,
        token: data.token,
    };
};

export const logout = () => {
    return {
        type: ACTION_TYPES.LOGOUT,
    };
};
