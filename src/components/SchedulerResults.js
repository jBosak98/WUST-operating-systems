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
    const {processes} = state.ProcessReducer;
    return {processes}
}

export default connect(mapStateToProps)(SchedulerResults)
