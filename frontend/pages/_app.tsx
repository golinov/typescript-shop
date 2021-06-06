import React, {FC} from 'react';
import {AppProps} from 'next/app';
import {wrapper} from '../store';
import { createGlobalStyle } from 'styled-components'
import '../utils/axios'

const GlobalStyle = createGlobalStyle`
    .product-card {
        &__picture {
            object-fit: contain;
        }
    }
`

const WrappedApp: FC<AppProps> = ({Component, pageProps}) => (
    <>
        <GlobalStyle />
        <Component {...pageProps} />
    </>
);

export default wrapper.withRedux(WrappedApp);