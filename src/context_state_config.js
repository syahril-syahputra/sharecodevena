import React, { useReducer } from 'react';
import Context from './utils/context';
import * as ACTIONS from './store/actions/actions';
import * as AuthReducer from './store/reducers/auth_reducer';
import App from './App';

const ContextState = () => {
    const [stateAuthReducer, dispatchAuthReducer] = useReducer(
        AuthReducer.AuthReducer,
        AuthReducer.initialState
    );

    const handleLogin = (data) => {
        dispatchAuthReducer(ACTIONS.login(data));
    };

    const handleLogout = () => {
        dispatchAuthReducer(ACTIONS.logout());
    };

    return (
        <Context.Provider
            value={{
                authState: stateAuthReducer.isAuth,
                usernameState: stateAuthReducer.username,
                tokenState: stateAuthReducer.token,
                handleUserLogin: (username) => handleLogin(username),
                handleUserLogout: () => handleLogout(),
            }}
        >
            <App />
        </Context.Provider>
    );
};

export default ContextState;
