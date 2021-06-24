<template>
  <div>
    <v-card-title>
      <h1>Asistencia</h1>
      <v-spacer></v-spacer>
      <v-text-field align="center"
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
      ></v-text-field>
    </v-card-title>
    <v-card-text>
      <v-data-table :headers="headers"

                    :items="displayStudents"
                    :items-per-page="4"
                    :search="search"
                    class="elevation-1" ref="tutorialsTable">
        <template v-slot:[`item.asistencia`]="{ item }">
          <v-checkbox  small v-model="item.asistencia" @click="checkassitance"  ></v-checkbox>

        </template>
        <template v-slot:top>
          <v-dialog v-model="dialog" max-width="500px">




          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">

          </v-dialog>
        </template>
      </v-data-table>
    </v-card-text>


  </div>
</template>

<script>
import LessonStudentApiService from "@/services/lesson-student-api.service";

export default {
  name: "assistance",
  data() {
    return {
      search: '',
      headers: [
        {text: 'Nombre', value: 'id'},
        {text: 'Codigo de alumno', value: 'codigo'},/*
        {text: 'Entrada', value: 'entrada'},
        {text: 'Salida', value: 'salida'},*/
        {text: 'Asistencia', value: 'asistencia'},

      ],
      displayStudents: [ {id: "Carolina", codigo: "U201711783", entrada: "13:04:5", salida: "14:54:06",asistencia:false }
        ,{id: "Raul", codigo: "U201711783", entrada: "16:04:5", salida: "18:54:06",asistencia:false }
        ,{id: "Carlos", codigo: "U201711787", entrada: "14:04:5", salida: "19:54:06",asistencia:false }
        ,{id: "Samul", codigo: "U201711782", entrada: "16:04:5", salida: "14:54:06",asistencia:false }],
      students:[],
    }
  },
  async created(){
    try {
      let lessonId = this.$route.params.workshopId;
      let response = await LessonStudentApiService.getLessonStudentsByLessonId(lessonId);
      this.students = response.data;
      console.log(this.students);
    }
    catch (e) {
      alert ("No hay estudiantes registrados para esta clase");
      this.$router.push('/');
    }
  },
  methods: {

  },

}
</script>

<style scoped>


h1{
  font-size: 20px;
  margin-top: 1em;
  margin-left: .7em;
}



</style>