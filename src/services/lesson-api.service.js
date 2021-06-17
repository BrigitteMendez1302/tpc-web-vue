import http from './http.common';
class LessonApiService{
    getWorkshopsList(start, end, tutorId, lessonTypeId){
        return http.get(`/lesson/listlessons?start=${start}&end=${end}&tutorId=${tutorId}&lessonTypeId=${lessonTypeId}`)
    }
    getWorkshopById(id){
        return http.get(`/lesson/${id}`)
    }
    update(id, item){
        return http.put(`/lesson/${id}`, item)
    }
}

export default new LessonApiService();