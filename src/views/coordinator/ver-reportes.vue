<template>
  <v-container>
    <v-container>
      <h1 class="font-weight-bold" >Reportes</h1>
    </v-container>
    <v-container>
      <h2 class="mb-3 font-weight-medium grey--text text--darken-3" align="center">Selecciona una opción</h2>
      <v-container class="d-flex flex-column">
        <v-btn class="btn-principal cyan--text text--darken-2" outlined>Ver clases</v-btn>
        <v-btn class="btn-principal cyan--text text--darken-2" outlined>Ver tendencia de reserva de horarios</v-btn>
        <v-btn class="btn-principal cyan--text text--darken-2" outlined
               href="reports/complaints">Ver quejas</v-btn>
        <v-btn class="btn-principal cyan--text text--darken-2" outlined>Ver comentarios</v-btn>
      </v-container>
<!--      <v-btn class="ma-2 text-capitalize font-weight-light white" elevation="0">-->
<!--        Next-->
<!--        <v-icon dark right>mdi-arrow-right</v-icon>-->
<!--      </v-btn>-->
    </v-container>
  </v-container>
</template>

<script>

export default {
  name: "mainCoordinator",
}
</script>

<style scoped>
  .btn-principal{
    text-transform: capitalize;
    margin-bottom: 0.5rem;
    border-radius: 0px;
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
</style>