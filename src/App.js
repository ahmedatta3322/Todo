import "./App.css";
import Todos from "./comp/Todos";
import NewUser from "./comp/NewUser";
import LoginUser from "./comp/LoginUser";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    token: "",
  };
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
          {sessionStorage.getItem("token") && <Todos></Todos>}
          
          {sessionStorage.getItem("token") == null &&  <LoginUser />}
         
          </Route>
          <Route path="/todos">
            <Todos />
          </Route>
          <Route path="/register" >
          {sessionStorage.getItem("token") && <Todos></Todos>}
          
          {sessionStorage.getItem("token") == null &&  <NewUser />}
          
          </Route>
        </Switch>
      </Router>
    );
  }
}
