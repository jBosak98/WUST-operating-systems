import React, { Component } from 'react';
import './App.css';

import SchedulerResults from "./components/SchedulerResults";
import ShowTasks from "./components/ShowTasks";
import AddTaskComponent from "./components/AddTaskComponent";

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
          <ShowTasks/>
          <AddTaskComponent/>
          <SchedulerResults/>
      </div>
    );
  }
}

export default App;
