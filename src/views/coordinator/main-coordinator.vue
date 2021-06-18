<template>
  <div class="contenedor mx-auto">
    <div class="princpal d-flex align-center justify-space-between mx-auto rounded-xl pa-5 my-15">
      <div class="d-flex flex-column">
          <h2 class="text-h2 font-weight-bold">Hola {{user.firstName}}</h2>
          <p class="text-h4">¿Que deseas hacer hoy?</p>
      </div>
      <img src="../../assets/user.png" alt="Icono de usuario">
    </div>
    <div class="d-flex justify-space-between align-center">
      <v-btn elevation="2" outlined x-large class="text-h5 pa-12 btn-main font-weight-bold" color="#1282A2">
        Gestionar mis <br> horarios
      </v-btn>
      <v-btn elevation="2" outlined x-large class="text-h5 pa-12 btn-main font-weight-bold" color="#1282A2">
        Programar <br> horario
      </v-btn>
      <v-btn elevation="2" outlined x-large class="text-h5 pa-12 btn-main font-weight-bold" color="#1282A2"
             href="reports">
        Ver reportes
      </v-btn>

<!--      <v-btn icon href="/fooRoute" target="_blank">-->
<!--        <v-icon>window</v-icon> Link Text-->
<!--      </v-btn>-->

      <v-btn elevation="2" outlined x-large class="text-h5 pa-12 btn-main font-weight-bold"  color="#1282A2">
        Enviar correo
      </v-btn>
    </div>
  </div>
</template>

<script>
import TpcApiService from '../../services/tpc-api.service'
export default {
  name: "mainCoordinator",
  data: function () {
    return {
      user: {}
    }
  },
  async beforeCreate() {
    try {
      let id = this.$route.params.id
      let response = await TpcApiService.getUserById(id)
      this.user = response.data
    }
    catch (e) {
      alert("User not found")
      this.$router.push('/')
    }
  },
}
</script>

<style scoped>
.contenedor
{
  width: 100%;
}
.princpal
{
  background: rgba(3, 64, 120, 0.19);
}
.btn-main
{
  width: 20%;
}
</style>