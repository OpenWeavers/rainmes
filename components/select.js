import React from "react";

export default function Select(props) {
    return (
        <select className="Select"
                onChange={e => props.onChange(e.target.value)}
                value={props.selected}
        >
            {props.options.map(option => {
                return <option
                    value={option.value}
                    key={option.value}
                >{option.label}</option>
            })}
        </select>
    )
}