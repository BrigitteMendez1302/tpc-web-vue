<template>
<v-form>
  <h1>Encuentra tu tutoría ideal</h1>
  <br>

  <section v-if="step==1">
  <v-container class="pa-0 ma-0" v-show="!hidden">
    <h2 align="center">Selecciona el curso</h2>
    <v-container  class="d-flex pa-4 ma-9">
      <v-select

          v-model="selectCourse"
          :items="courses"
          label ="Courses" outlined>
      </v-select>

    </v-container>
  </v-container>
  </section>

  <section  v-if="step==2">
  <v-container class="pa-0 ma-0" v-show="!hidden">
    <h2 align="center">Selecciona el tutor</h2>
    <v-container class="d-flex pa-5 ma-9">

      <v-select  v-model="selectTutor" :items="tutors" label="Tutores" outlined></v-select>

    </v-container>
  </v-container>

  </section>

  <section v-if="step==3">
    <v-container class="pa-0 ma-0" v-show="!hidden">
      <h2 align="center">Selecciona la hora y día</h2>
      <v-container class="d-flex pa-5 ma-9">

        <v-select :items="hora" label="Selecciona hora" outlined></v-select>
        <v-spacer></v-spacer>
        <v-select :items="fecha" label="Selecciona día" outlined></v-select>
      </v-container>
    </v-container>
    </section>

  <section v-if="step==4">
    <v-container class="pa-0 ma-0" v-show="!hidden">
      <h2 align="center">Selecciona modalidad</h2>
      <v-container class="d-flex pa-5 ma-9">

        <v-select v-model="fondo" :items="modalidad" label="Selecciona modalidad" outlined></v-select>

        <v-text-field v-if="fondo=='Grupal'" v-model="selectAlumno1" label="Ingrese el correo del primer acompañante" outlined></v-text-field>
        <v-text-field v-if="fondo=='Grupal'" v-model="selectAlumno2" label="Ingrese el correo del segundo acompañante" outlined></v-text-field>
        <v-btn  v-if="fondo=='Grupal'"   @click.prevent="TwoStudents"> Verificar </v-btn>
        <v-spacer></v-spacer>
        <span v-if="fondo=='Grupal'"> {{mensajeAccept}}  </span>

      </v-container>
    </v-container>

  </section>


  <div class="ma-10">
  <v-btn  @click.prevent="atras"> Back </v-btn>

  <v-btn v-if="step!=4"  @click.prevent="adelante"> Next </v-btn>
    <v-btn @click.prevent="crear" v-if="step==4" color="#1F86FF" >Terminar </v-btn>
    <v-text class="exito" v-if="validacion===true" color="#5ECA69" >Tutoria terminada con exito </v-text>


  </div>
</v-form>
</template>

<script>





import LessonApiService from '../../services/lesson-api.service'
import LessonStudentApiService from '../../services/lesson-student-api.service'
import StudentApiService from '../../services/student-api.service'
export default {
  name: "reservar-tutoria",

  data: () => ({
    fondo: [],
      step: 1,
      validacion: false,
      TotalSteps: 4,
      fecha:[],
      hora:[],

      courses: [],
      id: [],

      tutors: [],

      displaysCourses:[],
      selectfecha:null,
      selecthora:null,
      selectCourse:null,
      selectTutor:null,
      selectAlumno1:null,
      selectAlumno2:null,
      idStudent1:null,
      idStudent2:null,
      validadorstudent1: false,
      validadorstudent2: false,
      modalidad: ['Individual','Grupal'],
      mensajeAccept: ''

}),

    async beforeCreate(){

      try {
       let responseC= await LessonApiService.getAllWorkshops()
       for(let i=0;i<responseC.data.length;i++){
        this.courses.push(responseC.data[i].course.name);
         this.id.push(responseC.data[i].id);
        this.tutors.push(responseC.data[i].tutor.firstName +' '+ responseC.data[i].tutor.lastName )
         this.fecha.push(responseC.data[i].startDate.substring(0,10))
         this.fecha.push(responseC.data[i].endDate.substring(0,10))
         this.hora.push(responseC.data[i].startDate.substring(11,20))
         this.hora.push(responseC.data[i].endDate.substring(11,20))

       }

      }
       catch(e) {
           console.log(e);
          }
    },


  methods: {
    adelante:function (){
      this.step++;

    },
    atras:function (){
      this.step--;
    },


    crear:function (){
      let data= {"lessonId": this.id[this.id.length-1],
        "studentId": this.$route.params.id,
        "topic": "Listas enlazadas",
        "comment": "entre",
        "qualification": 0,
        "complaint": false,
        "assistance": false}

      LessonStudentApiService.create(data).then(() => {

      })
          .catch(e => {
            console.log(e);
          })

      this.validacion=true;


      if(this.mensajeAccept==='Correos aceptados'){
        let data= {"lessonId": this.id[this.id.length-1],
          "studentId": this.$route.params.id,
          "topic": "Listas enlazadas",
          "comment": "entre",
          "qualification": 0,
          "complaint": false,
          "assistance": false}

        LessonStudentApiService.create(data).then(() => {

        })
            .catch(e => {
              console.log(e);
            })




        let data1= {"lessonId": this.id[this.id.length-1],
          "studentId": this.idStudent1,
          "topic": "Arboles",
          "comment": "entre",
          "qualification": 0,
          "complaint": false,
          "assistance": false}

        LessonStudentApiService.create(data1).then(() => {

        })
            .catch(e => {
              console.log(e);
            })



        let data2= {"lessonId": this.id[this.id.length-1],
          "studentId": this.idStudent2,
          "topic": "Arboles2",
          "comment": "entre",
          "qualification": 0,
          "complaint": false,
          "assistance": false}

        LessonStudentApiService.create(data2).then(() => {

        })
            .catch(e => {
              console.log(e);
            })



        this.validacion=true;

      }
    },

    async TwoStudents(){


      try {
        let responseS = await StudentApiService.getAll()
        for(let i=0;i<responseS.data.length;i++){
          console.log(responseS.data[i].mail)
          console.log(this.selectAlumno1)
          console.log(this.selectAlumno2)
          if(responseS.data[i].mail===this.selectAlumno1){
            this.idStudent1=responseS.data[i].id
            this.validadorstudent1=true
            console.log(this.idStudent1)
          }

          if(responseS.data[i].mail===this.selectAlumno2){
            this.idStudent2=responseS.data[i].id
            console.log(this.idStudent2)
           this.validadorstudent2=true
          }

        }
      }
      catch(e) {
        console.log(e);
      }

     this.validarColor()
    },

    validarColor:function () {
      if(this.validadorstudent1===true && this.validadorstudent2===true){
         this.mensajeAccept = 'Correos aceptados'

      }

    }

  },


}




</script>

<style scoped>


.mx-auto {
  margin-right: 20px;
  margin-left: 30px;
}


h1{
  margin-top: 1em;
  margin-left: 40px;
}
.exito{
  width: 327px;
  height: 42px;
  left: 900px;
  top: 300px;
}

.btn-alert{

}
</style>
