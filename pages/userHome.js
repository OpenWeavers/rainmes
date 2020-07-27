import React from "react";

import Avatar from "../components/avatar";
import NavBar from "../components/navbar";
import StationInfo from "../components/stationInfo";

export default class UserHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            error: null,
            userInfo: null,
            stationLoaded: false,
            stationData: null,
        }
    }

    getStationData = async (stationId, year) => {
        this.setState({
            stationLoaded: false
        });
        try {
            let response = await fetch('/api/getStationData', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    stationId: stationId,
                    year: year
                })
            });
            let stationData = await response.json();
            this.setState({
                stationLoaded: true,
                stationData: stationData.data,
                year: year
            });
        } catch (error) {
            this.setState({
                stationLoaded: true,
                error: error
            })
        }
    };

    async componentDidMount() {
        try {
            let userInfo = await fetch("/api/getUserInfo", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    token: "r232jfu"
                })
            });
            userInfo = await userInfo.json();
            userInfo = userInfo.data;
            this.setState({
                isLoaded: true,
                userInfo: userInfo
            });
            await this.getStationData(this.state.userInfo.stationId, this.state.userInfo.years[0]);
        } catch (e) {
            this.setState({
                isLoaded: true,
                error: e
            })
        }
    }

    render() {
        let {
            isLoaded,
            error,
            stationLoaded,
            stationData,
            userInfo
        } = this.state;
        let main_content;
        if (error) {
            main_content =  (
                <div>{error.message}</div>
            )
        } else if (!isLoaded) {
            main_content =  (
                <div>Loading...</div>
            )
        } else {
            if (!stationLoaded) {
                main_content =(
                    <div>Loading station Data</div>
                )
            }
            else {
                main_content = (
                    <StationInfo
                        data={stationData.rain}
                        unit={userInfo.unit}
                        stationName={userInfo.stationId.split(":")[0]}
                        years={userInfo.years}
                        stats={stationData.stats}
                        onYearChange = {year=> this.getStationData(userInfo.stationId, year)}
                    />
                )
            }
        }
        return (
            <div className="Page">
                <NavBar>
                    <a href="#" className="active">Dashboard</a>
                    <a href="#">Compare</a>
                    <a href="#">Data Entry</a>
                    <Avatar image="https://i.pravatar.cc/300" name="Username" dropdown/>
                </NavBar>
                <div className="main-content">
                    <div className="UserHome">
                        {main_content}
                    </div>
                </div>
            </div>
        )
    }
}