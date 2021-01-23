import axios from "axios";
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
