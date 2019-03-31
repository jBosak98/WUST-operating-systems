import {connect} from "react-redux";
import React from "react";
import Chart from "react-google-charts";

class SchedulerResults extends React.Component {
    constructor(props){
        super(props);

    }
    render(){
        const { results } = this.props;
        console.log(results);
        if (results.length === 0){
            return(<div></div>)
        };
        let data =  [['Algorithms', 'SSTF', 'FCFS', 'scan']];
        results.map(row => (
           data.push([' ', row.sstf, row.fcfs, row.scan])
        ));
        return(
            <div>
                <Chart
                    width={'500px'}
                    height={'300px'}
                    chartType="Bar"
                    loader={<div>Loading Chart</div>}
                    data={data}
                    options={{
                        // Material design options
                        chart: {
                            title: 'Disk scheduling algorithms',
                            subtitle: 'simulation of algorithms FCFS, SSTF, SCAN, C-SCAN, EDF, FD-SCAN.',
                        },
                    }}
                    // For tests
                    rootProps={{ 'data-testid': '2' }}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {tasks, results} = state.TaskReducer;
    // console.log("results");
    // console.log(results);
    return {tasks, results}
}

export default connect(mapStateToProps)(SchedulerResults)
