import {connect} from "react-redux";
import React from "react";
import Chart from "react-google-charts";

class SchedulerResults extends React.Component {

    render(){
        const { results } = this.props;
        // if (results === undefined){
        //     return(<div></div>)
        // };
        let data =  [['Algorithms', 'SSTF', 'FCFS', 'SCAN', 'C-SCAN', 'EDF', 'FD-SCAN']];
        if (results!== undefined) {
            data.push([
                'time based on \nhead movements',
                results.sstf.headMovement,
                results.fcfs.headMovement,
                results.scan.headMovement,
                results.cscan.headMovement,
                results.edf.headMovement,
                results.fdscan.headMovement
            ]);
            data.push([
                'task finished',
                results.sstf.taskDone,
                results.fcfs.taskDone,
                results.scan.taskDone,
                results.cscan.taskDone,
                results.edf.taskDone,
                results.fdscan.taskDone
            ]);
            data.push([
                'idle time',
                results.sstf.idleTime,
                results.fcfs.idleTime,
                results.scan.idleTime,
                results.cscan.idleTime,
                results.edf.idleTime,
                results.fdscan.idleTime
            ]);
        }
        else {
            data.push(['time based on \nhead movements', 0, 0, 0, 0, 0, 0]);
            data.push(['task finished', 0, 0, 0, 0, 0, 0]);
            data.push(['idle time', 0, 0, 0, 0, 0, 0]);
        }
        return(
            <div>
                <Chart
                    width={'500px'}
                    height={'300px'}
                    chartType="Bar"
                    loader={<div>Loading Chart</div>}
                    data={data}
                    options={{
                        chart: {
                            title: 'Disk scheduling algorithms',
                            subtitle: 'simulation of algorithms FCFS, SSTF, SCAN, C-SCAN, EDF, FD-SCAN.',
                        },
                    }}
                    rootProps={{ 'data-testid': '2' }}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {tasks, results} = state.TaskReducer;
    return {tasks, results}
}

export default connect(mapStateToProps)(SchedulerResults)
