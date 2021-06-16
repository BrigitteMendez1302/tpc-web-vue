<!--<template>
  <router-view></router-view>
</template>-->
<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" color="#2D5F8D" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Vuetify Todo
          </v-list-item-title>
          <v-list-item-subtitle>
            Best Todo ever
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
          dense
          nav
      >
        <v-list-item

            v-for="item in items"
            :to = "item.to"
            :key="item.title"
            link
        >
          <v-list-item-icon class="c-white">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content class="c-white">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
        app
        color="#0A1128"
        dark
    >

      <v-app-bar-nav-icon @click="drawer=!drawer" ></v-app-bar-nav-icon>

      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({ drawer: null,
    items: [
      { title: 'Mi calendario', icon: 'mdi-format-list-checks', to: '/' },
      { title: 'Inicio', icon: 'mdi-format-list-checks', to: '/tutors/1' },
      { title: 'Mis reservas', icon: 'mdi-help-box', to: '/lessons' },
      { title: 'Buscar talleres', icon: 'mdi-help-box', to: '/findworkshops'},
      { title: 'Mis capacitaciones', icon: 'mdi-help-box', to: '/trainings' },
      { title: 'Rendimiento', icon: 'mdi-help-box', to: '/' },
      { title: 'Guia de usuario', icon: 'mdi-help-box', to: '/' },
      { title: 'Preguntas frecuenctes', icon: 'mdi-help-box', to: '/' },
    ],
  }),
}
</script>

<style scoped>

.c-white{
  color: white;
}
</style>