import React from 'react';

import logo from './logo.svg';
import './App.css';
import MeasurementList from './views/measurementList/MeasurementList';
import CreateMeasurementForm from './views/createMeasurement/CreateMeasurementForm';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the electricity calculator!
        </p>
        <MeasurementList/>
        <CreateMeasurementForm/>
      </header>
    </div>
  );
}

export default App;
