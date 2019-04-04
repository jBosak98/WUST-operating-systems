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


class ShowTasks extends React.Component{

    render() {
        const { tasks } = this.props;
        const { classes } = this.props;
        if (tasks.length < 1 || tasks === undefined){
            return <div/>
        }
        return(
            <div className={classes.root}>
                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">arrival time</TableCell>
                                <TableCell align="right">block address</TableCell>
                                <TableCell align="right">deadline</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tasks.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell align="right">{row.arrivalTime}</TableCell>
                                    <TableCell align="right">{row.blockAddress}</TableCell>
                                    <TableCell align="right">{row.deadline}</TableCell>
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
ShowTasks.propTypes = {
    classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    const {tasks} = state.TaskReducer;
    return {tasks}
};

export default connect(mapStateToProps)(withStyles(styles)(ShowTasks));
