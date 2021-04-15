import axios from "axios";

const api = axios.create({
  // baseURL: "http://3.35.16.85:3000",
  baseURL: "http://localhost:4000/",
  headers: {
    Authorization: window.localStorage.getItem("token") || "",
    Content_type: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default api;
