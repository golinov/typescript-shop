import React from 'react';
import Navbar from "../components/Navbar";
import {Container} from "@material-ui/core";

const MainLayout: React.FC = ({children}) => {
    return (
        <>
            <Navbar/>
            <Container style={{ margin: '90px auto' }}>
                {children}
            </Container>
        </>
    );
};

export default MainLayout;
