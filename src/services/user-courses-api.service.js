import http from './http.common'


class UserCourseApiService {

    getAllCoursesbyStudentId(userId) {
        return http.get(`/users/${userId}/courses`);
    }


    create(userId,courseId,data) {
        return http.post(`/users/${userId}/courses/${courseId}`, data);
    }

    update(userId,courseId,data) {
        return http.put(`/users/${userId}/courses/${courseId}`, data);
    }

    delete(userId,courseId) {
        return http.delete(`/users/${userId}/courses/${courseId}`);
    }



}

export default new UserCourseApiService();
