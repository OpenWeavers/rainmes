import React from "react";

export default function Avatar(props) {
    let dropdown = null;
    if (props.dropdown) {
        dropdown = (<ul className="dropdown-menu">
            <li><a href="#">Manage Account</a></li>
            <li><a href="#">Log out</a></li>
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