<template>
  <v-container class="container">
    <div class="title"><h3>Questions & Answers</h3></div>
    <div class="list-container">
      <v-list class="list">
        <v-list-item>¿Qué es TPC?</v-list-item>
        <v-divider></v-divider>
        <v-list-item>¿Por dónde empiezo?</v-list-item>
        <v-divider></v-divider>
        <v-list-item>¿Quiénes pueden usar la plataforma?</v-list-item>
        <v-divider></v-divider>
        <v-list-item>Conoce los beneficios de TPC</v-list-item>
        <v-divider></v-divider>
        <v-list-item>¿El servicio esta dirigido solamente para universidades?</v-list-item>
        <v-divider></v-divider>

        <v-list-item>¿Cuáles son los medios de pago?</v-list-item>
        <v-divider></v-divider>
        <v-list-item>Quiero aportar ideas de mejora</v-list-item>
        <v-divider></v-divider>
        <v-list-item>¿Cómo modificar mi informacion personal?</v-list-item>
        <v-divider></v-divider>
        <v-list-item>¿Deseo cancelar mi plan TPC?</v-list-item>
        <v-divider></v-divider>
        <v-list-item>¿Buscas una guía practica sobre TPC?</v-list-item>
        <v-divider></v-divider>

      </v-list>
    </div>

    <div class="answers-container">
      <v-card class="answer-card elevation-1" shaped>
        <v-card-title class="title-answer white--text">¿Por dónde empiezo?</v-card-title>
        <v-card-text class="text-answer black--text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias assumenda beatae consequatur,
          deserunt ea earum, esse fugiat incidunt laboriosam molestias natus porro qui recusandae sit tempora totam vel veritatis?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto, aspernatur dolor eius eligendi iste labore modi molestias porro
          repellendus sed similique tempora, temporibus? Eligendi labore pariatur ratione sint voluptates!
        </v-card-text>
        <v-card-subtitle class="link black--text font-weight-medium">Go to page linked</v-card-subtitle>
      </v-card>


    </div>
  </v-container>
</template>

<script>
export default {
  name: "questions-and-answers"
}
</script>

<style scoped>
.container {
  align-content: center;
  justify-content: center;
  border: 1px solid green;
  margin-top: 20px;
}

.title {
  height: 40px;
  width: 100%;

  text-align: center;
  border-bottom: 1px solid #696969;
  font-size: 10px;
  font-weight: bold;
  color: #0A1128;
}

.list-container {
  box-sizing: border-box;
  margin: 0 auto !important;
  max-width: 1200px;
  padding: 0 0.5em;
  position: relative;
}

.list {
  column-count: 2;
  margin: 10px 0 0;
  padding: 0;
  text-align: left;
}

.answers-container {
  max-width: 750px;
  margin: auto;
  margin-top: 60px;
  text-align: left;
}

.answer-card {
}

.title-answer {
  width: 100%;
  background-color: #0A1128;
}

.text-answer {
  margin-top: 30px;
}
</style>