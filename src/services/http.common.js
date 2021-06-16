import axios from 'axios'

export default axios.create({
    baseURL: 'https://radiant-coast-90696.herokuapp.com/api',
    headers: {'Content-type': 'application/json'}
});