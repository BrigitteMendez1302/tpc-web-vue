<template>
<v-form>
  <h1>Encuentra tu tutoría ideal</h1>
  <br>

  <section v-if="step==1">
  <v-container class="pa-0 ma-0" v-show="!hidden">
    <h2 align="center">Selecciona el curso</h2>
    <v-container class="d-flex pa-4 ma-9">
      <v-select :items="courses" label="Curso" outlined></v-select>
    </v-container>
  </v-container>
  </section>

  <section  v-if="step==2">
  <v-container class="pa-0 ma-0" v-show="!hidden">
    <h2 align="center">Selecciona el tutor</h2>
    <v-container class="d-flex pa-5 ma-9">

      <v-select :items="tutors" label="Tutores" outlined></v-select>

    </v-container>
  </v-container>

  </section>

  <section v-if="step==3">
  <v-container class="pa-0 ma-0" v-show="!hidden">
    <h2 align="center">Selecciona la hora y día</h2>
    <v-container class="d-flex pa-5 ma-9">

     <v-select :items="hours" label="Selecciona hora" outlined></v-select>
   <v-spacer></v-spacer>
      <v-select :items="dates" label="Selecciona día" outlined></v-select>
    </v-container>
  </v-container>

  </section>

  <section v-if="step==4">
    <v-container class="pa-0 ma-0" v-show="!hidden">
      <h2 align="center">Selecciona modalidad</h2>
      <v-container class="d-flex pa-5 ma-9">

        <v-select v-model="fondo" :items="modalidad" label="Selecciona modalidad" outlined></v-select>

        <v-text-field v-if="fondo=='Grupal'"  label="Ingrese el codigo del primer acompañante" outlined></v-text-field>
        <v-text-field v-if="fondo=='Grupal'" label="Ingrese el codigo del segundo acompañante" outlined></v-text-field>

      </v-container>
    </v-container>

  </section>


  <div class="ma-10">
  <v-btn  @click.prevent="atras"> Back </v-btn>

  <v-btn v-if="step!=4"  @click.prevent="adelante"> Next </v-btn>
    <v-btn @click.prevent="terminar" v-if="step==4" color="#1F86FF" >Terminar </v-btn>
    <v-text class="exito" v-if="validacion===true" color="#5ECA69" >Tutoria terminada con exito </v-text>
  </div>
</v-form>
</template>

<script>



export default {
  name: "reservar-tutoria",

  data: () => ({
    fondo: [],
    step: 1,
    validacion: false,
    TotalSteps: 4,
    courses: [
      ['Programación 1'],
      ['CPL1'],
      ['Matemática básica'],
    ],
    tutors: [
      ['Lucas Moreno'],
      ['Jessica Fernandez'],
      ['Carolina Villegas'],
    ],

    dates: [

      ["2021-06-17"],
      ["2021-05-17"],
    ],
    hours:[
        ["07:00"],
        ["09:00"],
        ["07:00"]
    ],

    modalidad:[
        ["Individual"],
        ["Grupal"]
    ]

  }),

  methods: {



    adelante:function (){
      this.step++;
    },
    atras:function (){
      this.step--;
    },
    terminar:function(){
      this.validacion=true;
    },

   }





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


</style>