import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddProcessComponent from "./components/AddProcessComponent";
import ShowProcesses from "./components/ShowProcesses";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
          <ShowProcesses/>
        <AddProcessComponent/>
      </div>
    );
  }
}

export default App;
