<template>
  <div>
    <div>
      <div class="workshop-details mt-6 ml-5 mr-5 pa-5">
        <h2 class="ft-20">Información de la clase</h2>
        <div class="pl-5">
          <h3>Tema: {{ workshop.description }}</h3>
          <h3>Fecha: {{ formatDateIsoDate(workshop.startDate) }}</h3>
          <h3>Inicio de clase: {{ formatAMPM(workshop.startDate) }}</h3>
          <h3>Fin de clase: {{ formatAMPM(workshop.endDate) }}</h3>
        </div>
      </div>
      <div class="buttons ml-5 mt-6">
        <v-btn class="btn-tpc btn-tpc-r ml-2" color="white"
               @click="navigateToSeeAttendance()">
          Ver asistencia</v-btn>
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
            <v-card-text class="pb-0 pt-0">
              <v-card-title></v-card-title>
              <v-menu
                  ref="menu1"
                  v-model="menu1"
                  :close-on-content-click="false"
                  :return-value.sync="date"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                      v-model="date"
                      label="Nueva fecha"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                    v-model="date"
                    no-title
                    scrollable
                >
                  <v-spacer></v-spacer>
                  <v-btn
                      text
                      color="primary"
                      @click="menu1 = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                      text
                      color="primary"
                      @click="$refs.menu1.save(date)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </v-card-text>
            <v-card-text class="pb-0 pt-0">
              <v-menu
                  ref="menu"
                  v-model="menu3"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  :return-value.sync="time"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                      v-model="startTime"
                      label="Nueva hora de fin"
                      prepend-icon="mdi-clock-time-four-outline"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                  ></v-text-field>
                </template>
                <v-time-picker
                    v-if="menu3"
                    v-model="startTime"
                    full-width
                    @click:minute="$refs.menu.save(time)"
                ></v-time-picker>
              </v-menu>
            </v-card-text>
            <v-card-text class="pb-0 pt-0">
              <v-menu
                  ref="menu"
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  :return-value.sync="time"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                      v-model="endTime"
                      label="Nueva hora de fin"
                      prepend-icon="mdi-clock-time-four-outline"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                  ></v-text-field>
                </template>
                <v-time-picker
                    v-if="menu2"
                    v-model="endTime"
                    full-width
                    @click:minute="$refs.menu.save(time)"
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
                @click="createMeet"
        >Ingresar a la sesion</v-btn>
      </div>
    </div>
  </div>
</template>

<script>

import LessonApiService from '../../services/lesson-api.service'
import Vue from 'vue'
import VueGapi from 'vue-gapi'

Vue.use(VueGapi, {
  apiKey: 'AIzaSyAu6PEqcKVvXdFwV-EnFKhOMlHVjNrb9Z4',
  clientId: '437532304249-udd962otmcipe2jau8i1osbljgje1jhh.apps.googleusercontent.com',
  discoveryDocs: ['https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
  scope: 'https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events',
})
export default {
  name: "seeSpecificWorkshop",
  data: () => ({
    date: '',
    time: '20:19',
    menu: false,
    menu1: false,
    modal: false,
    menu2: false,
    menu3: false,
    workshop:{},
    dialog: false,
    editedIndex: -1,
    startTime:'',
    endTime: '',
    isoStartDate:'',
    isoEndDate:'',
  }),
  async created() {
    this.retrieveWorkshop();
  },
  computed: {
    fromDateDisp() {
      return this.fromDateVal;
    },
    fromTimeDisp(){
      return this.fromTimeVal;
    },
  },
  methods:{
    createMeet() {


      this.$gapi.login().then(() => {
        this.$gapi.getGapiClient().then((gapi) => {
          let request = gapi.client.calendar.events.insert(
          {
            "calendarId": "primary",
              "conferenceDataVersion": 1,
              "sendNotifications": true,
              "sendUpdates": "all",
              "resource": {
            "conferenceData": {
              "createRequest": {
                "requestId": "sample123",
                    "conferenceSolutionKey": {
                  "type": "hangoutsMeet"
                }
              }
            },
            "end": {
              "dateTime": "2021-07-01T19:00:00.805Z"
            },
            "start": {
              "dateTime": "2021-07-01T18:00:00.805Z"
            },
            "anyoneCanAddSelf": true,
                "description": "reunion de prueba",
                "attendees": [
              {"email": "brigittemmendezpastor@gmail.com"},
              {"email": "josiasolaya2016@gmail.com"},
            ],
                "summary": "la reu de fisica III"
          }
          });

          request.execute(function (event) {
            console.log(event);
            window.open(event.htmlLink, '_blank');
          });
        })

      });
    },
    save() {
      this.isoStartDate = this.date +'T'+this.startTime+':00.000Z';
      this.isoEndDate = this.date +'T'+this.endTime+':00.000Z';
      let startDate = new Date(this.isoStartDate);
      let endDate = new Date(this.isoEndDate);
      let apiFormatIsoStart = startDate.toISOString().replace(/:/g,'%3A');
      let apiFormatIsoEnd = endDate.toISOString().replace(/:/g,'%3A');

      LessonApiService.update(this.workshop.id, apiFormatIsoStart, apiFormatIsoEnd)
          .then(() => {
            this.dialog = false
            console.log("Actualizado con exito");
            this.retrieveWorkshop();
          })
          .catch(e => {
            console.log(e);
          })
    },
    all(){
      this.authenticate();
      this.execute();
    },
    authenticate() {
        return this.$gapi.getAuthInstance()
            .then(function() { console.log("Sign-in successful"); },
          function(err) { console.error("Error signing in", err); });
    },
    execute() {
      return this.$gapi.getGapiClient().then((gapi)=>{
        gapi.calendar.events.insert({
          "calendarId": "primary",
          "conferenceDataVersion": 1,
          "sendNotifications": true,
          "sendUpdates": "all",
          "resource": {
            "conferenceData": {
              "createRequest": {
                "requestId": "sample123",
                "conferenceSolutionKey": {
                  "type": "hangoutsMeet"
                }
              }
            },
            "end": {
              "dateTime": "2021-06-24T12:43:47.805Z"
            },
            "start": {
              "dateTime": "2021-06-24T06:43:47.805Z"
            },
            "anyoneCanAddSelf": true,
            "description": "reunion de prueba",
            "attendees": [
              {"email": "brigittemmendezpastor@gmail.com"},
              {"email": "julissakarol2012@gmail.com"},
              {"email": "lucas.moreno.olivos@gmail.com"},
            ],
            "summary": "la reu de fisica III"
          }
        })
            .then(function(response) {
                  // Handle the results here (response.result has the parsed body).
                  console.log("Response", response);
                },
                function(err) { console.error("Execute error", err); });
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
    formatNormalTime(isoDate){
      let date = new Date(isoDate)
      let hours = date.getHours();
      let minutes = date.getMinutes();
      minutes = minutes < 10 ? '0'+minutes : minutes;
      let strTime =  hours + ':' + minutes;
      return strTime;
    },
    navigateToSeeAttendance(){
      this.$router.push({name: 'assistance'});
    },
    async retrieveWorkshop(){
      try {
        let id = this.$route.params.workshopId
        let response = await LessonApiService.getWorkshopById(id)
        this.workshop = response.data;
        this.date = this.formatDateIsoDate(this.workshop.startDate);
        this.startTime = this.formatNormalTime(this.workshop.startDate);
        this.endTime = this.formatNormalTime(this.workshop.endDate);
      }
      catch (e) {
        alert("Taller no encontrado")
        this.$router.push('/')
      }
    }
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