import React from "react";
import {useAuth0} from '@auth0/auth0-react';
import Link from "next/link";

export default function Avatar(props) {
    let dropdown = null;
    const {logout} = useAuth0();

    if (props.dropdown) {
        dropdown = (<ul className="dropdown-menu">
            <li><Link href="/profile"><a>Manage Account</a></Link></li>
            <li><a href="#" onClick={() => logout({returnTo: 'http://localhost:3000'})}>Log out</a></li>
        </ul>)
    }
    return (
        <div className="Avatar-container" tabIndex={-1}>
            <div className="Avatar">
                <img src={props.image} alt={props.name}/>
                <div className="name">{props.name}</div>
            </div>
            {dropdown}
        </div>
    )
}