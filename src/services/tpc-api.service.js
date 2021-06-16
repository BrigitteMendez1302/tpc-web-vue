import http from './http.common';

class TpcApiService {
    getAllUsers() {
        return http.get('/users');
    }
    getUserById(id)
    {
        return http.get(`/users/${id}`);
    }
    getCoursesByUserId(id)
    {
        return http.get(`/users/${id}/courses`);
    }

}

export default new TpcApiService();
