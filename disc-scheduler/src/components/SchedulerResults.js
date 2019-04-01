import {connect} from "react-redux";
import React from "react";
import Chart from "react-google-charts";

class SchedulerResults extends React.Component {

    render(){
        const { results } = this.props;
        if (results === undefined){
            return(<div></div>)
        };
        let data =  [['Algorithms', 'SSTF', 'FCFS', 'SCAN', 'C-SCAN', 'EDF', 'FD-SCAN']];
           data.push([
               'time based on head movements',
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
