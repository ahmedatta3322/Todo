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
        sessionStorage.setItem("token", e.data.token);
      }
    })
    .catch((error) => {
      return error;
    });
}
export let data = {};
export async function GetTodos(params) {
  try {
    await axios
      .get("https://api-nodejs-todolist.herokuapp.com/task", config)
      .then((e) => {
        console.log(e.data.data);
        data = e.data.data;
        return e.data.data;
      });
  } catch (error) {
    console.log(error);
  }
}
