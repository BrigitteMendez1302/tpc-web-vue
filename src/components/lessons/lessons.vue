<template>
  <v-card>
    <v-card><h1 class="text-lg-left">Mis reservas</h1></v-card>
    <v-card-title>
      <v-spacer></v-spacer>
      <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
      ></v-text-field>
    </v-card-title>
    <v-card-text>
      <v-data-table :headers="headers"
                    :items="displayLessons"
                    :items-per-page="5"
                    :search="search"
                    class="elevation-1" ref="lessonsTable">
        <template v-slot:top>
          <v-dialog v-model="dialog" max-width="500px">
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.id" label="Id"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.tutorId" label="Tutor"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.lessonType" label="Type"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.courseId" label="Course"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.vacants" label="Vacants"></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline">Delete Item</v-card-title>
              <v-card-text>
                <p>Are you sure you want to delete the item <b>{{ editedItem.id }}</b></p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-2" text @click="closeDelete">Cancel</v-btn>
                <v-btn color="blue darken-2" text @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>
      </v-data-table>
    </v-card-text>
    <v-card-actions>
      <v-btn small color="error" @click="deleteItem">Remove</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import LessonApiService from '/src/services/lessons-api.service.js'
export default {
  name: "lessons",
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
        {text: 'Vacants', value: 'vacants', sortable: false}
      ],
      lessons: [],
      displayLessons: [],
      editedIndex: -1,
      editedItem: {
        id: 0,
        tutorId: 0,
        lessonType: 0,
        courseId: 0,
        vacants: 0
      },
      defaultItem: {
        id: 0,
        tutorId: 0,
        lessonType: 0,
        courseId: 0,
        vacants: 0
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
        vacants: lesson.vacants
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

</style>