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

          <v-list-item-title class="text-h6">
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
            v-for="item in items"
            :key="item.title"
            link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.principal }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list-item>
        <v-list-item-content>

          <v-list-item-title class="text-h6">
            <br> <br>
            Consultas
          </v-list-item-title>

        </v-list-item-content>
      </v-list-item>
      <!--  -->
    </v-navigation-drawer>



    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'marco-general-student',
  data: () => ({
    drawer: null,
    items: [
      {principal: 'Inicio', icon: 'mdi-view-dashboard'},
      {principal: 'Horarios disponibles', icon: 'mdi-image'},
      {principal: 'Mis reservas', icon: 'mdi-help-box'},
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

#side-bar{
  background: #034078D4;

}
</style>