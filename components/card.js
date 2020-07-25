import React from "react";

export default function Card(props) {
    return (
        <div className="Card">
            <div className="value">
                {props.value}
                <span className="unit">
                    {props.unit}
                </span>
            </div>
            <div className="description">
                {props.description}
            </div>
        </div>
    )
}