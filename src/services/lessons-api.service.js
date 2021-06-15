import http from './http.common'

class LessonsApiService {
    getAll() {
        return http.get('/lessons')
    }

    get(id) {
        return http.get(`/lessons/${id}`)
    }

    delete(id) {
        return http.delete(`/lessons/${id}`)
    }

    findByCourse(course) {
        return http.get(`/lessons?course=${course}`)
    }
    create(data) {
        return http.post("/lessons", data)
    }
}

export default new LessonsApiService()