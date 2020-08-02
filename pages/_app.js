import React from "react";
import '../styles/App.scss'

export default ({ Component, pageProps }) => (
    <Auth0Provider
        domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
        clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
        redirectUri={process.env.NEXT_PUBLIC_REDIRECT_URI}
    >
        <Component {...pageProps} />
    </Auth0Provider>
)