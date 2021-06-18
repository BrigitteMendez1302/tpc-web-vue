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

        <v-subheader class="font-weight-regular white--text text-subtitle-1">Consultas</v-subheader>

        <v-list-item
            v-for="(item, i) in oItems"
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
  name: "navigation-drawer",
  props: {
    drawer: Boolean
  },
  data: () => ({
    selectedItem: 1,
    items: [
      { text: 'Inicio', icon: 'mdi-bookmark', to: '/' },
      { text: 'Gestionar mis horarios', icon: 'mdi-bookmark', to: '/' },
      { text: 'Programar horario', icon: 'mdi-bookmark', to: '/' },
      { text: 'Ver reportes', icon: 'mdi-bookmark', to: '/' },
      { text: 'Enviar correo', icon: 'mdi-bookmark', to: '/' },
      ],
    oItems: [
      { text: 'Guía de usuario', icon: 'mdi-bookmark', to: '/' },
      { text: 'Preguntas frecuentes', icon: 'mdi-bookmark', to: '/' },
    ],
  }),
  methods: {
    onItemSelected(i) {
      this.$emit('item-selected', i);
    }
  }
}
</script>

<style scoped>

</style>