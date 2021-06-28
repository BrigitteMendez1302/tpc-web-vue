<template>
  <v-card>
    <v-card-title>
      Tutorials
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
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
          <v-icon small class="mr-2" @click="navigateToEditTutorial(item.id)">mdi-pen</v-icon>
          <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
        </template>
        <template v-slot:top>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">New Item</v-btn>
            </template>
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
                      <v-text-field v-model="editedItem.course" label="Course"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.tutor" label="Tutor"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.type" label="Tipo"></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="save">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline">Delete Item</v-card-title>
              <v-card-text>
                <p>Are you sure you want to delete the item <b>{{ editedItem.title }}</b></p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>
      </v-data-table>
    </v-card-text>
    <v-card-actions>
      <v-btn small color="primary" @click="navigateToAddTutorial">Add Tutorial</v-btn>
      <v-btn small color="error" @click="removeAllTutorials">Remove All</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import LessonsApiService from '../../services/lessons-api.service'
export default {
  name: "manage-schedules",
  data() {
    return {
      search: '',
      dialog: false,
      dialogDelete: false,
      headers: [
        {text: 'Id', value: 'id'},
        {text: 'Curso', value: 'course'},
        {text: 'Tutor', value: 'tutor'},
        {text: 'Tipo', value: 'type'}
      ],
      Lessons: [],
      displayLessons: [],
      editedIndex: -1,
      editedItem: {
        id: 0,
        course: '',
        tutor: '',
        type: ''
      },
      defaultItem: {
        id: 0,
        course: '',
        tutor: '',
        type: ''
      },
    }
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Tutorial' : 'Edit Tutorial'
    },
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },
  methods: {
    retrieveLessons() {
      LessonsApiService.getAll()
      .then(response => {
        this.lessons = response.data;
        this.displayLessons = response.data.map(this.getDisplayLesson);
      })
      .catch((e) => {
        console.log(e);
      })
    },
    getDisplayLesson(lesson) {
      return {
        id: lesson.id,
        course: lesson.course,
        tutor: lesson.tutor,

      }
    },
    refreshList() {
      this.retrieveLessons();
    },
    editItem(item) {
      this.editedIndex = this.displayLessons.indexOf(item);
      console.log(item);
      this.editItem = this.lessons(this.editedIndex);
      this.dialog = true;
    },
    deleteItem(item) {
      this.editedIndex = this.displayLessons.indexOf(item);
      this.editedItem = Object.assign({}, this.lessons[this.editedIndex]);
      this.dialogDelete = true;
    },
    deleteItemConfirm() {
      this.deleteLesson(this.editedItem.id);
      this.lessons.splice(this.editedIndex, 1);
      this.closeDelete();
    },
    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1;
      })
    },
    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    save() {
      if(this.editedIndex > -1) {
        this.lessons[this.editedIndex] = this.editedItem;
        this.displayLessons[this.editedIndex] = this.getDisplayLesson(this.lessons[this.editedIndex]);
        LessonsApiService.update(this.editedItem.id, this.editedItem)
        .then(() => {
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
      } else {
        LessonsApiService.create(this.editedItem)
        .then(response => {
          let item = response.data;
          this.lessons.push(item);
          this.displayLessons.push(this.getDisplayLesson(item));
        })
        .catch(e => {
          console.log(e);
        })
      }
      this.close();
    },
    deleteLesson(id) {
      LessonsApiService.delete(id)
      .then(() => {
        this.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
    },
  },
  mounted() {
    this.retrieveLessons();
  }
}
</script>

<style scoped>

</style>