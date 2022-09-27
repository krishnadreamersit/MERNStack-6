// npm i axios
import axios from "axios";  //import axios
const instance = axios.create({
 baseURL: "/",
});
export default instance;  //exports the instanc