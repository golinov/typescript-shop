import {Dispatch} from "redux";
import {IUser, UserAction, UserActionTypes} from "../../types/auth";
import axios from "axios";
import jwtDecode from "jwt-decode";
import React from "react";

export const handleLogin = (email, password) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.REQUEST_LOGIN_ACTION})
            const response = await axios.post('auth/login', {email, password})
            localStorage.setItem('token', response.data.token)
            const user: IUser = jwtDecode(response.data.token)
            console.log(user)
            dispatch({type: UserActionTypes.LOGIN_SUCCESS_ACTION, payload: user})
        } catch (e) {
            dispatch({
                type: UserActionTypes.LOGIN_ERROR_ACTION,
                payload: 'Incorrect email or password'
            })
        }
    }
}

export const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    return (dispatch: Dispatch<UserAction>) => {
        dispatch({type: UserActionTypes.SET_EMAIL_ACTION, payload: e.target.value})
    }
}

export const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    return (dispatch: Dispatch<UserAction>) => {
        dispatch({type: UserActionTypes.SET_PASSWORD_ACTION, payload: e.target.value})
    }
}