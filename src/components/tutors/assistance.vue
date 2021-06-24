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
                    :items="students"
                    :items-per-page="4"
                    :search="search"
                    class="elevation-1" ref="tutorialsTable">
        <template #item.full_name="{ item }">{{ item.student.firstName }} {{ item.student.lastName }}</template>
        <template v-slot:[`item.assistance`]="{ item }">
          <v-checkbox  small v-model="item.assistance" @click="checkAssistance"  ></v-checkbox>

        </template>
        <template v-slot:top>
        </template>
      </v-data-table>
    </v-card-text>
    <div class="ml-5 mr-5 container-btn">
      <v-btn class="m-btn">GUARDAR</v-btn>
    </div>
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
        {text: 'Alumno', value: 'full_name'},
        {text: 'Correo electronico', value: 'student.mail'},/*
        {text: 'Entrada', value: 'entrada'},
        {text: 'Salida', value: 'salida'},*/
        {text: 'Asistencia', value: 'assistance'},
      ],
      displayStudents: [ {id: "Carolina", codigo: "U201711783", entrada: "13:04:5", salida: "14:54:06",asistencia:false }
        ,{id: "Raul", codigo: "U201711783", entrada: "16:04:5", salida: "18:54:06",asistencia:true }
        ,{id: "Carlos", codigo: "U201711787", entrada: "14:04:5", salida: "19:54:06",asistencia:false }
        ,{id: "Samul", codigo: "U201711782", entrada: "16:04:5", salida: "14:54:06",asistencia:false }],
      students:[],
    }
  },
  async created(){
    try {
      let lessonId = this.$route.params.workshopId;
      console.log(lessonId);
      let response = await LessonStudentApiService.getLessonStudentsByLessonId(lessonId);
      this.students = response.data;
      console.log(this.students);
      console.log(typeof(this.students[0].assistance))
    }
    catch (e) {
      alert ("No hay estudiantes registrados para esta clase");
      this.$router.push('/');
    }
  },
  methods: {
    checkAssistance(){

    }
  },

}
</script>

<style scoped>


h1{
  font-size: 20px;
  margin-top: 1em;
  margin-left: .7em;
}

.m-btn{
  justify-self: flex-end;
}
.container-btn{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
</style>