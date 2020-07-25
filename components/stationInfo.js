import React from "react";
import Select from "./select";
import Chart from "./chart";
import Card from "./card";

export default function StationInfo(props) {
    let options = props.years.map(x => ({value: x, label: x}));
    return (
        <div className="StationInfo">
            <div id="header">
                <h2>Statistics for {props.stationName}
                    <span>for the year
                        <Select
                            options={options}
                            selected={props.year}
                            onChange={props.onYearChange}
                        />
                     </span>
                </h2>

            </div>
            <div id="chart">
                <Chart data={props.data} key="rain" unit={props.unit}/>
            </div>
            <div id="stats">
                {props.stats.map((stat, i) => {
                    return <Card
                        key={i}
                        value={stat.value}
                        unit={stat.unit}
                        description={stat.description}
                    />
                })}
            </div>
        </div>
    )
}