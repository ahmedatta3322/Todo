import axios from "axios";
import {

  Redirect,

} from "react-router-dom";
const token = sessionStorage.getItem("token");
console.log(token)
const config = {
  headers: { 'Authorization': `Bearer ${token}` },
};

export default function UserRegister(params) {
  
  
  axios
    .post("https://api-nodejs-todolist.herokuapp.com/user/register", params)
    .then((e) => {
      if (e.data.token) {
        //sessionStorage.setItem("token", e.data.token);
        window.location.replace("/login")
      }
    })
    .catch((error) => {
      if(error.response.data.startsWith("E11000")){
        alert("Please use another email");
      }
      
    });
}

export async function GetTodos(params) {
  let data = await axios.get("https://api-nodejs-todolist.herokuapp.com/task", config)
  return data.data;
      
}
export async function DeleteTask(params) {
  let data = await axios.delete(`https://api-nodejs-todolist.herokuapp.com/task/${params}`, config)
  // await axios.delete(`https://api-nodejs-todolist.herokuapp.com/task/${params}`,config).then(e =>{
  //   console.log(e)
  // })
  
  return data;
}
export function AddTask(params) {
  axios.post("https://api-nodejs-todolist.herokuapp.com/task",params,config).then(e =>{
    
  })
}
export function Login(params) {
  axios.post("https://api-nodejs-todolist.herokuapp.com/user/login",params).then(
    e =>{
      sessionStorage.setItem("token", e.data.token);
      window.location.replace("/todos")
    }
    
  )
  
}
