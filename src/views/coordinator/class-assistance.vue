<template>
  <v-card class="space">

    <v-container class="assistence">
      <div id="title-assistence"><v-icon>mdi-arrow-left</v-icon> Asistencia</div>
      <v-spacer class="divide"></v-spacer>

      <div class="information">

        <div class="box">
          <div class="percent">
            <svg>
              <circle cx="72" cy="72" r="60"></circle>
              <circle cx="72" cy="72" r="60"></circle>
            </svg>

            <div class="number">
              <h2>75<span>%</span></h2>
            </div>

          </div>

          <div class="export"><v-btn class="btn-export">Exportar</v-btn></div>

        </div>

        <div class="container-student">

          <div class="assistence-student">
            <div class="space-student-hour"><p class="name">Alumno: </p>  <p>Codigo: </p></div>
            <div class="space-student-hour"><p>Hora de entrada: </p><p>Hora de salida: </p></div>
          </div>

          <div class="assistence-student">
            <div class="space-student-hour"><p class="name">Alumno: </p>  <p>Codigo: </p></div>
            <div class="space-student-hour"><p>Hora de entrada: </p>  <p>Hora de salida: </p></div>
          </div>

          <div class="assistence-student">
            <div class="space-student-hour"><p class="name">Alumno: </p>  <p>Codigo: </p></div>
            <div class="space-student-hour"><p>Hora de entrada: </p>  <p>Hora de salida: </p></div>
          </div>

          <div class="assistence-student">
            <div class="space-student-hour"><p class="name">Alumno: </p>  <p>Codigo: </p></div>
            <div class="space-student-hour"><p>Hora de entrada: </p>  <p>Hora de salida: </p></div>
          </div>

        </div>
      </div>
    </v-container>
  </v-card>

</template>

<script>
export default {
  name: "class-assistance"
}
</script>

<style scoped>
* {
  font-family: "Roboto", sans-serif;
}

.space {
  display: flex;
  height: 100%;
  width: 100%;

}

.assistence {
  height: 100%;
  width: 80%;

}

.information{
  width: 100%;
  height: 470px;
  margin-left: 10px;
}

#title-assistence {
  font-family: Roboto;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  margin-left: 10px;
}

.divide {
  height: 10px;
}

.box {
  display: flex;
  justify-content: center; /*centra horizontal*/
  align-items: center; /*centra vertical*/
  height: 160px;

}

.percent {
  height: 155px;
  width: 500px;

  display: flex;
  justify-content: center; /*centra horizontal*/
}

.box .percent svg {
  position: relative;
  width: 150px;
  height: 150px;
  stroke-linecap: round;
}

.box .percent svg circle:nth-child(1) {
  stroke-dashoffset: 0;
  stroke: #f3f3f3;
}

.box .percent svg circle:nth-child(2) {
  stroke-dashoffset: calc(377 - (377 * 75) / 100);
  stroke: #00C48C;
}

.box .percent svg circle {
  fill: none;
  stroke-width: 10px;
  stroke: black;

  stroke-dasharray: 377;
  stroke-dashoffset: 377;

}

.box .percent .number {
  position: absolute;
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0A1128;
}

.box .percent .number h2 {
  font-size: 35px;
}

.box .percent .number span {
  font-size: 20px;
}

.container-student {
  height: 300px;

  display: flex;
  flex-flow: row wrap; /*los separa en filas*/
  justify-content: center; /*centra horizontal*/
  align-items: center; /*centra vertical*/
}

.assistence-student {
  height: 66px;
  width: 950px;

  display: flex;
  justify-content: center; /*centra horizontal*/
  align-items: center; /*centra vertical*/

  background: rgba(247, 249, 250, 1);

}

.space-student-hour {
  width: 425px;
  height: 45px;

  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
}

.name {
  color: #0E09F4F2;
}

.space-student-hour p:nth-child(2) {
  margin-top: -13px;
}

.export {
  position: absolute;
  height: 120px;
  width: 250px;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}

.btn-export {
  width: 68px;
  height: 22px;

  font-family: Roboto;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  text-align: center;
  color: #1F86FF;

  background-color: #FFFFFF;
  border: 1px solid #1F86FF;
  border-radius: 5px;
}


</style>