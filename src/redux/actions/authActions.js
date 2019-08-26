import * as types from "./actionTypes";
import * as authApi from "../../api/authApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";
import { history } from '../../helpers/history';

export const authActions = {
    login,
    logout
};

function login(username, password) {
    return dispatch => {
        dispatch(beginApiCall());
        dispatch(request({ username, password }))
        authApi.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(apiCallError(error));
                    dispatch(failure(error));
                }
            );
    };

    function request(user) { return { type: types.LOGIN_REQUEST, user } }
    function success(user) { return { type: types.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: types.LOGIN_FAILURE, error } }
}

function logout() {
    authApi.logout();
    return { type: types.LOGOUT };
}