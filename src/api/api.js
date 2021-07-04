import axios from 'axios'
import qs from "qs";

export const Register = params => {
  return axios.post("/user/register", qs.stringify(params));
};

export const Login = params => {
  return axios.post("/user/login", qs.stringify(params));
};

export const Exit = params => {
  return axios.get("/user/logout/json", qs.stringify(params));
};

export const ArticleList = (num, params) => {
  return axios.get("/article/list/" + num + "/json", qs.stringify(params));
};
