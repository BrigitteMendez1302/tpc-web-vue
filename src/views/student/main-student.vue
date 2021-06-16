<template>
    <div class="contenedor mx-auto">
    <div class="princpal d-flex align-center justify-space-between mx-auto rounded-xl pa-5 my-15">
      <div class="d-flex flex-column">
        <h2 class="text-h2 font-weight-bold">Hola {{user.firstName}}</h2>
        <p class="text-h4">¿Qué deseas hacer hoy?</p>
      </div>
      <img src="../../assets/user.png" alt="Icono de usuario">
    </div>
    <div class="d-flex justify-space-between ">
      <v-btn elevation="2" outlined x-large class="text-h6 pa-12 text-boton">
        Inscribirse <br> a un  taller
      </v-btn>
      <v-btn elevation="2" outlined x-large class="text-h6  pa-12 text-boton ">
        Inscribirse  <br> a una tutoría
      </v-btn>
      <v-btn elevation="2" outlined x-large class="text-h6 pa-12 text-boton ">
        Ver mis reservas
      </v-btn>
      <v-btn elevation="2" outlined x-large class="text-h6 pa-12 text-boton ">
        Ver horarios <br> disponibles
      </v-btn>
    </div>
  </div>
</template>

<script>
import TpcApiService from '../../services/tpc-api.service'
export default {
  name: "mainStudent",
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
  }
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

}
.text-boton
{
  width: 20%;
  color: #1282A2;
  font-size: 20px;
  font-weight: bold;

}
</style>



