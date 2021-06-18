<template>
  <v-app id="inspire">
     <v-app-bar
      color="#0A1128"
      app
      dark
    >
      <h1 class="font-weight-bold font-italic text-h2 mx-10">TPC</h1>

      <v-spacer></v-spacer>

      <v-btn icon class="mx-5">
        <v-icon>mdi-bell</v-icon>
      </v-btn>

      <v-btn icon class="mx-5">
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
<<<<<<< HEAD
  data: () => ({
      drawer: false,
      group: null,
    }),
  watch: {
    group() {
      this.drawer = false
    }
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
.nav
{
  width: 15%;
  color: white;
  background-color: rgba(3, 64, 120, 0.83);
}
.nav span
{
  text-align: left;
}
.nav ul
{
  text-align: center;
}
</style>