import axios from "axios";

const instance = axios.create({
  baseURL: "https://run.mocky.io/",
});

export default instance;
