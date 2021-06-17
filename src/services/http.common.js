import axios from 'axios'

export default axios.create({
    baseURL: 'https://localhost:44392/swagger/index.html',
    headers: {'Content-type': 'application/json'}
});