import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import Auth from "../../components/Auth/Auth"
import {useTypedSelector} from "../../hooks/useTypedSelector";

const Login = () => {
    const {error, isAuth} = useTypedSelector(state => state.auth)
    return (
        <MainLayout>
            <Auth/>
        </MainLayout>
    );
};

export default Login;