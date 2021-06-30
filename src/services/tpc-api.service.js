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
    getTutors()
    {
        return http.get(`/tutors`);
    }
    getLessonTypes()
    {
        return http.get(`/lessontype`);
    }
    getMeetings()
    {
        return http.get(`/meeting`);
    }
    getAssistance(id){
        return http.get(`/lessonstudent/${id}`);
    }
    getLesson(id){
        return http.get(`/lesson/${id}`);
    }

    getAllUniversities() {
        return http.get('/universities');
    }
}

export default new TpcApiService();
