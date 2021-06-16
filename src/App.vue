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
  data: () => ({
      drawer: false,
      group: null,
    }),
  watch: {
    group() {
      this.drawer = false
    }
  }
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