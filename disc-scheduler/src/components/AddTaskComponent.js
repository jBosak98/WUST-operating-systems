import * as React from "react";
import {Button, withStyles} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {addTask, runScheduler} from "../actions/TasksActions";




class AddTaskComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            arrivalTime: 0,
            blockAddress: 0,
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleStart = this.handleStart.bind(this);

    }

    handleAdd(event){
        const { dispatch } = this.props;
        const { arrivalTime, blockAddress, deadline } = this.state;
        dispatch(addTask({
            arrivalTime: arrivalTime < 1 ? 1: arrivalTime,
            blockAddress: blockAddress < 1 ? 1 : blockAddress,
            deadline: deadline < 1 ? 1 : deadline,
            waitingTime: 0,
        }));
    };

    handleChange(input, e) {
        this.setState({
            [input]: e.target.value
        });
    };
    //
    handleStart(){
        const { dispatch, tasks } = this.props;
        dispatch(runScheduler(tasks));
    };

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions)
    }
    render(){
        const { classes } = this.props;
        const { isCollapsed } = this.state;
        return(
            <div className={isCollapsed ?  classes.tightRoot: classes.wideRoot}>
                <TextField
                    label="Arrival time"
                    type="number"
                    onChange={event => {this.handleChange('arrivalTime', event)}}
                />
                <br/>
                <TextField
                    label="Block address"
                    type="number"
                    onChange={event => {this.handleChange('blockAddress', event)}}
                />
                <br/>
                <TextField
                    label="Deadline"
                    type="number"
                    onChange={event => {this.handleChange('deadline', event)}}
                />
                <br/>
                <br/>
                <Button
                    variant="contained"
                    onClick={this.handleAdd}
                >
                    ADD
                </Button>
                <Button
                    variant="contained"
                    onClick={this.handleStart}
                >
                    Start
                </Button>
            </div>
        )
    }

    updateWindowDimensions() {
        const w = window.innerWidth;
        const isCollapsed = w <= 960;
        this.setState({
            width: w,
            isCollapsed
        });
    }
}
const styles = {
    wideRoot: {
        position: "fixed",
        display: "inline-block",
        margin: "auto",
        marginTop: "50px",
        left: "50%",
        transform: "translateX(-50%)"
    },
    tightRoot: {

        position: "inherit",
        display: "inline-block",
        margin: "auto",
        marginTop: "50px",

    }
};
AddTaskComponent.propTypes = {
    classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    const {tasks} = state.TaskReducer;
    return {tasks}
};

export default connect(mapStateToProps)(withStyles(styles)(AddTaskComponent));
