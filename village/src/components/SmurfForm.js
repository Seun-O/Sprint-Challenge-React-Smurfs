import React, { Component } from "react";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {
        name: "",
        age: "",
        height: ""
      }
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    if (this.props.smurf) {
      this.props.action(this.props.smurf.id, this.state.smurf);
      this.props.history.push(`/smurfs/${this.props.smurf.id}`);
    } else {
      this.props.action(this.state.smurf);
      this.props.history.push("/");
    }
    this.setState({
      smurf: {
        name: "",
        age: "",
        height: ""
      }
    });
  };

  handleInputChange = e => {
    this.setState({
      smurf: { ...this.state.smurf, [e.target.name]: e.target.value }
    });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.smurf.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.smurf.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.smurf.height}
            name="height"
          />
          <button type="submit">{this.props.btnTxt}</button>
        </form>
      </div>
    );
  }
  componentWillMount() {
    this.setState({ smurf: { ...this.props.smurf } });
  }
}

export default SmurfForm;
