export interface IUser {
    email: string
}

export interface AuthState {
    email: string,
    password: string,
    user: IUser;
    loading: boolean;
    error: null | string;
    isError: boolean;
    isAuth: boolean;
}

export enum UserActionTypes {
    LOGIN_SUCCESS_ACTION = 'LOGIN_SUCCESS_ACTION',
    LOGIN_ERROR_ACTION = 'LOGIN_ERROR_ACTION',
    REQUEST_LOGIN_ACTION = 'REQUEST_LOGIN_ACTION',
    SET_EMAIL_ACTION = 'SET_EMAIL_ACTION',
    SET_PASSWORD_ACTION = 'SET_PASSWORD_ACTION',
}

interface LoginSuccessAction {
    type: UserActionTypes.LOGIN_SUCCESS_ACTION
    payload: IUser
}

interface LoginErrorAction {
    type: UserActionTypes.LOGIN_ERROR_ACTION
    payload: string
}

interface REQUEST_LOGIN_ACTION {
    type: UserActionTypes.REQUEST_LOGIN_ACTION
}

interface SET_EMAIL_ACTION {
    type: UserActionTypes.SET_EMAIL_ACTION
    payload: string
}

interface SET_PASSWORD_ACTION {
    type: UserActionTypes.SET_PASSWORD_ACTION
    payload: string
}

export type UserAction = LoginSuccessAction
    | LoginErrorAction
    | REQUEST_LOGIN_ACTION
    | SET_EMAIL_ACTION
    | SET_PASSWORD_ACTION