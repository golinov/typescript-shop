import axios from "axios";

export default axios.defaults.baseURL = process.env.BASE_URL || 'http://localhost/api'