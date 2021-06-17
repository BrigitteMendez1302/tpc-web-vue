<template>
  <v-card>
    <v-card class="pa-md-5 mx-lg-14"
            color="indigo lighten-5"
            align="center">
      <v-row><v-card-title><h2> Encuentra tu taller ideal </h2></v-card-title></v-row></v-card>
      <v-spacer></v-spacer>
      <br/>
    <v-container fluid>
      <v-row align="center">
        <v-col sm="1"></v-col>
        <v-col sm="3">
          <v-select :items="options" label="Opciones"> </v-select>
        </v-col>
        <v-col sm="3">
          <v-form ref="form">
            <v-text-field class="course" label="Ingresa un curso"></v-text-field>
          </v-form>
        </v-col>
        <v-col sm="3">
          <v-form ref="form">
            <v-text-field class="tutor" label="Ingresa un tutor"></v-text-field>
          </v-form>
        </v-col>
      </v-row>
    </v-container>


    <v-list subheader>
      <v-subheader class="subtitle-1" >Lunes 14 de Junio</v-subheader>

      <v-list-item class=" ma-3 content"
                   v-for="les in displayLessons"
                   :key="les"
      >
        <v-list-item-content>
          <v-col cols="3">
            <v-list-item-title class="m-list-item-title">{{les.id}}</v-list-item-title>
          </v-col>
        </v-list-item-content>

        <v-list-item-content>
          <v-col cols="7">
            <v-list-item-title class="m-list-item-title" >{{les.tutorId}}</v-list-item-title>
          </v-col>
        </v-list-item-content>

        <v-list-item-content>
          <v-col cols="7">
            <v-list-item-title class="m-list-item-title" >{{les.lessonType}}</v-list-item-title>
          </v-col>
        </v-list-item-content>

        <v-list-item-content>
          <v-col cols="10"
                 align-self="justify">
            <v-list-item-title class="m-list-item-title" >{{les.courseId}}</v-list-item-title>
          </v-col>
        </v-list-item-content>
        <v-list-item-content>
          <v-col cols="3">
            <v-list-item-title class="m-list-item-title" >{{les.date()}}</v-list-item-title>
          </v-col>
        </v-list-item-content>
        <!--        v-text="chat.title"-->
        <v-list-item-content>
          <v-row align-content="center" justify="center">
            <div class="text-center">
              <v-btn
                  class="ml-percent"
                  color="white"
              >
                Detalles
              </v-btn>
            </div>
            <v-col sm="2"></v-col>
            <div>
              <v-btn
                  class="ml-percent-1"
                  x-small
                  fab
                  color="white"
                  elevation="0"
              >
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </div>
          </v-row>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-card-actions>
      <v-btn small color="error" @click="deleteItem">Remove</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import LessonApiService from '/src/services/lessons-api.service.js'
export default {
  name: "find-workshops",
  data() {
    return {
      search: '',
      dialog: false,
      dialogDelete: false,
      headers: [
        {text: 'Id', value: 'id'},
        {text: 'Tutor', value: 'tutorId'},
        {text: 'Type', value: 'lessonType'},
        {text: 'Course', value: 'courseId'},
        {text: 'Date', value: 'date', sortable: false}
      ],
      options:[
        "opcion1", "opcion2"
      ],
      lessons: [],
      displayLessons: [],
      editedIndex: -1,
      editedItem: {
        id: 0,
        tutorId: 0,
        lessonType: 0,
        courseId: 0,
        date: Date.now()
      },
      defaultItem: {
        id: 0,
        tutorId: 0,
        lessonType: 0,
        courseId: 0,
        date: Date.now()
      },
    }
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Lesson' : 'Edit Lesson'
    }
  },
  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
    date () {
      this.dateFormatted = this.formatDate(this.date)
    },
  },
  methods: {
    retrieveLessons() {
      LessonApiService.getAll()
          .then(response => {
            this.lessons = response.data
            this.displayLessons = response.data.map(this.getDisplayLesson)
          })
          .catch((e) => {
            console.log(e)
          })
    },
    getDisplayLesson(lesson) {
      var t
      if(lesson.tutorId === 1){
        t = "Ricardo"
      }else if(lesson.tutorId === 2){
        t = "Juan"
      }else if(lesson.tutorId === 3){
        t = "Luis"
      }

      var type
      if(lesson.lessonType === 1){
        type = "Tutoria"
      }else if(lesson.lessonType === 2){
        type = "Taller"
      }

      var course
      if(lesson.courseId === 1){
        course = "Programacion 1"
      }else if(lesson.courseId === 2){
        course = "Programacion 2"
      }else if(lesson.courseId === 3){
        course = "Complejidad Algoritmica"
      }

      return {
        id: lesson.id,
        tutorId: t,
        lessonType: type,
        courseId: course,
        date: lesson.date()
      }
    },
    editItem(item) {
      this.editedIndex = this.displayLessons.indexOf(item)
      console.log(item)
      this.editedItem= this.lessons[this.editedIndex]
      this.dialog = true
    },
    refreshList() {
      this.retrieveLessons()
    },

    deleteItem(item) {
      this.editedIndex = this.displayLessons.indexOf(item)
      this.editedItem = Object.assign({}, this.lessons[this.editedIndex])
      this.dialogDelete = true
    },

    deleteItemConfirm() {
      this.deleteLesson(this.editedItem.id)
      this.lessons.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedIndex = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedIndex = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save() {
      if(this.editedIndex > -1) {
        this.lessons[this.editedIndex] = this.editedIndex
        this.displayLessons[this.editedIndex] = this.getDisplayLesson(this.lessons[this.editedIndex])

      }else{
        LessonApiService.create(this.editedIndex)
            .then(response => {
              let item = response.data
              this.lessons.push(item)
              this.displayLessons.push(this.getDisplayLesson(item))
            })
      }
    },
    deleteLesson(id) {
      LessonApiService.delete(id)
          .then(() => {
            this.refreshList()
          })
          .catch((e) => {
            console.log(e)
          })
    }

  },
  mounted() {
    this.retrieveLessons()
  }
}
</script>

<style scoped>
.m-list-item-title{
  font-size: 17px;
  font-weight:455;
}
.subtitle-1{
  font-weight:555;
}
.content{
  background-color: #F3F9FA;
  border-radius: .3em;
}
.ml-percent{
  margin-left: 25%;
  min-width: 60px;
  height: 30px !important;
  color: #1282A2;
  border: 1px solid #1282A2 !important;
}
</style>

