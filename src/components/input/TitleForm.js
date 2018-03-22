import React, { Component } from 'react';

class TitleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Title submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
        <div>
        <div><h1>{this.state.value}</h1></div>
            <form onSubmit={this.handleSubmit}>
                <label>
                Title:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
      </div>
    );
  }
}

export default TitleForm;