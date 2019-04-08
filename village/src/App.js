import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Menu from "./components/Menu/Menu";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import SmurfCard from "./components/SmurfCard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  postSmurf = smurf => {
    axios
      .post(`http://localhost:3333/smurfs`, smurf)
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => console.log(err));
  };

  deleteSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Menu />
        <Route
          exact
          path="/"
          render={props => <Smurfs smurfs={this.state.smurfs} {...props} />}
        />

        <Route
          path="/smurf-form"
          render={props => <SmurfForm addSmurf={this.postSmurf} {...props} />}
        />

        <Route
          path="/smurfs/:id"
          render={props => (
            <SmurfCard
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf}
              {...props}
            />
          )}
        />
      </div>
    );
  }
  componentDidMount() {
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err));
  }
}

export default App;
