<template>
  <v-navigation-drawer v-model="drawer" fixed app clipped
                       color="#2E608F"
                       class="drawer-style">
    <v-list dense>
      <v-list-item-group
          v-model="selectedItem"
          color="#0A1128">

        <v-subheader class="font-weight-regular white--text text-subtitle-1">Principal</v-subheader>

        <v-list-item
            v-for="(item, key) in items"
            :key="key"
            @click="onItemSelected(key)">

          <v-list-item-icon>
            <!--<v-icon color="white">{{ item.icon }}</v-icon>-->
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="font-weight-light white--text">{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "navigation-drawer-student",
  props: {
    drawer: Boolean
  },
  data: () => ({
    selectedItem: 1,
    items: [
      { text: 'Inicio', icon: 'mdi-bookmark', to: '/student' },
      { text: 'Reservar tutoria', icon: 'mdi-bookmark', to: '/student/tutorial' },
      { text: 'Reservar taller', icon: 'mdi-bookmark', to: '/student/workshops' },
      { text: 'Mis reservas', icon: 'mdi-bookmark', to: '/student/lessons' },
      { text: 'Horarios disponibles', icon: 'mdi-bookmark', to: '/student/calendar' },
      ],
    oItems: [
      { text: 'Guía de usuario', icon: 'mdi-bookmark', to: '/guide' },
      { text: 'Preguntas frecuentes', icon: 'mdi-bookmark', to: '/pf' },
    ],
  }),
  methods: {
    onItemSelected(i) {
      this.$router.push(this.items[i].to);
    }
  }
}
</script>

<style scoped>

</style>