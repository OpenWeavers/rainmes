import React from "react";

import Avatar from "../components/avatar";
import NavBar from "../components/navbar";
import StationInfo from "../components/stationInfo";

const rainData = [
    {
        "date": "4/2/19",
        "rain": 0.635
    },
    {
        "date": "4/7/19",
        "rain": 0.7112
    },
    {
        "date": "4/8/19",
        "rain": 1.143
    },
    {
        "date": "4/13/19",
        "rain": 0.5334
    },
    {
        "date": "4/23/19",
        "rain": 1.4732
    },
    {
        "date": "4/27/19",
        "rain": 0.7874
    },
    {
        "date": "4/29/19",
        "rain": 1.5748
    },
    {
        "date": "5/7/19",
        "rain": 2.667
    },
    {
        "date": "5/19/19",
        "rain": 0.9398
    },
    {
        "date": "5/20/19",
        "rain": 1.4478
    },
    {
        "date": "5/22/19",
        "rain": 0.3556
    },
    {
        "date": "5/24/19",
        "rain": 0.3048
    },
    {
        "date": "5/25/19",
        "rain": 0.3048
    },
    {
        "date": "6/3/19",
        "rain": 2.3876
    },
    {
        "date": "6/5/19",
        "rain": 2.413
    },
    {
        "date": "6/10/19",
        "rain": 0.9652
    },
    {
        "date": "6/11/19",
        "rain": 1.2446
    },
    {
        "date": "6/12/19",
        "rain": 1.8034
    },
    {
        "date": "6/13/19",
        "rain": 4.064
    },
    {
        "date": "6/14/19",
        "rain": 1.9812
    },
    {
        "date": "6/15/19",
        "rain": 0.4064
    },
    {
        "date": "6/18/19",
        "rain": 1.0922
    },
    {
        "date": "6/19/19",
        "rain": 2.413
    },
    {
        "date": "6/20/19",
        "rain": 0.254
    },
    {
        "date": "6/21/19",
        "rain": 1.143
    },
    {
        "date": "6/22/19",
        "rain": 0.762
    },
    {
        "date": "6/24/19",
        "rain": 1.524
    },
    {
        "date": "6/25/19",
        "rain": 1.778
    },
    {
        "date": "6/26/19",
        "rain": 0.889
    },
    {
        "date": "6/27/19",
        "rain": 2.667
    },
    {
        "date": "6/28/19",
        "rain": 0.3048
    },
    {
        "date": "6/29/19",
        "rain": 2.3368
    },
    {
        "date": "6/30/19",
        "rain": 2.3876
    },
    {
        "date": "7/1/19",
        "rain": 1.7272
    },
    {
        "date": "7/2/19",
        "rain": 2.3622
    },
    {
        "date": "7/3/19",
        "rain": 1.8288
    },
    {
        "date": "7/4/19",
        "rain": 3.556
    },
    {
        "date": "7/5/19",
        "rain": 5.7658
    },
    {
        "date": "7/6/19",
        "rain": 6.858
    },
    {
        "date": "7/7/19",
        "rain": 3.302
    },
    {
        "date": "7/8/19",
        "rain": 3.6322
    },
    {
        "date": "7/9/19",
        "rain": 9.3218
    },
    {
        "date": "7/10/19",
        "rain": 2.032
    },
    {
        "date": "7/11/19",
        "rain": 0.4318
    },
    {
        "date": "7/12/19",
        "rain": 0.381
    },
    {
        "date": "7/14/19",
        "rain": 1.778
    },
    {
        "date": "7/15/19",
        "rain": 0.3302
    },
    {
        "date": "7/18/19",
        "rain": 1.397
    },
    {
        "date": "7/19/19",
        "rain": 1.397
    },
    {
        "date": "7/20/19",
        "rain": 4.064
    },
    {
        "date": "7/21/19",
        "rain": 2.9718
    },
    {
        "date": "7/22/19",
        "rain": 1.778
    },
    {
        "date": "7/23/19",
        "rain": 1.778
    },
    {
        "date": "7/24/19",
        "rain": 1.778
    },
    {
        "date": "7/25/19",
        "rain": 0.3048
    },
    {
        "date": "7/26/19",
        "rain": 3.3782
    },
    {
        "date": "7/27/19",
        "rain": 0.4572
    },
    {
        "date": "7/28/19",
        "rain": 2.1082
    },
    {
        "date": "7/29/19",
        "rain": 2.286
    },
    {
        "date": "7/30/19",
        "rain": 1.8288
    },
    {
        "date": "7/31/19",
        "rain": 0.8128
    },
    {
        "date": "8/1/19",
        "rain": 1.27
    },
    {
        "date": "8/2/19",
        "rain": 1.6002
    },
    {
        "date": "8/3/19",
        "rain": 3.6576
    },
    {
        "date": "8/4/19",
        "rain": 10.414
    },
    {
        "date": "8/5/19",
        "rain": 12.065
    },
    {
        "date": "8/6/19",
        "rain": 12.192
    },
    {
        "date": "8/7/19",
        "rain": 24.13
    },
    {
        "date": "8/8/19",
        "rain": 28.956
    },
    {
        "date": "8/9/19",
        "rain": 32.512
    },
    {
        "date": "8/10/19",
        "rain": 12.319
    },
    {
        "date": "8/11/19",
        "rain": 1.524
    },
    {
        "date": "8/12/19",
        "rain": 1.9558
    },
    {
        "date": "8/13/19",
        "rain": 1.27
    },
    {
        "date": "8/14/19",
        "rain": 4.3688
    },
    {
        "date": "8/15/19",
        "rain": 0.4318
    },
    {
        "date": "8/16/19",
        "rain": 2.667
    },
    {
        "date": "8/17/19",
        "rain": 0.5842
    },
    {
        "date": "8/18/19",
        "rain": 0.127
    },
    {
        "date": "8/19/19",
        "rain": 2.032
    },
    {
        "date": "8/20/19",
        "rain": 0.2286
    },
    {
        "date": "8/21/19",
        "rain": 0.254
    },
    {
        "date": "8/22/19",
        "rain": 0.889
    },
    {
        "date": "8/23/19",
        "rain": 0.889
    },
    {
        "date": "8/24/19",
        "rain": 0.9144
    },
    {
        "date": "8/26/19",
        "rain": 0.8636
    },
    {
        "date": "8/27/19",
        "rain": 0.508
    },
    {
        "date": "8/28/19",
        "rain": 0.762
    },
    {
        "date": "8/29/19",
        "rain": 1.016
    },
    {
        "date": "8/30/19",
        "rain": 0.3048
    },
    {
        "date": "8/31/19",
        "rain": 1.7018
    },
    {
        "date": "9/1/19",
        "rain": 2.2098
    },
    {
        "date": "9/2/19",
        "rain": 3.556
    },
    {
        "date": "9/3/19",
        "rain": 3.048
    },
    {
        "date": "9/4/19",
        "rain": 6.604
    },
    {
        "date": "9/5/19",
        "rain": 5.842
    },
    {
        "date": "9/6/19",
        "rain": 8.001
    },
    {
        "date": "9/7/19",
        "rain": 0.635
    },
    {
        "date": "9/8/19",
        "rain": 5.7404
    },
    {
        "date": "9/9/19",
        "rain": 1.0668
    },
    {
        "date": "9/10/19",
        "rain": 0.4826
    },
    {
        "date": "9/12/19",
        "rain": 1.397
    },
    {
        "date": "9/14/19",
        "rain": 0.6604
    },
    {
        "date": "9/18/19",
        "rain": 1.27
    },
    {
        "date": "9/21/19",
        "rain": 1.778
    },
    {
        "date": "9/25/19",
        "rain": 3.683
    },
    {
        "date": "9/26/19",
        "rain": 0.8382
    },
    {
        "date": "9/27/19",
        "rain": 0.2794
    },
    {
        "date": "10/4/19",
        "rain": 0.381
    },
    {
        "date": "10/5/19",
        "rain": 0.9144
    },
    {
        "date": "10/6/19",
        "rain": 2.9718
    },
    {
        "date": "10/8/19",
        "rain": 1.3208
    },
    {
        "date": "10/9/19",
        "rain": 2.9718
    },
    {
        "date": "10/10/19",
        "rain": 0.635
    },
    {
        "date": "10/11/19",
        "rain": 2.286
    },
    {
        "date": "10/13/19",
        "rain": 1.905
    },
    {
        "date": "10/15/19",
        "rain": 1.4478
    },
    {
        "date": "10/17/19",
        "rain": 1.9558
    },
    {
        "date": "10/18/19",
        "rain": 2.6416
    },
    {
        "date": "10/19/19",
        "rain": 2.1844
    },
    {
        "date": "10/21/19",
        "rain": 6.731
    },
    {
        "date": "10/22/19",
        "rain": 0.8636
    },
    {
        "date": "10/23/19",
        "rain": 2.921
    },
    {
        "date": "10/24/19",
        "rain": 2.3876
    },
    {
        "date": "10/25/19",
        "rain": 8.509
    },
    {
        "date": "10/26/19",
        "rain": 5.334
    },
    {
        "date": "10/27/19",
        "rain": 0.254
    },
    {
        "date": "10/30/19",
        "rain": 0.508
    },
    {
        "date": "10/31/19",
        "rain": 2.921
    },
    {
        "date": "11/9/19",
        "rain": 2.921
    },
    {
        "date": "11/11/19",
        "rain": 0.6858
    },
    {
        "date": "11/16/19",
        "rain": 0.4318
    },
    {
        "date": "12/1/19",
        "rain": 1.016
    },
    {
        "date": "12/2/19",
        "rain": 0.4318
    },
    {
        "date": "12/9/19",
        "rain": 0.381
    }
].map(data => ({date: new Date(data.date).getTime(), rain: data.rain}));

const stats = [
    {
        value: 150,
        unit: "in",
        description: "Rainfall till now"
    }, {
        value: 10,
        unit: "in",
        description: "Current month rainfall"
    }, {
        value: 30,
        unit: "in",
        description: "Maximum daily rainfall"
    }, {
        value: 160,
        unit: "in",
        description: "Maximum yearly rainfall"
    }, {
        value: 2019,
        description: "Year of maximum rainfall"
    }, {
        value: 2,
        unit: "yrs",
        description: "Data recorded"
    }];

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
        let main_content = null;
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