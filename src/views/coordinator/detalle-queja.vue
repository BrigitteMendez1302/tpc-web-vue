<template>
  <v-container>
    <v-container class="d-flex">
      <!--      <v-btn class="ma-2 white" elevation="0" icon>-->
      <!--        <v-icon>mdi-chevron-left</v-icon>-->
      <!--      </v-btn>-->
      <h1 class="font-weight-bold" >Detalle de queja</h1>

    </v-container>

    <v-container class="contenido elevation-2" style="border-radius: 10px">

      <v-container>
        <v-row class="width-50">
          <p class="width-50">Curso:</p>
          <p class="dato width-50">Texto</p>
        </v-row>

        <v-row class="width-50">
          <p class="width-50">Tutor:</p>
          <p class="dato width-50">Texto</p>
        </v-row>

        <v-row class="width-50">
          <p class="width-50">Fecha:</p>
          <p class="dato width-50">Texto</p>
        </v-row>

        <v-row class="width-50">
          <p class="width-50">Hora de inicio:</p>
          <p class="dato width-50">Texto</p>
        </v-row>

        <v-row class="width-50">
          <p class="width-50">Hora de fin:</p>
          <p class="dato width-50">Texto</p>
        </v-row>
      </v-container>

      <v-container>
        <v-row>
          <p style="width: 25%">Asunto:</p>
          <p style="width: 75%" class="dato">Texto</p>
        </v-row>

        <v-row>
          <p style="width: 25%">Descripción:</p>
          <p style="width: 75%" class="dato height-100">Lorem</p>
        </v-row>
      </v-container>

    </v-container>

  </v-container>
</template>

<script>
export default {
  name: "detalle-queja",
  item: [
    {
      courseName: 'Programación',
      tutorName: 'Programación',
      starDate: '22/06/2021 13:00:00',
      endDate: '22/06/2021 15:00:00',
      firstName: 'Brigitte',
      lastName: 'Méndez',
      subject: 'Conexión inestable durante la clase',
      date: '22/06/2021 15:03:00',
      content: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
    },
  ],
}
</script>

<style scoped>
  .dato {
    background-color: #B0C1D1;
    border-radius: 3px;
    padding: 3px;
  }
  .contenido {
    background-color: #F3F9FA;
  }
  .width-50 {
    width: 50%;
  }
  .height-100{
    height: 100px;
  }
  p {
    font-weight: normal;
  }
</style>