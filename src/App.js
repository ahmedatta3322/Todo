import logo from "./logo.svg";
import "./App.css";
import Todo from "./comp/Todo";
import User from "./comp/User";

import React, { Component } from "react";

export default class App extends Component {
  state = {
    comp: "",
    compid: 0,
    token: "",
  };
  render() {
    if (sessionStorage.getItem("token") && this.state.token == "") {
      this.setState({ token: sessionStorage.getItem("token") });
      //console.log(this.state);
      this.setState({ comp: <div>Home</div> });
      this.setState({ compid: 1 });
    } else if (this.state.comp !== <User></User> && this.state.compid !== 2) {
      console.log(this.state, <User></User>);
      this.setState({ comp: <User></User> });
      this.setState({ compid: 2 });
    }
    return this.state.comp;
  }
}
