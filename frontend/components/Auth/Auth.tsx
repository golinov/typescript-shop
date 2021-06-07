import React from 'react';
import {useActions} from "../../hooks/useActions";
import {Button, Grid, TextField} from "@material-ui/core";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const Auth: React.FC = () => {
    const {error, password, email, isError} = useTypedSelector(state => state.auth)
    const {handleLogin, handleEmailChange, handlePasswordChange} = useActions()

    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            <TextField
                error={isError}
                type="email"
                onChange={handleEmailChange}
            />
            <TextField
                error={isError}
                helperText={error}
                type="password"
                onChange={handlePasswordChange}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={() => handleLogin(email, password)}
            >
                Login
            </Button>
        </Grid>
    );
};

export default Auth;