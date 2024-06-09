import axios from "axios";

window.axios = axios;
axios.defaults.headers.common["token"] = localStorage.getItem("token");
// axios.defaults.headers.token = localStorage.getItem("token");

export default axios;
