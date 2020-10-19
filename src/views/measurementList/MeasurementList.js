import React from 'react';

import { Table } from '../table/Table';


function MeasurementList(mesurementList) {
  return (
    <div className="Measurement-table">
      <p>You can see the table with the measurements below:</p>
      <Table />
    </div>
  );
}

export default MeasurementList;
