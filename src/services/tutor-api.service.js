import http from './http.common'


class TutorApiService {
    getAll() {
        return http.get('/tutors');
    }
    get(id) {
        return http.get(`/tutors/${id}`);
    }

    create(data) {
        return http.post("/tutors", data);
    }

    update(id, data) {
        return http.put(`/tutors/${id}`, data);
    }

    delete(id) {
        return http.delete(`/tutors/${id}`);
    }

    deleteAll() {
        return http.delete(`/tutors`);
    }

}

export default new TutorApiService();
