import http from './http.common'

class LessonsApiService {
    getAll() {
        return http.get('/lesson')
    }

    get(id) {
        return http.get(`/lesson/${id}`)
    }

    delete(id) {
        return http.delete(`/lesson/${id}`)
    }

    findByCourse(course) {
        return http.get(`/lesson?course=${course}`)
    }
    create(data) {
        return http.post("/lesson", data)
    }
}

export default new LessonsApiService()