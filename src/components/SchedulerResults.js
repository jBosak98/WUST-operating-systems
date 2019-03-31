import {connect} from "react-redux";
import React from "react";

class SchedulerResults extends React.Component {
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    const {tasks} = state.TaskReducer;
    return {tasks}
}

export default connect(mapStateToProps)(SchedulerResults)
