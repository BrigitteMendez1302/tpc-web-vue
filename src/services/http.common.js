import axios from 'axios'

export default axios.create({
    baseURL: 'http://lucas161920-001-site1.ctempurl.com/api',
    headers: {'Content-type': 'application/json'}
});