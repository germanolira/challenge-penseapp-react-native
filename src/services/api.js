import axios from "axios";

const api = axios.create({
  // Localhost api
  baseURL: "http://192.168.3.63:3333/products",
});

export default api;
