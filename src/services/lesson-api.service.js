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

    create(id, item){
        return http.post(`/lessons`, item)
    }
    getAllWorkshops(){
        return http.get('/lesson')
    }

}

export default new LessonApiService();
