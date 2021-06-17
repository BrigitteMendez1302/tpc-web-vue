<template>
  <v-app id="inspire">

    <v-app-bar id="toolbar-general" app>
      <v-app-bar-nav-icon color ="white" @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title id="title">TPC </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer id="side-bar"
                         v-model="drawer"
                         app
    >

      <v-list-item>
        <v-list-item-content>

          <v-list-item-title class="text-h6 text-color">
            <br> <br><br>
            Principal
          </v-list-item-title>

        </v-list-item-content>
      </v-list-item>


      <v-list
          dense
          nav
      >
        <v-list-item
            v-for="item in principales"
            :key="item.principal"
            link
        >

          <v-list-item-content>
            <v-list-item-title  class="text-color ">{{ item.principal }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list-item>
        <v-list-item-content>

          <v-list-item-title class="text-h6 text-color">
            <br> <br>
            Consultas
          </v-list-item-title>

        </v-list-item-content>
      </v-list-item>

      <v-list
          dense
          nav
      >
        <v-list-item
            v-for="item in consultas"
            :key="item.consulta"
            link

        >

          <v-list-item-content>
            <v-list-item-title  class="text-color">{{ item.consulta }} </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <!--  -->
    </v-navigation-drawer>
<main><reservar-tutoria></reservar-tutoria></main>

  </v-app>
</template>

<script>




import ReservarTutoria from "./reservar-tutoria";
export default {
  name: 'marco-general-student',
  components: {ReservarTutoria},
  data: () => ({
    drawer: null,
    principales: [
      {principal: 'Inicio'},
      {principal: 'Horarios disponibles'},
      {principal: 'Mis reservas'},
    ],
    consultas: [
      {consulta: 'Guia de usuario'},
      {consulta: 'Preguntas frecuentes'},

    ],

  }),

}
</script>

<style>

#title{
  font-size: 42px;
  color: white;
  font-style: italic;
  font-weight: 700;
  line-height: 49px;


}


#toolbar-general {
  width: 100%;
  height: 80px;
  background: #0A1128;
  display: flex;

}

.text-color{
  color: #F3F9FA;
  align-content: flex-end;

}
#side-bar{
  background: #034078D4;

}
</style>