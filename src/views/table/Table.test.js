import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Table from "./Table";


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

      render(<Table data={data} cols={cols} />, container);
   });
  
   // There should be ONLY 1 table element
   const table = container.find('table');
   expect(table).toHaveLength(1);

   // The table should have ONLY 1 thead element
   const thead = table.find('thead');
   expect(thead).toHaveLength(1);

   // The number of th tags should be equal to number of columns
   const headers = thead.find('th');
   expect(headers).toHaveLength(cols.length);

   // Each th tag text should equal to column header
   headers.forEach((th, idx) => {
      expect(th.text()).toEqual(cols[idx].header);
   });
   
   // The table should have ONLY 1 tbody tag
   const tbody = table.find('tbody');
   expect(tbody).toHaveLength(1);

   // tbody tag should have the same number of tr tags as data rows
   const rows = tbody.find('tr');
   expect(rows).toHaveLength(data.length);

   // Loop through each row and check the content
   rows.forEach((tr, rowIndex) => {
      const cells = tr.find('td');
      expect(cells).toHaveLength(cols.length);
      expect(cells.at(0).text()).toEqual(data[rowIndex].name);
      expect(cells.at(1).text()).toEqual(data[rowIndex].date);
      expect(cells.at(2).text()).toEqual(data[rowIndex].measurement);
   });
});