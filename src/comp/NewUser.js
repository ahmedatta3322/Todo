import React, { Component } from "react";
import UserRegister from "./API/Main";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class NewUser extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    age: 0,
  };
  RegisterUser(target) {
    target.preventDefault();
    UserRegister(this.state);
  }
  UserData(target) {
    this.setState({ [target.target.name]: target.target.value });
  }
  render() {
    return (
      <Form onSubmit={this.RegisterUser.bind(this)} className="regform">
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            required
            onChange={this.UserData.bind(this)}
            type="text"
            placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            required
            onChange={this.UserData.bind(this)}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            required
            type="password"
            onChange={this.UserData.bind(this)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Age</Form.Label>
          <Form.Control
            name="number"
            required
            type="number"
            onChange={this.UserData.bind(this)}
          />
        </Form.Group>
        <Button type="submit"> Register </Button>
        <Link to="/"> Or login if you have account </Link>
      </Form>
    );
  }
}
