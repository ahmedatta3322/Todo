import { Table } from "react-bootstrap";
import React, { Component } from "react";
import { GetTodos, data } from "./API/Main";
export default class Todos extends Component {
  //data = GetTodos();
  async componentDidMount() {
    let dat2 = GetTodos();
    //let data = await Promise.resolve(dat2);
    console.log(data);
  }
  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Todo description</th>
            <th>Created at</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody></tbody>
      </Table>
    );
  }
}
