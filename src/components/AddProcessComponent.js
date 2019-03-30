import * as React from "react";
import {Button, withStyles} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {connect} from "react-redux";
import addProcess from "../actions/ProcessActions";
import PropTypes from "prop-types";




class AddProcessComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            arrivalTime: 0,
            burstTime: 0
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    }

    handleAdd = (event) => {
        const { dispatch } = this.props;
        const { arrivalTime, burstTime } = this.state;
        dispatch(addProcess({
            arrivalTime,
            burstTime
        }));
    };

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    };

    handleStart = (event) => {
        console.log("start")
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
                    onChange={this.handleChange('arrivalTime')}
                />
                <br/>
                <TextField
                    label="Burst time"
                    type="number"
                    onChange={this.handleChange('burstTime')}
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
AddProcessComponent.propTypes = {
    classes: PropTypes.object.isRequired
};


export default connect()(withStyles(styles)(AddProcessComponent));
