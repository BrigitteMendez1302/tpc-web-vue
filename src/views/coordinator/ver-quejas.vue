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
        <v-select :items="courses" label="Curso" outlined></v-select>
        <v-select :items="lessonTypes" label="Tipo" outlined></v-select>
        <v-select :items="tutors" label="Tutor" outlined></v-select>
        <v-select :items="schedules" label="Horario" outlined></v-select>
      </v-container>
    </v-container>

    <v-list fluid>
      <v-list-item v-for="item in items" class="list-principal"
                   :key="item.title"
                   @click="selected">
        <v-list-item-content>
          <v-list-item-title>{{item.firstName}} {{item.lastName}}</v-list-item-title>
          <v-list-item-subtitle>{{ item.subject }}</v-list-item-subtitle>
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
export default {
  name: "ver-quejas",
  data: () => ({
    hidden: false,
    courses: ['Programación 1','Programación 2' ],
    lessonTypes: ['Tutoría', 'Taller'],
    tutors: ['Rodrigo', 'Josealdo', 'Lucas'],
    schedules: ['09:00 - 11:00', '11:00 - 13:00', '13:00 - 15:00', '15:00 - 17:00'],
    selected: [1],
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