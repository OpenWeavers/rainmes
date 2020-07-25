import React from "react";

export default function NavBar(props) {
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
                    {props.children}
                </div>
            </nav>
        </div>
    )
}