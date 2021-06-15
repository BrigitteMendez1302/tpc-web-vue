<template>
  <div>
    <h1 class="mt-8">Ver clases</h1>
    <div>
      <h3 class="text-center" >Selecciona una opción</h3>
      <div class="m-flex">
        <div class="buttons text-center flex">
          <v-btn class="btn-tpc mt-3" color="white"> Ver asistencia </v-btn>
          <v-btn class="btn-tpc mt-3" color="white">Ver comentarios</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "see-specific-class-options"
}
</script>

<style scoped>

.btn-tpc{
  color: #1282A2;
  border: 1px solid #1282A2 !important;
  width: 330px;
  height: 47px !important;
  font-size: 0.75rem !important;
  margin: 0 auto;
  display:block;
}

.buttons{
  display: flex;
  flex-direction: column;
  min-width: 40px;
  justify-items: center;
  align-content: center;
  justify-content: center;
}
.m-flex{
  display: flex;
  justify-content: center;
}
h1{
  font-size: 24px;
  margin-left: 40px;
}

@media screen and (max-width: 380px) {
  h1{
    margin-left: 10px !important;
  }
}
</style>