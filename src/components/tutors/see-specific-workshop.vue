<template>
  <div>
    <h1 class="ml-5 mt-5">Curso</h1>
    <div>
      <div class="workshop-details ml-5 mr-5 pa-5">
        <h2 class="ft-20">Detalles de la clase</h2>
        <div class="pl-5">
          <h3>Tema: {{ workshop.description }}</h3>
          <h3>Fecha: {{ formatDateIsoDate(workshop.startDate) }}</h3>
          <h3>Inicio de clase: {{ formatAMPM(workshop.startDate) }}</h3>
          <h3>Fin de clase: {{ formatAMPM(workshop.endDate) }}</h3>
        </div>
      </div>
      <div class="buttons ml-5 mt-6">
        <v-btn class="btn-tpc btn-tpc-r ml-2" color="white">Ver asistencia</v-btn>
        <v-dialog
            v-model="dialog"
            persistent
            max-width="290"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                class=" btn-tpc btn-tpc-r ml-2" color="white"
                v-bind="attrs"
                v-on="on"
            >
              Modificar
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="text-h5">
              Curso
            </v-card-title>
            <v-card-text class="pb-0 pt-0">
              <v-menu
                  v-model="fromDateMenu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                      pt-0
                      label="Nueva fecha"
                      readonly
                      :value="fromDateDisp"
                      v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                    locale="en-in"
                    v-model="fromDateVal"
                    no-title
                    @input="fromDateMenu = false"
                ></v-date-picker>
              </v-menu>
            </v-card-text>
            <v-card-text class="pb-0 pt-0">
              <v-menu
                  v-model="fromTimeMenu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                      pt-0
                      label="Hora de inicio"
                      readonly
                      :value="fromTimeDisp"
                      v-on="on"
                  ></v-text-field>
                </template>
                <v-time-picker
                    ampm-in-title
                    format="ampm"
                    locale="en-in"
                    v-model="fromTimeVal"
                    @input="fromTimeMenu = false"
                ></v-time-picker>
              </v-menu>
            </v-card-text>
            <v-card-text class="pb-0 pt-0">
              <v-menu
                  v-model="fromTimeEndMenu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                      pt-0
                      label="Hora de fin"
                      readonly
                      :value="fromTimeEndDisp"
                      v-on="on"
                  ></v-text-field>
                </template>
                <v-time-picker
                    ampm-in-title
                    format="ampm"
                    locale="en-in"
                    v-model="fromTimeEndVal"
                    @input="fromTimeEndMenu = false"
                ></v-time-picker>
              </v-menu>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="btn-dialog"
                  text
                  @click="dialog = false"
              >
                Cancelar
              </v-btn>
              <v-btn class="btn-dialog"
                  text @click="save"
              >
                Guardar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-btn class=" btn-tpc btn-tpc-r ml-2" color="white"
               href="https://meet.google.com/new" target="_blank"
        >Ingresar a la sesion</v-btn>
      </div>
    </div>
  </div>
</template>

<script>

import LessonApiService from '../../services/lesson-api.service'

export default {
  name: "seeSpecificWorkshop",
  data: () => ({
    workshop:{},
    myDate: '',
    myStartTime:'09:57',
    myEndTime:'10:45',
    dialog: false,
    fromDateMenu: false,
    fromDateVal: null,
    fromTimeMenu: '10:45',
    fromTimeVal: null,
    fromTimeEndMenu: false,
    fromTimeEndVal: null,
    editedIndex: -1,
  }),
  async created() {
    try {
      let id = this.$route.params.workshopId
      let response = await LessonApiService.getWorkshopById(id)
      this.workshop = response.data
      //this.myDate = this.formatDateIsoDate(this.workshop.startDate)
    }
    catch (e) {
      alert("Taller no encontrado")
      this.$router.push('/')
    }
  },
  computed: {
    fromDateDisp() {
      return this.fromDateVal;
      // format/do something with date
    },
    fromTimeDisp(){
      return this.fromTimeVal;
    },
    fromTimeEndDisp(){
      return this.fromTimeEndVal;
    },
  },
  methods:{
    save() {
      LessonApiService.update(this.workshop.id, this.workshop)
          .then(() => {
            this.dialog = false
            console.log("Actualizado con exito");
          })
          .catch(e => {
            console.log(e);
          })
    },
    formatDateIsoDate(paramDate){
      let date = new Date(paramDate);
      let year = date.getFullYear();
      let month = date.getMonth()+1;
      let dt = date.getDate();

      if (dt < 10) {
        dt = '0' + dt;
      }
      if (month < 10) {
        month = '0' + month;
      }
      return year+'-' + month + '-'+dt
    },
    formatAMPM(isoDate) {
      let date = new Date(isoDate)
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let ampm = hours >= 12 ? ' pm ' : ' am ';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0'+minutes : minutes;
      let strTime =  hours + ':' + minutes + ' ' + ampm;
      return strTime;
    },
  }
}
</script>

<style scoped>
.workshop-details{
  background-color: #F3F9FA;
  border-radius: 25px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  min-width: 00px;
}
h1{
  font-size: 24px !important;
  font-family: Roboto;
}
.ft-20{
  font-size: 18px;
}
.ft-18{
  font-size: 18px;
}
h3{
  font-size: 15px;
  font-family: Roboto;
  font-weight: normal;
  margin-top: 5px;
}
.btn-tpc{
  color: #1282A2;
  border: 1px solid #1282A2 !important;
  min-width: 40px;
  height: 30px !important;
  font-size: 0.75rem !important;
}
.btn-dialog{
  color: #1282A2;
  min-width: 40px;
  height: 30px !important;
}

@media screen and (max-width: 480px) {
  .btn-tpc-r{
    margin-top: 10px;
  }
}
</style>