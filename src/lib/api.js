import Axios from "axios";

export function login(email, password) {
  return Axios.post(`http://127.0.0.1:5000/login`, {
    email: email,
    password: password
  });
}
