import React from 'react';

import Table from '../table/Table';


function MeasurementList(mesurementList) {

  const cols = [
    { header: 'Name', name: 'name' },
    { header: 'Date', name: 'date' },
    { header: 'Measurement', name: 'measurement' },
    { header: 'Comment', name: 'comment' },
 ];
 const data = [
    { name: 'tv', date: '10102020', measurement: 50, comment: "hello" },
    { name: 'fridge', date: '06102020', measurement: 150 },
    { name: 'oven', date: '02102020', measurement: 69 },
    { name: 'mac', date: '30092020', measurement: 16 },
    { name: 'legion', date: '03092020', measurement: 78 }
 ];

  return (
    <div className="Measurement-table">
      <p>You can see the table with the measurements below:</p>
      <Table data={data} cols={cols} />
    </div>
  );
}

export default MeasurementList;
