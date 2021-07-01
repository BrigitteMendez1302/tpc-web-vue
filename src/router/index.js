import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MainStudent from "@/views/student/MainStudent";
import StudentWorkshop from "@/views/student/StudentWorkshop";
import StudentLessons from "@/views/student/StudentLessons";
import StudentTutorial from "@/views/student/StudentTutorial";
import StudentCalendar from "@/views/student/StudentCalendar";
import MainTutor from "@/views/tutor/MainTutor";
import TutorWorkshop from "@/views/tutor/TutorWorkshop";
import TutorTutorial from "@/views/tutor/TutorTutorial";
import TutorPerformance from "@/views/tutor/TutorPerformance";
import TutorProfile from "@/views/tutor/TutorProfile";
import StudentProfile from "@/views/student/StudentProfile";
import LogIn from "@/views/general/LogIn";

Vue.use(VueRouter)

const routes = [
  {
    path: '/student',
    name: 'HomeStudent',
    component: MainStudent,
  },
    {
    path: '/student/profile',
    name: 'StudentProfile',
    component: StudentProfile,
  },
  {
    path: '/',
    name: 'Login',
    component: LogIn,
  },
  {
    path: '/tutor',
    name: 'HomeTutor',
    component: MainTutor,
  },
  {
    path: '/tutor/profile',
    name: 'TutorProfile',
    component: TutorProfile,
  },
  {
    path: '/tutor/workshops',
    name: 'TutorWorkshops',
    component: TutorWorkshop,
  },
  {
    path: '/tutor/tutorial',
    name: 'TutorTutorial',
    component: TutorTutorial,
  },
  {
    path: '/tutor/performance',
    name: 'TutorPerformance',
    component: TutorPerformance,
  },
  {
    path: '/student/profile',
    name: 'StudentProfile',
    component: Home
  },
  {
    path: '/student/workshops',
    name: 'StudentWorkshopsList',
    component: StudentWorkshop
  },
  {
    path: '/student/lessons',
    name: 'StudentLessonsList',
    component: StudentLessons
  },
  {
    path: '/student/lesson/:id',
    name: 'StudentLessonDetail',
    component: Home
  },
  {
    path: '/student/tutorial/:id/enroll',
    name: 'StudentTutorialEnroll',
    component: Home
  },
  {
    path: '/student/tutorial',
    name: 'StudentTutorial',
    component: StudentTutorial
  },
  {
    path: '/student/calendar',
    name: 'StudentCalendar',
    component: StudentCalendar
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
