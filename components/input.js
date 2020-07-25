import React from "react";

export default function Input(props) {
    return (
        <input
            type="text"
            placeholder={props.placeholder}
            className="Input"
        />
    )
}