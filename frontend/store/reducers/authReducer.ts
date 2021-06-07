import {UserAction, UserActionTypes, AuthState} from "../../types/auth";

export const initialState: AuthState = {
    isError: false,
    email: '',
    password: '',
    isAuth: false,
    loading: false,
    error: null,
    user: null
}

export const authReducer = (state = initialState, action: UserAction): AuthState => {
    switch (action.type) {
        case UserActionTypes.LOGIN_ERROR_ACTION:
            return {...state, loading: false, error: action.payload, isError: true}
        case UserActionTypes.LOGIN_SUCCESS_ACTION:
            return {...state, loading: false, user: action.payload, isAuth: true, isError: false, error: null}
        case UserActionTypes.REQUEST_LOGIN_ACTION:
            return {...state, loading: true}
        case UserActionTypes.SET_PASSWORD_ACTION:
            return {...state, password: action.payload}
        case UserActionTypes.SET_EMAIL_ACTION:
            return {...state, email: action.payload}
        default:
            return state
    }
}