import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Login } from "./API/Main";
export default class LoginUser extends Component {
  state = {
   
    email: "",
    password: "",

  };
  UserData(target) {
    this.setState({ [target.target.name]: target.target.value });
  }
  LoginUser(target){
    target.preventDefault();
    Login(this.state)
  }
  render() {
    return (
      <Form onSubmit={this.LoginUser.bind(this)} className="regform" >
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control required name="email" type="email" placeholder="Enter email" onChange={this.UserData.bind(this)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control required name="password" type="password" onChange={this.UserData.bind(this)} />
        </Form.Group>
        <Button type="submit"> Login </Button>
        <Link to="/register"> Or register if you don't have account </Link>
      </Form>
    );
  }
}
