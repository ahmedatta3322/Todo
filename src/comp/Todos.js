import {Form, Table , Button ,Modal} from "react-bootstrap";
import React, { Component } from "react";
import { GetTodos, data,AddTask ,DeleteTask} from "./API/Main";

export default class Todos extends Component {
 
  state = {
    show: false,
    description :"",
    todos:[],
 
  }
  Data(target) {
    this.setState({ [target.target.name]: target.target.value });
  }
  handleClose = () => this.setState({show : false});
  handleShow = () => {
    this.setState({show : true})
  };
  handleSave = () =>{
    AddTask(this.state)
  }
  

  componentDidMount() {
   let data = GetTodos().then(e => this.setState({todos: e}))
   this.setState({todos: data})

  }
 
  handleDelete  = async (id,hash) =>{
  
    let data = await DeleteTask(id)
    this.componentDidMount()
    return data
  }
render() {
      return (
        <div>
        {this.state.todos.count > 0 && <Table striped bordered hover>
          <thead>
          <tr>
              <th>#</th>
              <th>Todo description</th>
              <th>Created at</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
            </thead>
            {this.state.todos.data.map(
              e => {
                return <tbody>
                  <tr>
      <td>{this.state.todos.data.indexOf(e)}</td>
      <td contentEditable={false}>{e.description}</td>
      <td >{e.createdAt}</td>
      <td>{e.completed.toString()}</td>
      <td><Button variant="danger" onClick={this.handleDelete.bind(this,e._id,this.state.todos.data.indexOf(e))}>Delete</Button>{"   "}<Button>Modify</Button></td>
    
    </tr>
                </tbody>
              }
            )}
         
          
        </Table>}
        </div>
      )
    
  }
}
