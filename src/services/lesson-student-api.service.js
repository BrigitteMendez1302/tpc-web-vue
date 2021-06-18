import http from './http.common';
class LessonStudentApiService{
    getLessonStudentsByLessonId(lessonId){
        return http.get(`/lessonstudent/lessons/${lessonId}`)
    }
    getLessonStudentsByLessonIdAndStudentId(lessonId, studentId){
        return http.get(`/lessonstudent/${lessonId}/students/${studentId}`)
    }
}

export default new LessonStudentApiService();