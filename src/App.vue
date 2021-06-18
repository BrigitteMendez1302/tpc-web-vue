<template>
  <v-app light>

    <NavigationDrawer :drawer="drawer"></NavigationDrawer>

    <v-app-bar fixed app light clipped-left color="#0A1128" class="elevation-2">
      <v-app-bar-nav-icon @click="toggleDrawer" class="white--text"></v-app-bar-nav-icon>

      <v-toolbar-title class="white--text font-weight-bold font-italic text-center text-h4">TPC</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon color="white" class="mx-5">
        <v-icon>mdi-bell</v-icon>
      </v-btn>

      <v-btn icon color="white" class="mx-5">
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
<<<<<<< HEAD
        <router-view></router-view>
    </v-main>
=======
      <router-view></router-view>
    </v-main>

    <v-footer>
    </v-footer>

>>>>>>> feature/components-julissa
  </v-app>
</template>

<script>
import NavigationDrawer from "./components/general/navigation-drawer-coordinator";

export default {
<<<<<<< HEAD
<<<<<<< HEAD
=======
  name: 'App',
  components: {
    NavigationDrawer,
  },
>>>>>>> feature/components-julissa
  data: () => ({
    drawer: true,
    group: null,
  }),
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  }
=======
  data: () => ({ drawer: null,
    items: [
      { title: 'Mi calendario', icon: 'mdi-format-list-checks', to: '/' },
      { title: 'Inicio', icon: 'mdi-format-list-checks', to: '/tutors/102' },
      { title: 'Mis reservas', icon: 'mdi-help-box', to: '/lesson/student/104' },
      { title: 'Buscar talleres', icon: 'mdi-help-box', to: '/lesson'},
      { title: 'Mis capacitaciones', icon: 'mdi-help-box', to: '/trainings' },
      { title: 'Rendimiento', icon: 'mdi-help-box', to: '/' },
      { title: 'Guia de usuario', icon: 'mdi-help-box', to: '/' },
      { title: 'Preguntas frecuenctes', icon: 'mdi-help-box', to: '/' },
    ],
  }),
>>>>>>> feature/components-Josias
}
</script>

<style scoped>

</style>