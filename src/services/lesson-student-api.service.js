import http from './http.common';
class LessonStudentApiService{
    getLessonStudentsByLessonId(lessonId){
        return http.get(`/lessonstudent/lessons/${lessonId}`)
    }
    getLessonStudentsByLessonIdAndStudentId(lessonId, studentId){
        return http.get(`/lessonstudent/${lessonId}/students/${studentId}`)
    }

    create(data){
        return http.post("/lessonstudent",data)
    }
}

export default new LessonStudentApiService();
