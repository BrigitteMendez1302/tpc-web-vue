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
<!--      <router-view></router-view>-->
      <VerReportes></VerReportes>
    </v-main>

    <v-footer>
    </v-footer>

  </v-app>
</template>

<script>
import NavigationDrawer from "./components/general/navigation-drawer-coordinator";
import VerReportes from "./views/coordinator/detalle-queja";

export default {
  name: 'App',
  components: {
    VerReportes,
    NavigationDrawer,
  },
  data() {
    return {
      drawer: true,
    }
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  }
}
</script>

<style scoped>

</style>