import axios from "axios";

const token = sessionStorage.getItem("token");

const config = {
  headers: { Authorization: `Bearer ${token}` },
};

export default function UserRegister(params) {
  axios
    .post("https://api-nodejs-todolist.herokuapp.com/user/register", params)
    .then((e) => {
      if (e.data.token) {
        //sessionStorage.setItem("token", e.data.token);
        window.location.replace("/login");
      }
    })
    .catch((error) => {
      if (error.response.data.startsWith("E11000")) {
        alert("Please use another email");
      }
    });
}

export async function GetTodos(params) {
  let data = await axios.get(
    "https://api-nodejs-todolist.herokuapp.com/task",
    config
  );
  return data.data;
}
export function DeleteTask(params) {
  let data = axios.delete(
    `https://api-nodejs-todolist.herokuapp.com/task/${params}`,
    config
  );
  return data;
}
export function UpdateTask(params, toggle) {
  let data = axios.put(
    `https://api-nodejs-todolist.herokuapp.com/task/${params}`,
    toggle,
    config
  );
  return data;
}
export async function AddTask(params) {
  let data = await axios.post(
    "https://api-nodejs-todolist.herokuapp.com/task",
    params,
    config
  );
  return data;
}
export function Login(params) {
  axios
    .post("https://api-nodejs-todolist.herokuapp.com/user/login", params)
    .then((e) => {
      sessionStorage.setItem("token", e.data.token);
      window.location.replace("/todos");
    })
    .catch((error) => {
      alert("Please try again, username or password wrong");
    });
}
