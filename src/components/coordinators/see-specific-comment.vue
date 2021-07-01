<template>
  <div>
    <h1 class="ml-5 mt-5">Detalle de comentario</h1>
    <div>
      <div class="workshop-details ml-5 mr-5 pa-5">
        <div class="pl-5">
          <h3>Nombre del alumno: {{ comment.student.firstName }} {{comment.student.lastName}}</h3>
          <h3>Tutor de clase: {{comment.lesson.tutor.firstName}} {{comment.lesson.tutor.lastName}}</h3>
          <h3>Descripcion:
            <div>
            {{comment.comment}}
          </div>
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LessonStudentApiService from '../../services/lesson-student-api.service'


export default {
  name: "see-specific-comment",
  data: () => ({
    comment: {}
  }),
  async created() {
    try {
      let lessonId = this.$route.params.lessonId
      let studentId = this.$route.params.studentId
      let response = await LessonStudentApiService.getLessonStudentsByLessonIdAndStudentId(lessonId, studentId)
      this.comment = response.data;
      console.log(this.comment)
    }
    catch (e) {
      alert("Comentario no encontrado")
      this.$router.push('/')
    }
  },

}
</script>

<style scoped>
.workshop-details{
  background-color: #F3F9FA;
  border-radius: 25px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  min-width: 00px;
}
h1{
  font-size: 24px !important;
  font-family: Roboto;
}
.ft-20{
  font-size: 18px;
}
.ft-18{
  font-size: 18px;
}
h3{
  font-size: 15px;
  font-family: Roboto;
  font-weight: normal;
  margin-top: 5px;
}
</style>