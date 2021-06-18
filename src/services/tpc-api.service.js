import http from './http.common';

class TpcApiService {
    getAllUsers() {
        return http.get('/users');
    }
    getUserById(id)
    {
        return http.get(`/users/${id}`);
    }
    //julissa
    getTutors()
    {
        return http.get(`/tutors`);
    }
    getLessonTypes()
    {
        return http.get(`/lessontype`);
    }
    getLessons()
    {
        return http.get(`/lesson`);
    }
    getCourses()
    {
        return http.get(`/courses`);
    }

    getLessonStudentsByLessonId(lessonId){
        return http.get(`/lessonstudent/lessons/${lessonId}`)
    }
    getLessonStudentsByLessonIdAndStudentId(lessonId, studentId){
        return http.get(`/lessonstudent/${lessonId}/students/${studentId}`)
    }
}

export default new TpcApiService();
