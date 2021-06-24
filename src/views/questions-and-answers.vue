<template>
  <v-container class="container">
    <div class="title"><h3>Questions & Answers</h3></div>
    <div class="list-container">
      <v-list class="list" v-for="name in qandaArray" :key="name.id">
        <v-list-item v-bind:href="'#'+name.id">{{name.id}}. {{name.title}}</v-list-item>
        <v-divider></v-divider>

      </v-list>
    </div>

    <div class="answers-container" v-for="name in qandaArray" :key="name.id">
      <v-card class="answer-card elevation-1" shaped v-bind:id="name.id">
        <v-card-title class="title-answer white--text">{{name.title}}</v-card-title>
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
  name: "questions-and-answers",
  data: function () {
    return {
      qandaArray: [{id:1, title:'¿Qué es TPC?', link:'"#new"'},
        {id:2, title:'¿Por dónde empiezo?' },
        {id:3, title:'¿Quiénes pueden usar la plataforma?' },
        {id:4, title:'Conoce los beneficios de TPC' },
        {id:5, title:'¿El servicio esta dirigido solamente para universidades?' },
        {id:6, title:'¿Cuáles son los medios de pago?' },
        {id:7, title:'Quiero aportar ideas de mejora' },
        {id:8, title:'¿Cómo modificar mi informacion personal?' },
        {id:9, title:'¿Deseo cancelar mi plan TPC?' },
        {id:10, title:'¿Buscas una guía practica sobre TPC?' } ]
    }
  }
}
</script>

<style scoped>
.container {
  align-content: center;
  justify-content: center;
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