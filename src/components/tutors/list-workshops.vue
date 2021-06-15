<template>
  <div>
    <v-list subheader>
      <h1>Mis talleres</h1>
      <v-subheader class="subtitle-1" >Lunes 14 de Junio</v-subheader>

      <v-list-item class=" ma-3 content"
          v-for="chat in recent"
          :key="chat.title"
      >
        <v-list-item-content>
          <v-list-item-title class="m-list-item-title">tutor.curso</v-list-item-title>
        </v-list-item-content>

        <v-list-item-content>
            <v-list-item-title class="m-list-item-title" >tutor.horario</v-list-item-title>
        </v-list-item-content>
        <!--        v-text="chat.title"-->
        <v-list-item-content>
          <div>
            <v-btn class="ml-percent" color="white">Detalles</v-btn>
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list subheader>
      <v-subheader class="subtitle-1">Martes 15 de Junio</v-subheader>
      <v-list-item class=" ma-3 content"
                   v-for="chat in recent"
                   :key="chat.title"
      >
        <v-list-item-content>
          <v-list-item-title class="m-list-item-title">tutor.curso</v-list-item-title>
        </v-list-item-content>

        <v-list-item-content>
          <v-list-item-title class="m-list-item-title" >tutor.horario</v-list-item-title>
        </v-list-item-content>
        <!--        v-text="chat.title"-->
        <v-list-item-content>
          <div>
            <v-btn class="ml-percent" color="white">Detalles</v-btn>
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "listWorkshops",
  data: () => ({
    recent: [
      {
        active: true,
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Jason Oner',
      },
      {
        active: true,
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Mike Carlson',
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Cindy Baker',
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Ali Connors',
      },
    ],
    previous: [{
      title: 'Travis Howard',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
    }],
  }),
}
</script>

<style scoped>
/*.space-reduce{
  margin: 5px;
}*/
.f-end{
  align-content: flex-end;
  justify-content: flex-start;
}
.m-list-item-title{
  font-size: 15px;
}
h1{
  font-size: 20px;
  margin-top: 1em;
  margin-left: .7em;
}
.content{
  background-color: #F3F9FA;
  /*border: 5px solid red;*/
  border-radius: .3em;
}
.ml-percent{
  margin-left: 25%;
  min-width: 60px;
  height: 30px !important;
  color: #1282A2;
  border: 1px solid #1282A2 !important;
}
@media screen and (max-width: 500px) {
  .ml-percent{
    margin-left: 0%;
  }
}
</style>