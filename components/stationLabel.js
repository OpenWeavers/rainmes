import React from "react";
import classNames from "classnames";

export default function StationLabel(props) {
    return (
        <div className={classNames("StationLabel", {"selected": props.selected})}
             tabIndex={0}
             onClick={props.onClick}
             onKeyDown={e => e.key === 'Enter' ? props.onClick() : null}
        >
            <span className="StationName">{props.name}</span>
            <span className="StationPlace">{props.place}</span>
            <svg width="26" height="40" viewBox="0 0 26 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 38L23 20.7087L1 2" stroke="black" strokeOpacity="0.79" strokeWidth="3"/>
            </svg>
        </div>
    )
}