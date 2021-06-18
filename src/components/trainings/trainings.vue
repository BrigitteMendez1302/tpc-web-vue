<template>
  <v-card>
    <v-card-title>
      Trainings
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
                    :items="displayTrainings"
                    :items-per-page="5"
                    :search="search"
                    class="elevation-1" ref="trainingsTable">
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
          <v-icon small class="mr-2" @click="navigateToEditTraining(item.id)">mdi-pen</v-icon>
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
                      <v-text-field v-model.number="editedItem.tutorId" label="Tutor"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.assistance" label="Assistance"></v-text-field>
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
  </v-card>
</template>

<script>
import TrainingApiService from "@/services/trainings-api.service";

export default {
  name: "trainings",
  data() {
    return {
      search: '',
      dialog: false,
      dialogDelete: false,
      headers: [
        {text: 'Id', value: 'id'},
        {text: 'Tutor', value: 'tutor'},
        {text: 'Assistance', value: 'assistance', sortable: false}
      ],
      trainings: [],
      displayTrainings: [],
      editedIndex: -1,
      editedItem: {
        id: 0,
        tutorId: '',
        assistance: false
      },
      defaultItem: {
        id: 0,
        tutorId: '',
        assistance: false
      },
    }
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Training' : 'Edit Training'
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
    retrieveTrainings() {
      TrainingApiService.getAll()
          .then(response => {
            this.trainings = response.data;
            this.displayTrainings = response.data.map(this.getDisplayTraining);
          })
          .catch((e) => {
            console.log(e);
          });
    },

    getDisplayTraining(training) {
      var t
      if(training.tutorId === 1){
        t = "Ricardo"
      }else if(training.tutorId === 2){
        t = "Juan"
      }else if(training.tutorId === 3){
        t = "Luis"
      }

      return {
        id: training.id,
        tutor: t,
        assistance: training.assistance ? "Alive" : "Absent",
      };
    },

    refreshList() {
      this.retrieveTrainings();
    },

    removeAllTrainings() {
      TrainingApiService.deleteAll()
          .then(() => {
            this.refreshList();
          })
          .catch((e) => {
            alert("The Backend does not support this operation.");
            console.log(e);
          });
    },

    editItem(item) {
      this.editedIndex = this.displayTrainings.indexOf(item);
      console.log(item);
      this.editedItem = this.trainings[this.editedIndex];
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.displayTrainings.indexOf(item);
      this.editedItem = Object.assign({}, this.trainings[this.editedIndex]);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.deleteTraining(this.editedItem.id);
      this.trainings.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
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
      if (this.editedIndex > -1) {
        this.trainings[this.editedIndex] = this.editedItem;
        this.displayTrainings[this.editedIndex] = this.getDisplayTraining(this.trainings[this.editedIndex]);
        TrainingApiService.update(this.editedItem.id, this.editedItem)
            .then(() => {
              this.refreshList();
            })
            .catch(e => {
              console.log(e);
            });

      } else {
        TrainingApiService.create(this.editedItem)
            .then(response => {
              let item = response.data;
              this.trainings.push(item);
              this.displayTrainings.push(this.getDisplayTraining(item));
            })
            .catch(e => {
              console.log(e);
            })
      }
      this.close()
    },

    deleteTraining(id) {
      TrainingApiService.delete(id)
          .then(() => {
            this.refreshList();
          })
          .catch((e) => {
            console.log(e);
          });
    }

  },
  mounted() {
    this.retrieveTrainings();
  }
}
</script>

<style scoped>

</style>