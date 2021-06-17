import http from './http.common';

class TpcApiService {
    getAllUsers() {
        return http.get('/api/users');
    }
    getUserById(id)
    {
        return http.get(`/api/users/${id}`);
    }
}

export default new TpcApiService();