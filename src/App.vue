<template>
  <v-app light>
    <navigation-drawer-coordinator v-if="this.$store.state.user === 3" :drawer="drawer"></navigation-drawer-coordinator>
    <navigation-drawer-student v-if="this.$store.state.user === 1" :drawer="drawer"></navigation-drawer-student>
    <navigation-drawer-tutor v-if="this.$store.state.user === 2" :drawer="drawer"></navigation-drawer-tutor>
    <v-app-bar v-if="$store.state.logged" fixed app light clipped-left color="#0A1128" class="elevation-2">
      <v-app-bar-nav-icon @click="toggleDrawer" class="white--text"></v-app-bar-nav-icon>
      <v-container>
        <v-row>
          <v-col>
            <v-toolbar-title class="white--text font-weight-bold font-italic text-center text-h4">TPC</v-toolbar-title>
          </v-col>
        </v-row>
      </v-container>


      <v-spacer></v-spacer>

      <v-btn icon color="white" class="mx-5" @click=" $store.state.user === 1 ? $router.push('/student/profile') :
                                                      $store.state.user === 2 ? $router.push('/tutor/profile') :
                                                      $router.push('/coordinator/profile') ">
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="m-main">
          <transition name="slide" mode="out-in">
          <router-view>

          </router-view>
        </transition>
    </v-main>

    <v-footer>
    </v-footer>
  </v-app>
</template>

<script>
import NavigationDrawerCoordinator from "./components/generals/navigation-drawer-coordinator";
import NavigationDrawerStudent from "@/components/generals/navigation-drawer-student";
import NavigationDrawerTutor from "@/components/generals/navigation-drawer-tutor";
export default {
  name: 'App',
  components: {
    NavigationDrawerTutor,
    NavigationDrawerStudent,
    NavigationDrawerCoordinator,
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
  data: () => ({
    drawer: false,
  }),
};
</script>
<style>
.slide-enter-active,
.slide-leave-active{
  transition: opacity 0.2s, transform 0.2s;
}
.slide-enter,
.slide-leave-to{
  opacity: 0;
  transform: translateY(30%);
}
</style>
