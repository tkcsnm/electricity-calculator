import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import MeasurementList from './views/measurementList/MeasurementList';
import CreateMeasurementForm from './views/createMeasurement/CreateMeasurementForm';


const initialList = [
  { name: 'tv', date: '10102020', measurement: 50, comment: "hello" },
  { name: 'fridge', date: '06102020', measurement: 150 },
  { name: 'oven', date: '02102020', measurement: 69 },
  { name: 'mac', date: '30092020', measurement: 16 },
  { name: 'legion', date: '03092020', measurement: 78 }
];

function App() {
  const [measurementList, setMeasurementList] = useState(initialList);
  
  function addNewMeasurementToList(newMeasurement) {
    let newMeasurementList = [...measurementList];
    newMeasurementList.push(newMeasurement);
    setMeasurementList(newMeasurementList);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the electricity calculator!
        </p>
        <MeasurementList measurementList={measurementList}/>
        <CreateMeasurementForm funcAddMeasurement={(newMeasurement) => {addNewMeasurementToList(newMeasurement)}}/>
      </header>
    </div>
  );
}

export default App;
