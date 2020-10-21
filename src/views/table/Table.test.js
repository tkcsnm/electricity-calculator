import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Table from "./Table";

const cols = [
   { header: 'Name', name: 'name' },
   { header: 'Date', name: 'date' },
   { header: 'Measurement', name: 'measurement' }
];
const data = [
   { name: 'tv', date: '10102020', measurement: 50 },
   { name: 'fridge', date: '06102020', measurement: 150 },
   { name: 'oven', date: '02102020', measurement: 69 },
   { name: 'mac', date: '30092020', measurement: 16 },
   { name: 'legion', date: '03092020', measurement: 78 }
];

let container = null;
beforeEach(() => {
   // setup a DOM element as a render target
   container = document.createElement("div");
   document.body.appendChild(container);
});

afterEach(() => {
   // cleanup on exiting
   unmountComponentAtNode(container);
   container.remove();
   container = null;
});

it("renders correctly the table from the given data", () => {
   act(() => {
      render(<Table data={data} cols={cols} />, container);
   });
  
   // There should be ONLY 1 table element
   const tables = container.querySelectorAll('table');
   expect(tables).toHaveLength(1);
   const table = tables[0];

   // The table should have ONLY 1 thead element
   const theads = table.querySelectorAll('thead');
   expect(theads).toHaveLength(1);
   const thead = theads[0];

   // The number of th tags should be equal to number of columns
   const headers = thead.querySelectorAll('th');
   expect(headers).toHaveLength(cols.length);

   // Each th tag text should equal to column header
   headers.forEach((th, i) => {
      expect(th.textContent).toEqual(cols[i].header);
   });
   
   // The table should have ONLY 1 tbody tag
   const tbodys = table.querySelectorAll('tbody');
   expect(tbodys).toHaveLength(1);
   const tbody = tbodys[0];


   // tbody tag should have the same number of tr tags as data rows
   const rows = tbody.querySelectorAll('tr');
   expect(rows).toHaveLength(data.length);

   // Loop through each row and check the content
   rows.forEach((tr, rowIndex) => {
      const cells = tr.querySelectorAll('td');
      expect(cells).toHaveLength(cols.length);
      expect(cells[0].textContent).toEqual(data[rowIndex].name);
      expect(cells[1].textContent).toEqual(data[rowIndex].date);
      expect(cells[2].textContent).toEqual((data[rowIndex].measurement).toString());
   });
});