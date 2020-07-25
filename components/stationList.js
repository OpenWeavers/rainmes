import React from "react";
import StationLabel from "./stationLabel";

export default function StationList(props) {
    return (
        <div className="StationList">
            {props.stations.map((station, i) => <StationLabel
                key={station.name + station.place}
                name={station.name}
                place={station.place}
                selected={props.selectIndex === i}
                onClick={() => props.onClick(i)}
            />)}
        </div>
    )
}