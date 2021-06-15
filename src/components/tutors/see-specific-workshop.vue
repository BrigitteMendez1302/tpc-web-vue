<template>
  <div>
    <h1 class="ml-5 mt-5">Curso</h1>
    <div>
      <div class="workshop-details ml-5 mr-5 pa-5">
        <h2 class="ft-20">Detalles de la clase</h2>
        <div class="pl-5">
          <h3>Tema: taller.tema</h3>
          <h3>Fecha: taller.fecha</h3>
          <h3>Inicio de clase: taller.startdate</h3>
          <h3>Fin de clase: taller.enddate</h3>
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
                  text
                  @click="dialog = false"
              >
                Guardar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-btn class=" btn-tpc btn-tpc-r ml-2" color="white">Ingresar a la sesion</v-btn>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "seeSpecificWorkshop",
  data: () => ({
    dialog: false,
    fromDateMenu: false,
    fromDateVal: null,
    fromTimeMenu: false,
    fromTimeVal: null,
    fromTimeEndMenu: false,
    fromTimeEndVal: null,
  }),
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
  font-weight: lighter;
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