import http from './http.common';
class LessonStudentApiService{
    getLessonStudentsByLessonId(lessonId){
        return http.get(`/lessons/${lessonId}`)
    }
}

export default new LessonStudentApiService();