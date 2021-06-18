<template>
  <v-container>
    <v-container class="d-flex">
      <!--      <v-btn class="ma-2 white" elevation="0" icon>-->
      <!--        <v-icon>mdi-chevron-left</v-icon>-->
      <!--      </v-btn>-->
      <h1 class="font-weight-bold" >Ver quejas</h1>
      <v-spacer></v-spacer>
      <v-btn class="btn-principal cyan--text text--darken-2" outlined
             @click="hidden = !hidden">
        {{ hidden ? 'Filtrar' : 'Filtrar' }}
      </v-btn>
    </v-container>

    <v-container class="pa-0 ma-0" v-show="!hidden">
      <v-container class="d-flex pa-0 ma-0">
        <v-select :items="courses" label="Selecciona un curso" outlined></v-select>
        <v-select :items="lessonTypes" label="Selecciona un tipo" outlined></v-select>
        <v-select :items="tutors" label="Selecciona un tutor" outlined></v-select>
      </v-container>
    </v-container>

    <v-list fluid>
      <v-list-item v-for="item in lessons" class="list-principal"
                   :key="item.id"
                   @click="selected">
        <v-list-item-content>
          <v-list-item-title>{{item}}</v-list-item-title>
          <v-list-item-subtitle>{{ item.qualification }}</v-list-item-subtitle>
          <!--          <v-list-item-subtitle>{{ item.content }}</v-list-item-subtitle>-->
        </v-list-item-content>

        <v-list-item-action>
          <v-list-item-action-text>{{ item.date }}</v-list-item-action-text>
        </v-list-item-action>
      </v-list-item>
    </v-list>

  </v-container>
</template>

<script>
import TpcApiService from '../../services/tpc-api.service'

export default {
  name: "ver-quejas",
  data: () => ({
    hidden: true,

    courses: [],
    lessonTypes: [],
    tutors: [],
    lessons: [],

    selected: [1],
    comments: [],

    items: [
      {
        firstName: 'Brigitte',
        lastName: 'Méndez',
        subject: "Conexión inestable durante la clase",
        date: "22/06/2021 15:03:00",
        content: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
      },
      {
        firstName: 'Carolina',
        lastName: 'Villegas',
        subject: "Conexión inestable durante la clase",
        date: "22/06/2021 15:03:00",
        content: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
      },
      {
        firstName: 'Rodrigo',
        lastName: 'Calle',
        subject: "Conexión inestable durante la clase",
        date: "22/06/2021 15:03:00",
        content: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
      },
      {
        firstName: 'Josías',
        lastName: 'Apellido',
        subject: "Conexión inestable durante la clase",
        date: "22/06/2021 15:03:00",
        content: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
      },
      {
        firstName: 'Julissa',
        lastName: 'Ponte',
        subject: "Conexión inestable durante la clase",
        date: "22/06/2021 15:03:00",
        content: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
      },
    ],
  }),
  async beforeCreate(){
    let responsec = await TpcApiService.getCourses()
    this.courses = responsec.data

    let responselt = await TpcApiService.getLessonTypes()
    this.lessonTypes = responselt.data

    let responset = await TpcApiService.getTutors()
    this.tutors = responset.data

    let responsel = await TpcApiService.getLessons()
    this.lessons = responsel.data
  },
  methods:{
    navigateToSeeComment(id) {
      this.$router.push({name: 'see-specific-comment', params: { studentId: id}});
    },

  }
}
</script>

<style scoped>
.btn-principal{
  text-transform: capitalize;
  margin-bottom: 0.5rem;
  border-color: #1282A2;
  background-color: white;
  color:#0097A7;
}
.btn-principal:hover{
  border: none;
}
.v-btn {
  letter-spacing: 0 !important;
}
.list-principal {
  background-color: #F7F9FA;
  margin-bottom: 0.5rem;
  border: none;
}
.v-select {
  width: 20%;
  background-color: white;
}
</style>