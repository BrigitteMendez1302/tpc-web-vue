<template>
  <v-navigation-drawer v-model="drawer" fixed app clipped
                       color="#2E608F"
                       class="drawer-style">
    <v-list dense>
      <v-list-item-group
          v-model="selectedItem"
          color="#0A1128"
      >
        <v-subheader class="font-weight-regular white--text text-subtitle-1">Principal</v-subheader>

        <v-list-item
            v-for="(item, i) in items"
            :key="i"
            @click="onItemSelected(i)"
        >
          <v-list-item-icon>
<!--            <v-icon v-text="item.icon" color="white"></v-icon>-->
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="font-weight-light white--text" v-text="item.text"></v-list-item-title>
          </v-list-item-content>

        </v-list-item>

      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "navigation-drawer-tutor",
  props: {
    drawer: Boolean
  },
  data: () => ({
    selectedItem: 1,
    items: [
      { text: 'Inicio', icon: 'mdi-bookmark', to: '/tutor' },
      { text: 'Mi calendario', icon: 'mdi-bookmark', to: '/tutor/calendar' },
      { text: 'Mis tutorías', icon: 'mdi-bookmark', to: '/tutor/tutorial' },
      { text: 'Mis talleres', icon: 'mdi-bookmark', to: '/tutor/workshops' },
      { text: 'Rendimiento', icon: 'mdi-bookmark', to: '/tutor/performance' },
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