import React, { Component } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';

import SchedulerResults from "./components/SchedulerResults";
import ShowTasks from "./components/ShowTasks";
import AddTaskComponent from "./components/AddTaskComponent";
import Paper from "@material-ui/core/Paper";
import {withStyles} from "@material-ui/core";
import PropTypes from 'prop-types';

class App extends Component {

  render() {
      const { classes } = this.props;
    return (
      <div className="App">
        <header className="App-header">
        </header>
          <Grid container spacing={24} className={classes.grid}>
              <Grid >
                  <Paper className={classes.paper}><SchedulerResults/></Paper>
              </Grid>
              <Grid>
                  <Paper className={classes.paper}><AddTaskComponent/></Paper>
              </Grid>
              <ShowTasks/>
          </Grid>
      </div>
    );
  }
}

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        display: "inline-block",
        padding: "15px",
        margin: "20px",
    },
    grid: {
        margin: "auto",
        width: "auto"
    }
});
App.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(App);
