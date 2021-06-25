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
        <v-card-text class="text-answer black--text">{{name.content}}
        </v-card-text>
        <v-card-subtitle class="link black--text font-weight-medium">
          <a href="https://brigittemendez1302.github.io/TPC-OpenSource/" target="_blank">
            {{name.sub}}
          </a>
        </v-card-subtitle>
      </v-card>

    </div>
  </v-container>
</template>

<script>
export default {
  name: "questions-and-answers",
  data: function () {
    return {
      qandaArray: [{id:1, title:'¿Qué es TPC?', content: 'TPC es una plataforma creada con el principal objetivo de generar una excelente experiencia de aprendizaje online, ' +
            'a traves de la mejora de procesos de enseñanza, brindando una plataforma que permita la interacción de estudiantes y tutores en sus respectivas clases.', sub: 'Obtener más información' },
        {id:2, title:'¿Por qué trabajar con TPC?', content: 'TPC se diferencia de las demas plataformas, debido a su alto nivel de calidad en cuanto al servicio ofrecido.' +
              'TPC implementa nuevas funcionalidades que estan orientadas al manejo de la información.', sub: 'Obtener más información'},
        {id:3, title:'Pilares de TPC', content: 'El servicio de TPC esta especializado para clases como talleres y tutorías.' +
              'En base a la enseñanza especifica de estas clases, TPC garantiza cumplir con los pilares de rapidez, accesibilidad y simplicidad.', sub: 'Pilares de TPC'},
        {id:4, title:'Conoce los beneficios de TPC', content: 'La plataforma brinda un servicio y experiencia de calidad, ' +
              'TPC trabaja con datos reales, de la demanda y oferta de los cursos.' +
              'TPC realiza calculos estadisticos de la eficiencia de los servicios de tutorias y talleres.' +
              'TPC realiza seguimiento del desempeño de los tutores.', sub: 'Beneficios de TPC'},
        {id:5, title:'¿Cuáles son los planes de TPC?', content: 'Nuestra plataforma de enseñanza virtual ofrece dos planes. El plan Basic gratuito permite' +
              'la creación, actualización y seguimiento de las reservas. Acceso a videoconferencias, entre otras funcionalidades básicas.' +
              'El Plan Pro Ilimitado incluye las funcionalidades básicas incluidas. Seguimiento del rendimiento de los docentes.' +
              'Información estadistica relacionada a la materia, entre más funciones avanzadas.', sub: 'Visualizar los planes'}]
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