import React from "react";
import {connect} from "react-redux";
import Table from '@material-ui/core/Table';
import Paper from "@material-ui/core/es/Paper/Paper";
import TableHead from "@material-ui/core/es/TableHead/TableHead";
import TableCell from "@material-ui/core/es/TableCell/TableCell";
import TableBody from "@material-ui/core/es/TableBody/TableBody";
import TableRow from "@material-ui/core/es/TableRow/TableRow";
import { withStyles} from "@material-ui/core";
import PropTypes from 'prop-types';


class ShowProcesses extends React.Component{

    render() {
        const { processes } = this.props;
        const { classes } = this.props;
        if (processes.length < 1 || processes === undefined){
            return <div/>
        }
        return(
            <div className={classes.root}>
                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>id</TableCell>
                                <TableCell align="right">arrival time</TableCell>
                                <TableCell align="right">burst time</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {processes.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row">
                                        {index}
                                    </TableCell>
                                    <TableCell align="right">{row.arrivalTime}</TableCell>
                                    <TableCell align="right">{row.burstTime}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        )
    }
}

const styles = {
    root: {
        padding: "15px",
        display: "inline-block",
        float: "left"
    },
};
ShowProcesses.propTypes = {
    classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    const {processes} = state.ProcessReducer;
    console.log(processes);
    return {processes}
};

export default connect(mapStateToProps)(withStyles(styles)(ShowProcesses));
