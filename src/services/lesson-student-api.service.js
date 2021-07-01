import http from './http.common';
class LessonStudentApiService{
    getLessonStudentsFilteredByCommentByLessonId(lessonId, isComplaint){
        return http.get(`/lessonstudent/filter?lessonId=${lessonId}&isComplaint=${isComplaint}`)
    }
    getLessonStudentsByLessonIdAndStudentId(lessonId, studentId){
        return http.get(`/lessonstudent/${lessonId}/students/${studentId}`)
    }
    getLessonStudentsByLessonId(lessonId){
        return http.get(`/lessonstudent/lessons/${lessonId}`)
    }
}

export default new LessonStudentApiService();