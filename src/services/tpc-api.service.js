import http from './http.common';

class TpcApiService {
    getAllUsers() {
        return http.get('/users');
    }
    getUserById(id)
    {
        return http.get(`/users/${id}`);
    }
    getTutorById(id)
    {
        return http.get(`/tutors/${id}`);
    }
    getStudentById(id)
    {
        return http.get(`/students/${id}`);
    }
    getCoordinatorById(id)
    {
        return http.get(`/coordinators/${id}`);
    }

    getUserCoursesById(id)
    {
        return http.get(`/users/${id}/courses`);
    }
}

export default new TpcApiService();
