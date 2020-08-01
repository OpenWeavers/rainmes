import React from "react";
import '../styles/App.scss'
import { Auth0Provider } from '@auth0/auth0-react';

export default ({ Component, pageProps }) => (
    <Auth0Provider
        domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
        clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
        redirectUri="http://localhost:3000/userHome"
    >
        <Component {...pageProps} />
    </Auth0Provider>
)