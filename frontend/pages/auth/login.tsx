import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import Auth, {LoginProps} from "../../components/Auth/Auth"

const Login = () => {
    const credentials: LoginProps = {
        email: 'test',
        password: 'test'
    }

    return (
        <MainLayout>
            <Auth email={credentials.email} password={credentials.password}/>
        </MainLayout>
    );
};

export default Login;