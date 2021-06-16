<template>
  <v-card class="space">

    <v-container class="container-add-schedule">
      <div id="title">Agregar Horario</div>
      <v-spacer class="divide"></v-spacer>

      <div class="select-option">Selecciona una opcion</div>

      <div class="btn-group">
        <v-spacer class="divide"></v-spacer>
        <div class="div-btn"><v-btn class="btn">Agregar manualmente</v-btn></div>
        <v-spacer class="divide"></v-spacer>
        <div class="div-btn"><v-btn class="btn">Importar lista</v-btn></div>
      </div>

      <div class="arrows">
        <div class="div-arrow"><v-icon>mdi-arrow-left</v-icon>Anterior</div>
        <div class="div-arrow">Siguiente<v-icon>mdi-arrow-right</v-icon></div>
      </div>

    </v-container>

  </v-card>

</template>

<script>
export default {
  name: "menu-schedule"
}
</script>

<style scoped>
.div-arrow {
  height: 30px;
  width: 150px;

  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  padding-top: 6px;
}

.div-arrow:nth-child(1) {
  display: flex;
  justify-content: flex-start;
}
.div-arrow:nth-child(2) {
  display: flex;
  justify-content: flex-end;
}

.arrows {
  height: 30px;
  width: 100%;
  margin-top: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.div-btn {
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center; /*centra horizontal*/

}

.btn-group {
  height: 130px;
}

.btn {
  border: 1px solid #1282A2;
  border-radius: 0px;

  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;

  width: 300px;
  height: 40px;
}

.space {
  display: flex;
  height: 100%;
  width: 100%;
}

.divide {
  height: 10px;
}

.container-add-schedule {
  height: 100%;
  width: 100%;
}

#title {
  font-family: Roboto;
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: 41px;

  padding-left: 50px;
  padding-top: 20px;
}

.select-option {
  font-family: Roboto;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;

  text-align: center;
  padding-top: 25px;
}

</style>