import axios from "axios";
const api = axios.create({
    //baseURL: 'http://localhost:3000'
    https:'//mern-bookstore-pkt5.onrender.com'
})
export default api
