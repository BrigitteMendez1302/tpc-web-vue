<template>
  <v-card>
    <v-card class="pa-md-5 mx-lg-14"
            color="indigo lighten-5"
            width="1080px">
      <v-row><v-card-title v-model="usuario"><h2>Hola {{ user.name }} </h2></v-card-title></v-row>





      <v-card-subtitle><h3>¿Qué deseas hacer hoy?</h3></v-card-subtitle>
      <v-img
          :src="require('@/assets/endP.png')"
          contain
          height="150"
      />
    </v-card>
    <v-card-text>

    </v-card-text>

    <v-row>
      <v-spacer></v-spacer>
      <v-btn  to="/trainings" class="ma-2" outlined color="indigo accent-2">Gestionar mis horarios</v-btn>
      <v-spacer></v-spacer>
      <v-btn class="ma-2" outlined color="indigo accent-2">Programar horario</v-btn>
      <v-spacer></v-spacer>
      <v-btn to="/reports" class="ma-2" outlined color="indigo accent-2">Ver reportes</v-btn>
      <v-spacer></v-spacer>
      <v-btn to="emails" class="ma-2" outlined color="indigo accent-2">Enviar correo</v-btn>
      <v-spacer></v-spacer>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "main-coordinator",
  data() {
    return{
      user: {
        id: 0,
        name: "Angel"
      }
    }

  }
}

</script>

<style scoped>

</style>