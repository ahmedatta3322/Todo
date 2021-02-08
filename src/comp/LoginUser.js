import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default class LoginUser extends Component {
  render() {
    return (
      <Form className="regform">
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" />
        </Form.Group>

        <Button type="submit"> Register </Button>
        <Link to="/"> Or register if you don't have account </Link>
      </Form>
    );
  }
}
