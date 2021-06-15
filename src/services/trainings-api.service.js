import http from './http.common'

class TrainingsApiService {
    getAll() {
        return http.get('/trainings')
    }

    get(id) {
        return http.get(`/trainings/${id}`);
    }

    create(data) {
        return http.post("/trainings", data);
    }

    update(id, data) {
        return http.put(`/trainings/${id}`, data);
    }

    delete(id) {
        return http.delete(`/trainings/${id}`);
    }

    deleteAll() {
        return http.delete(`/trainings`);
    }

    findByAssistance(assitance) {
        return http.get(`/trainings?assitance=${assitance}`);
    }
}

export default new TrainingsApiService()