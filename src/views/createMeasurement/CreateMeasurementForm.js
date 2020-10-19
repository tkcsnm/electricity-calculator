import React from 'react';


class CreateMeasurementForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      measurement: ''
    };
  }

  save() {
    let newMeasurementValues = {
      name: this.state.name,
      date: this.state.date,
      measurement: this.state.measurement
    }
    // TODO: save the value 
    console.log(newMeasurementValues);
  }

  render() {
    return (
      <React.Fragment>
        <form>
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="name"
            onChange={(event) => this.setState({name: event.target.value})} />
          <label htmlFor="date">date</label>
          <input
            type="text"
            name="date"
            onChange={(event) => this.setState({date: event.target.value})} />
          <label htmlFor="measurement">measurement</label>
          <input
            type="number"
            name="measurement"
            onChange={(event) => this.setState({measurement: event.target.value})} />
        </form>
        <button onClick={() => this.save()}>Save</button>
      </React.Fragment>
    );
  }
}

export default CreateMeasurementForm;