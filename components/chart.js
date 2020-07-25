import React from "react";
import {
    VictoryChart,
    VictoryBar,
    VictoryTooltip,
    VictoryArea,
    VictoryZoomContainer,
    VictoryBrushContainer,
    VictoryAxis
} from "victory";

import _ from "lodash";
import moment from "moment";


class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.entireDomain = this.getEntireDomain(props);
        let dates = props.data.map(x => x.date);
        let minDate = new Date(Math.min.apply(null, dates));
        let maxDate = new Date(Math.max.apply(null, dates));
        this.state = {
            zoomDomain: {x: this.entireDomain.x}
        };
    }

    handleZoom(domain) {
        this.setState({zoomDomain: domain});
    }

    getData() {
        const domain = this.state.zoomDomain.x || this.entireDomain.x;
        const data = this.props.data;
        return data.filter(d => (d.date >= domain[0]) && d.date <= domain[1]);
    }

    getEntireDomain(props) {
        const {data} = props;
        return {
            y: [_.minBy(data, d => d.rain).rain, _.maxBy(data, d => d.rain).rain],
            x: [data[0].date, _.last(data).date]
        };
    }

    render() {
        let data = this.getData();
        let startDate = moment(this.state.zoomDomain.x[0]);
        let endDate = moment(this.state.zoomDomain.x[1]);
        let rain = data.map(x=>x.rain);
        return (
            <div className="Chart">
                <div id="chart-area">
                    <VictoryChart
                        width={800}
                        height={400}
                        domainPadding={{x: 25}}
                        padding={{top: 50, bottom: 50, right: 0, left: 50}}
                        domain={this.entireDomain}
                        scale={{x: "time"}}
                        containerComponent={
                            <VictoryZoomContainer
                                zoomDimension="x"
                                zoomDomain={this.state.zoomDomain}
                                minimumZoom={{x: 12 * 86400000, y: 3}}
                                onZoomDomainChange={this.handleZoom.bind(this)}
                            />
                        }
                    >
                        <VictoryBar
                            labelComponent={<VictoryTooltip flyoutPadding={10}/>}
                            data={data}
                            labels={data.map(x => `${x.rain.toFixed(2)}${this.props.unit}`)}
                            x="date"
                            y="rain"
                            style={{width: 20}}
                        />
                    </VictoryChart>
                    <VictoryChart
                        padding={{top: 0, left: 50, right: 50, bottom: 30}}
                        width={600} height={100} scale={{x: "time"}}
                        containerComponent={
                            <VictoryBrushContainer
                                brushDimension="x"
                                brushDomain={this.state.zoomDomain}

                                onBrushDomainChange={this.handleZoom.bind(this)}
                            />
                        }
                    >
                        <VictoryAxis
                            tickFormat={(x) => new Date(x).toLocaleString('default', {month: 'short'})}
                        />
                        <VictoryArea
                            data={this.props.data}
                            x="date"
                            y="rain"
                        />
                    </VictoryChart>
                </div>
                <div id="stat">
                    <table>
                        <thead>
                        <tr>
                            <th className="bold" colSpan={2}> Range Statistics</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Start Date</td>
                            <td>{startDate.format('MMM D YY')}</td>
                        </tr>
                        <tr>
                            <td>End Date</td>
                            <td>{endDate.format('MMM D YY')}</td>
                        </tr>
                        <tr>
                            <td>Total Days</td>
                            <td>{endDate.diff(startDate, 'days')}</td>
                        </tr>
                        <tr>
                            <td>Total Rainy Days</td>
                            <td>{data.length}</td>
                        </tr>
                        <tr>
                            <td>Total Rainfall</td>
                            <td>{_.sum(rain)?.toFixed(2)} {this.props.unit}</td>
                        </tr>
                        <tr>
                            <td>Maximum Rainfall</td>
                            <td>{_.max(rain)?.toFixed(2)} {this.props.unit}</td>
                        </tr>
                        <tr>
                            <td>Average Rainfall</td>
                            <td>{_.mean(rain)?.toFixed(2)} {this.props.unit}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Chart;