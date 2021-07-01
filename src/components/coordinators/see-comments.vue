<template>
  <div>
    <v-list subheader>
      <h1>Comentarios</h1>
      <v-list-item class=" ma-3 content"
                   v-for="comment in comments"
                   :key="comment.lesson.startDate"
      >
        <v-list-item-content>
          <v-list-item-title class="m-list-item-title">{{ comment.student.firstName }} {{comment.student.lastName}}</v-list-item-title>
        </v-list-item-content>

        <v-list-item-content>
          <v-list-item-title class="m-list-item-title" >{{comment.qualification}} <v-icon color="yellow">mdi-star</v-icon> </v-list-item-title>
        </v-list-item-content>
        <v-list-item-content>
          <div>
            <v-btn class="ml-percent" color="white" @click="navigateToSeeComment(comment.student.id)" >Detalles</v-btn>
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import LessonStudentApiService from '../../services/lesson-student-api.service'
import Swal from 'sweetalert2'
export default {
name: "see-comments",
  data: () => ({
    comments:[],
    commentsFiltered:[],
  }),
  async created(){
    try {
      let lessonId = this.$route.params.lessonId;
      let response = await LessonStudentApiService.getLessonStudentsFilteredByCommentByLessonId(lessonId, false);
      this.comments = response.data;
      console.log(this.comments);
      if(this.comments.length === 0){
        Swal.fire({title: "No hay comentarios para esta clase, puede dirigirse a la sección de quejas"})
        this.$router.push('/')
      }
    }
    catch (e) {
      Swal.fire({title:"Hubo un error, no se pudieron cargar los comentarios"});
      this.$router.push('/');
    }
  },
  methods:{
    navigateToSeeComment(id) {
      this.$router.push({name: 'see-specific-comment', params: { studentId: id}});
    },
    filterComments(){
      this.commentsFiltered = Object.filter(this.comments, comment => comment.complaint === true)
    }
  }
}
</script>

<style scoped>
.m-list-item-title{
  font-size: 15px;
}
h1{
  font-size: 20px;
  margin-top: 1em;
  margin-left: .7em;
}
.content{
  background-color: #F3F9FA;
  /*border: 5px solid red;*/
  border-radius: .3em;
}

.ml-percent{
  margin-left: 25%;
  min-width: 60px;
  height: 30px !important;
  color: #1282A2;
  border: 1px solid #1282A2 !important;
}
@media screen and (max-width: 500px) {
  .ml-percent{
    margin-left: 0%;
  }
}
</style>