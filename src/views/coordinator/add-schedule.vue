<template>
  <v-card class="space">

    <v-container class="container-modify-schedule">

      <nav class="title" v-if="$router"><v-icon>mdi-arrow-left</v-icon>Agregar Horario</nav>

      <v-spacer class="divide"></v-spacer>

      <nav class="container-form">
        <v-card class="form-modify" color="rgba(243, 249, 250, 1)">

          <nav class="form-space">
            <nav class="name-form">Seleccionar horario</nav>
          </nav>

          <nav class="form-space">
            <nav class="name-form-sub">Tipo de clase:</nav>
            <nav class="combo">
              <v-combobox clearable
                          v-model="selectClass"
                          :items="items"
                          hide-selected
                          dense
                          id="combo1"
              ></v-combobox>
            </nav>
          </nav>

          <nav class="form-space">
            <nav class="name-form-sub">Tutor:</nav>
            <nav class="combo">
              <v-combobox clearable
                              v-model="selectTutor"
                              :items="items"
                              hide-selected
                              dense
              ></v-combobox>
            </nav>
          </nav>

          <nav class="form-space">
            <nav class="name-form-sub">Fecha:</nav>
            <nav class="combo">
              <v-combobox clearable
                          v-model="selectDate"
                          :items="items"
                          hide-selected
                          dense
              ></v-combobox>
            </nav>
          </nav>

          <nav class="form-space">
            <nav class="name-form-sub">Inicio de clase:</nav>
            <nav class="combo">
              <v-combobox clearable
                          v-model="selectStart"
                          :items="items"
                          hide-selected
                          dense
              ></v-combobox>
            </nav>
          </nav>

          <nav class="form-space">
            <nav class="name-form-sub">Fin de clase:</nav>
            <nav class="combo">
              <v-combobox clearable
                          v-model="selectEnd"
                          :items="items"
                          hide-selected
                          dense
              ></v-combobox>
            </nav>
          </nav>

        </v-card>

        <nav class="div-buttons">
          <div class="button"><v-btn class="btn">Cancelar</v-btn></div>
          <div class="button"><v-btn class="btn">Guardar</v-btn></div>
          <div class="button"><v-btn class="btn">Publicar</v-btn></div>
        </nav>

      </nav>

    </v-container>

  </v-card>

</template>

<script>
export default {
  name: "add-schedule",
  data () {
    return {
      select: '',
      items: [
        'Programming',
        'Design',
        'Vue',
        'Vuetify'
      ]
    }
  }
}
</script>

<style scoped>

.combo {
  width: 50%;
  height: 25px;

  display: flex;
  align-items: center;
  padding-top: 10px;
}

.button {
  margin-left: 10px;
}

.btn {
  border: 1px solid rgba(18, 130, 162, 1);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  text-align: center;
}

.div-buttons {
  height: 40px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.name-form-sub {
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;

  width: 50%;
  height: 25px;
}

.name-form {
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;

  width: 250px;
}

.divide {
  height: 10px;
}

.form-space{
  width: 60%;
  height: 40px;
  margin-left: 20px;
  margin-top: 5px;
  border-radius: 0px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.form-space:nth-child(1) {
  margin-top: 10px;
  margin-bottom: 15px;
}

.container-form {
  display: flex;
  justify-content: center; /*centra horizontal*/
  flex-flow: row wrap; /*los separa en filas*/

  height: 370px;
}

.form-modify {
  height: 300px;
  width: 90%;
  border-radius: 25px;
  margin-top: 10px;
  background: rgba(243, 249, 250, 1);
}

.title {
  font-family: Roboto;
  font-size: 35px;
  font-style: normal;
  font-weight: 700;

  padding-left: 50px;
}

.space {
  display: flex;
  height: 100%;
  width: 100%;
}

.container-modify-schedule {
  height: 550px;
  width: 80%;
}

</style>