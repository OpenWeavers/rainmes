import React from "react";

export default function Button(props) {
    return (
        <input
            type="button"
            value={props.content}
            onClick={props.onClick}
            className="Button"
        />
    )
}