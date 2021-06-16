import axios from 'axios'

export default axios.create({
    baseURL: 'https://radiant-coast-90696.herokuapp.com/',
    headers: {'Content-type': 'application/json'}
});