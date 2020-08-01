import React from "react";
import {useRouter} from 'next/router'

import {useAuth0} from '@auth0/auth0-react';
import Avatar from "./avatar";
import * as classNames from "classnames";

export default function NavBar(props) {
    const {isAuthenticated, isLoading, loginWithRedirect, user} = useAuth0();
    const {route} = useRouter();
    return (
        <div className="NavBar">
            <nav>
                <input type="checkbox" id="nav-toggle"/>
                <label htmlFor="nav-toggle" className="burger-menu">
                    <svg viewBox="0 0 100 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 2H100" stroke="white" strokeWidth="3"/>
                        <path d="M0 62H100" stroke="white" strokeWidth="3"/>
                        <path d="M0 32H100" stroke="white" strokeWidth="3"/>
                    </svg>
                </label>
                <img src="/logo.svg" className="logo" alt="logo"/>
                <div className="menu">
                    <a
                        href="/"
                        className={classNames({"active": route==="/"})}
                    >
                        Dashboard
                    </a>
                    {!isLoading && isAuthenticated ? (
                        <>
                            <a
                                href="/userHome"
                               className={classNames({"active": route==="/userHome"})}
                            >
                                My Station
                            </a>
                            <a href="#">Data Entry</a>
                            <Avatar image={user.picture} name={user.name} dropdown/>
                        </>
                    ) : (
                        isLoading ? (
                                <span>...</span>
                        ) : (
                            <>
                                <a onClick={loginWithRedirect}>Login</a>
                            </>)
                    )}
                </div>
            </nav>
        </div>
    )
}