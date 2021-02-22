import { Table, Button, Modal } from "react-bootstrap";
import React, { Component } from "react";
import { GetTodos, AddTask, DeleteTask, UpdateTask } from "./API/Main";

export default class Todos extends Component {
  state = {
    show: false,
    description: "",
    todos: [],
    modeltype: "update",
  };

  componentDidMount() {
    let data = GetTodos().then((e) => this.setState({ todos: e }));
    data.catch(error => {
      console.log(error.response.status)
      if(error.response.status === 401){
        alert("Please login")
        sessionStorage.clear()
        window.location.replace("/login")
      }
    })
    this.setState({ todos: data });
  }
  Data(target) {
    this.setState({ [target.target.name]: target.target.value });
  }
  handleClose = () => this.setState({ show: false });
  handleShow = () => {
    this.setState({ show: true, modeltype: "Add task", description: "" });
  };
  handleSave = () => {
    AddTask(this.state).then((e) => {
      console.log(e.status);
      if (e.status === 201) {
        this.setState({ show: false });
        this.componentDidMount();
      }
    });
  };
  handleDelete = async (id, hash) => {
    console.log(id);
    let data = await DeleteTask(id);
    this.componentDidMount();
    return data;
  };
  handleComplete = async (id, status) => {
    const toggle = { completed: !status };
    let data = await UpdateTask(id, toggle);
    this.componentDidMount();
    return data;
  };
  handleLogout = () => {
    sessionStorage.clear();
    window.location.reload();
  };
  handleModify = (target, description) => {
    console.log(target);
    this.setState({ show: true, modeltype: "Modify", description: target });
    UpdateTask(this.state).then((e) => {
      console.log(e.status);
      if (e.status === 201) {
        this.setState({ show: false });
        this.componentDidMount();
      }
    });
  };
  render() {
    return (
      <div>
        <Button style={{ float: "right" }} onClick={this.handleShow}>
          Add task
        </Button>
        <Button
          style={{ float: "right", marginRight: "2vw" }}
          onClick={this.handleLogout}
        >
          Logout
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.modeltype}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <textarea
              name="description"
              onChange={this.Data.bind(this)}
              value={this.state.description}
            ></textarea>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleSave}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        {this.state.todos.count > 0 && (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Todo description</th>
                <th>Created at</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            {this.state.todos.data.map((e) => {
              return (
                <tbody>
                  <tr>
                    <td>{this.state.todos.data.indexOf(e)}</td>
                    <td contentEditable={false}>{e.description}</td>
                    <td>{e.createdAt}</td>
                    <td>{e.completed.toString()}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={this.handleDelete.bind(
                          this,
                          e._id,
                          this.state.todos.data.indexOf(e)
                        )}
                      >
                        Delete
                      </Button>
                      {"   "}
                      <Button
                        onClick={this.handleModify.bind(this, e.description)}
                      >
                        Modify
                      </Button>
                      {(this.x = !e.completed)}
                      {"   "}
                      <Button
                        variant="success"
                        onClick={this.handleComplete.bind(
                          this,
                          e._id,
                          e.completed
                        )}
                      >
                        Mark as {this.x.toString()}
                      </Button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
        )}
      </div>
    );
  }
}
