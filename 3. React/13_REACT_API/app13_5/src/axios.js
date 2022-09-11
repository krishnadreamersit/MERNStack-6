// npm install axios
import axios from "axios";
const instance = axios.create({
    baseURL: "/",
});
export default instance;