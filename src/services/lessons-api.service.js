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

    findByStudent(studentId) {
        return http.get(`/student/${studentId}`)
    }
}

export default new LessonsApiService()