<template>
  <div>
    <h1 class="ml-10 mt-8">Ver clases</h1>
    <div>
      <h3 class="text-center" >Selecciona una opción</h3>
      <div class="buttons text-center flex">
        <v-btn class="btn-tpc mt-3" color="white">Ver asistencia</v-btn>
        <v-btn class="btn-tpc mt-3" color="white">Ver comentarios</v-btn>
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
  min-width: 40px;
  height: 30px !important;
  font-size: 0.75rem !important;
}

.buttons{
  display: flex;
  flex-direction: column;
  width: 200px;
  justify-items: center;
  align-content: center;
  justify-content: center;
}
</style>