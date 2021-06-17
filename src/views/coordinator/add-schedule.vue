<template>
  <v-card class="space">

    <v-container class="container-modify-schedule">

      <nav class="title" v-if="$router"><v-icon @click="$router.go(-1)">mdi-arrow-left</v-icon>Agregar Horario</nav>

      <v-spacer class="divide"></v-spacer>

      <nav class="container-form">
        <v-card class="form-modify" color="rgba(243, 249, 250, 1)">

          <nav class="form-space">
            <nav class="name-form">Seleccionar horario</nav>
            <v-combobox clearable v-model="selectSchedule" hide-selected dense :items="schedules" item-text="id">

            </v-combobox>
          </nav>

          <nav class="form-space">
            <nav class="name-form-sub">Tipo de clase:</nav>
            <nav class="combo">
              <v-combobox clearable v-model="selectClass" hide-selected dense :items="classes" item-text="lessonTypeName">

              </v-combobox>
            </nav>
          </nav>

          <nav class="form-space">
            <nav class="name-form-sub">Tutor:</nav>
            <nav class="combo">
              <v-combobox clearable v-model="selectTutor" hide-selected dense :items="tutors" :item-text="fullName">
              </v-combobox>
            </nav>
          </nav>

          <!--select date-->
          <v-menu v-model="menuDate"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  :nudge-right="100" max-width="290px" min-width="290px">

            <template v-slot:activator="{ on }">
              <nav class="form-space">
                <div class="name-form-sub">Fecha:</div>
                <nav class="combo">
                  <v-text-field label="" prepend-icon="mdi-calendar" readonly :value="fromDateDisp" v-on="on"
                  ></v-text-field>
                </nav>
              </nav>
            </template>

            <v-date-picker
                locale="en-in"
                v-model="fromDateVal"
                no-title
                @input="menuDate = false"
            ></v-date-picker>

          </v-menu>

          <!--first-->
          <v-menu ref="menu1" v-model="menuStart" :close-on-content-click="false" :return-value.sync="timeStart"
                  transition="scale-transition" offset-y max-width="290px" min-width="290px" :nudge-right="100">
            <template v-slot:activator="{ on, attrs }">
              <nav class="form-space">
                <nav class="name-form-sub">Inicio de clase:</nav>
                <nav class="combo">
                  <v-text-field label="" prepend-icon="mdi-clock-time-four-outline" readonly v-model="timeStart"
                                v-bind="attrs" v-on="on"
                  ></v-text-field>
                </nav>
              </nav>
            </template>

            <v-time-picker
                v-if="menuStart"
                v-model="timeStart"
                @click:minute="$refs.menu1.save(timeStart)"
            ></v-time-picker>
          </v-menu>

          <!--second-->
          <v-menu ref="menu2" v-model="menuEnd" :close-on-content-click="false" :return-value.sync="timeEnd"
                  transition="scale-transition" offset-y max-width="290px" min-width="290px" :nudge-right="100">
            <template v-slot:activator="{ on, attrs }">
              <nav class="form-space">
                <nav class="name-form-sub">Fin de clase:</nav>
                <nav class="combo">
                  <v-text-field label="" prepend-icon="mdi-clock-time-four-outline" readonly v-model="timeEnd"
                                v-bind="attrs" v-on="on"
                  ></v-text-field>
                </nav>
              </nav>
            </template>

            <v-time-picker
                v-if="menuEnd"
                v-model="timeEnd"
                @click:minute="$refs.menu2.save(timeEnd)"
            ></v-time-picker>
          </v-menu>

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
import TpcApiService from "@/services/tpc-api.service";

export default {
  name: "add-schedule",
  data () {
    return {
      timeStart: null,
      menuStart: false,

      timeEnd: null,
      menuEnd: false,

      fromDateVal: null,
      menuDate: false,

      tutors: [],
      classes: [],
      schedules: []
    }
  },
  computed: {
    fromDateDisp() {
      return this.fromDateVal;
    }
  },
  async beforeCreate() {
    let response = await TpcApiService.getTutors()
    this.tutors = response.data

    let responseClass = await TpcApiService.getLessonTypes()
    this.classes = responseClass.data

    let responseSchedule = await TpcApiService.getMeetings()
    this.schedules = responseSchedule.data
  },
  methods: {
    fullName: item => item.firstName + ' ' + item.lastName
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

  width: 50%;
  height: 25px;
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