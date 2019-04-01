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
            deadline: 0
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleStart = this.handleStart.bind(this);
        this.randomGenerate = this.randomGenerate.bind(this);

    }

    handleAdd(event){
        const { dispatch } = this.props;
        const { arrivalTime, blockAddress, deadline } = this.state;
        dispatch(addTask({
            arrivalTime: arrivalTime < 1 ? 1: arrivalTime,
            blockAddress: blockAddress < 0 ? 0 : blockAddress,
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

    randomGenerate(){
        const { dispatch } = this.props;
        const arrivalTime = Math.floor(Math.random() * 100);
        dispatch(addTask({
            arrivalTime,
            blockAddress: Math.floor(Math.random() * 100),
            deadline: Math.floor(arrivalTime + (100-arrivalTime+1)*Math.random()),
            waitingTime: 0,
        }));
    }
    render(){
        const { classes } = this.props;
        return(
            <div className={classes.root}>
               <div className={classes.insideRoot}>


                <TextField
                    className={classes.marginTop}
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
                   <Button
                       variant="contained"
                       onClick={this.randomGenerate}
                   >
                       random generate
                   </Button>
               </div>
            </div>
        )
    }

}
const styles = {

    root: {
        display: "inline-block",
        width: "300px",
        height: "300px"

    },
    insideRoot: {
        display: "inline-block"
    },
    marginTop: {
        marginTop: "15px"
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
