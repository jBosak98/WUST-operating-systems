import {connect} from "react-redux";
import React from "react";
import Chart from "react-google-charts";
import TableBody from "./ShowTasks";

class SchedulerResults extends React.Component {
    constructor(props){
        super(props);

    }
    render(){
        const { results } = this.props;
        console.log(results);
        if (results === []){
            return(<div></div>)
        };

        let data = results.map(row => (
           [' ', 5, 5, 5]
        ));
        return(
            <div>
                {/*<Chart*/}
                    {/*width={'500px'}*/}
                    {/*height={'300px'}*/}
                    {/*chartType="Bar"*/}
                    {/*loader={<div>Loading Chart</div>}*/}
                    {/*data={[*/}
                        {/*['Year', 'SSTF', 'FCFS', 'Profit'],*/}

                        {/*[' ', results.sstf, results.fcfs, 0],*/}
                    {/*]}*/}
                    {/*options={{*/}
                        {/*// Material design options*/}
                        {/*chart: {*/}
                            {/*title: 'Company Performance',*/}
                            {/*subtitle: 'Sales, Expenses, and Profit: 2014-2017',*/}
                        {/*},*/}
                    {/*}}*/}
                    {/*// For tests*/}
                    {/*rootProps={{ 'data-testid': '2' }}*/}
                {/*/>*/}
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
