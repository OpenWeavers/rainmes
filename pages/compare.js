import React from "react";
import classNames from 'classnames';

import Avatar from "../components/avatar";
import NavBar from "../components/navbar";
import StationInfo from "../components/stationInfo";
import StationList from "../components/stationList";
import Button from "../components/button";
import Card from "../components/card";

export default class Compare extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectIndex: null,
            expanded: false,
            isLoaded: false,
            stationList: [],
            totalStats: [],
            error: null,
            stationLoaded: false,
            stationData: null,
            year: null
        };
    }

    async componentDidMount() {
        try {
            let [stationList, totalStats] = await Promise.all(
                [
                    "/api/getStationList",
                    "/api/getTotalStats"
                ].map(async endpoint => {
                    let response = await fetch(endpoint);
                    return await response.json()
                })
            );
            this.setState({
                isLoaded: true,
                stationList: stationList.data,
                totalStats: totalStats.data
            });
        } catch (e) {
            this.setState({
                error: e
            });
        }
    }

    toggleList = () => {
        const old_state = this.state;
        this.setState({expanded: !old_state.expanded})
    };

    getStationData = (stationId, year) => {
        this.setState({
            stationLoaded: false
        });
        fetch('/api/getStationData', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                stationId: stationId,
                year: year
            })
        })
            .then(res => res.json())
            .then((response) => {
                this.setState({
                    stationLoaded: true,
                    stationData: response.data,
                    year: year
                });
            }, (error) => {
                this.setState({
                    stationLoaded: true,
                    error: error
                })
            });
    };

    stationChanged = (idx) => {
        let station = this.state.stationList[idx];
        let stationId = station.name + ":" + station.place;
        this.getStationData(stationId, station.years[0]);
        this.setState({
            selectIndex: idx,
            expanded: false
        });
    };

    yearChanged = (year) => {
        let {selectIndex} = this.state;
        let station = this.state.stationList[selectIndex];
        let stationId = station.name + station.place;
        this.getStationData(stationId, year);
    };

    render() {
        const {
            error,
            isLoaded,
            stationList,
            selectIndex,
            stationLoaded,
            totalStats
        } = this.state;
        if (error) {
            return (
                <div>{error.message}</div>
            )
        } else if (!isLoaded) {
            return (
                <div>Loading...</div>
            )
        } else {
            let main_content = (
                <div id="right" className="totalStats">
                    {totalStats.map(stat=><Card
                        value={stat.value}
                        unit={stat.unit}
                        description={stat.description}
                    />)}
                </div>
            );
            if (selectIndex !== null) {
                let station = stationList[selectIndex];
                main_content = stationLoaded ? (
                    <StationInfo
                        data={this.state.stationData.rain}
                        unit="cm"
                        stationName={this.state.stationData.name}
                        years={station.years}
                        stats={this.state.stationData.stats}
                        year={this.state.year}
                        onYearChange={this.yearChanged}
                    />
                ) : (<div>Loading Station Info...</div>);
            }
            return (
                <div className="Page">
                    <NavBar>
                        <a href="#">Dashboard</a>
                        <a href="#" className="active">Compare</a>
                        <a href="#">Data Entry</a>
                        <Avatar image="https://i.pravatar.cc/300" name="Username" dropdown/>
                    </NavBar>
                    <div className="main-content">
                        <div className="Compare">

                            <div id="left" className={classNames({"active": this.state.expanded})}>
                                <StationList
                                    stations={stationList}
                                    onClick={i => this.stationChanged(i)}
                                    selectIndex={this.state.selectIndex}
                                />
                            </div>

                            <div id="right">
                                <div id="selector">
                                    <Button
                                        content="Select station"
                                        onClick={this.toggleList}
                                    />
                                </div>
                                {main_content}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}