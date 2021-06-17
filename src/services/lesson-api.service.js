import http from './http.common';
class LessonApiService{
    getWorkshopsList(start, end, tutorId, lessonTypeId){
        return http.get(`/listlessons?start=${start}&end=${end}&tutorId=${tutorId}&lessonTypeId=${lessonTypeId}`)
    }
    getWorkshopById(id){
        return http.get(`/api/lesson/${id}`)
    }
}

export default new LessonApiService();