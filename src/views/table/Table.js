import React, { Component } from 'react';

export default class Table extends Component {

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              {this.renderTableHeaders(this.props.cols)}
            </tr>
          </thead>
          <tbody>
            {this.renderTableRows(this.props.data)}
          </tbody>
        </table>
      </div>
    );
  }

  renderTableHeaders(cols) {
    return (
      cols.map((col, i) => { return (<th key={i}>{col.header}</th>) })
    )
  }

  renderTableRows(data) {
    return (
      data.map((row, i) => {
        return (
          <tr key={i}>
            {this.renderTableCells(row)}
          </tr>)
      })
    )
  }

  renderTableCells(row) {
    return (
      this.props.cols.map((col, i) => {
        return (
          <td key={"cell" + i}>{row[col.name]}</td>
        )
      })
    )
  }

  
}
