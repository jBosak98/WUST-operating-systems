import React, { Component } from 'react';
import './App.css';
import AddProcessComponent from "./components/AddProcessComponent";
import ShowProcesses from "./components/ShowProcesses";
import SchedulerResults from "./components/SchedulerResults";

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
          <ShowProcesses/>
          <AddProcessComponent/>
          <SchedulerResults/>
      </div>
    );
  }
}

export default App;
