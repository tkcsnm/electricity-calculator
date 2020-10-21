import React from 'react';

import Table from '../table/Table';


function MeasurementList({measurementList}) {

  const cols = [
    { header: 'Name', name: 'name' },
    { header: 'Date', name: 'date' },
    { header: 'Measurement', name: 'measurement' },
    { header: 'Comment', name: 'comment' },
  ];
  
  const data = measurementList;

  return (
    <div className="Measurement-table">
      <p>You can see the table with the measurements below:</p>
      <Table data={data} cols={cols} />
    </div>
  );
}

export default MeasurementList;
