import axios from 'axios';

const api = axios.create({
    baseURL: "https://6336072565d1e8ef266748cf.mockapi.io/music-box"
})

export default api;