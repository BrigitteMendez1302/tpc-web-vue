<template>

  <v-card
    class="mx-auto"
    width="400"
>
  <v-list align="">
    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-home</v-icon>
      </v-list-item-icon>

      <v-list-item-title>Home</v-list-item-title>
    </v-list-item>

    <v-list-group
        :value="true"
        prepend-icon="mdi-account-circle"
    >
      <template v-slot:activator>
        <v-list-item-title>Users</v-list-item-title>
      </template>

      <v-list-group
          :value="true"
          no-action
          sub-group
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title> {{ displaycourses.description}}</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
            v-for="([title, icon], i) in admins"
            :key="i"
            link

        >
          <v-list-item-title v-text="title"></v-list-item-title>

          <v-list-item-icon>
            <v-icon v-text="icon"></v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-group>

      <v-list-group
          no-action
          sub-group
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>Actions</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
            v-for="([title, icon], i) in cruds"
            :key="i"
            link
        >
          <v-list-item-title v-text="title"></v-list-item-title>

          <v-list-item-icon>
            <v-icon v-text="icon"></v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-group>
    </v-list-group>
  </v-list>
</v-card>


</template>

<script>

import TpcApiService from "../../services/tpc-api.service";

export default {
  name: "reservar-tutoria",
  data: function () {
    return {
      user: {},
      courses: [],
      displaycourses: [],
    }
  },
  async beforeCreate() {
    try {
      let id = this.$route.params.id
      let response = (await TpcApiService.getUserById(id))
      this.user = response.data
    } catch (e) {
      alert("User not found")
      this.$router.push('/')
    }
  },
  methods: {

    methods: {
      async retrieveCourses() {
        let id = this.$route.params.id
        let response = (await TpcApiService.getCoursesByUserId(id))
        this.courses = response.data
            .then(response => {
              this.courses = response.data;
              this.displaycourses = response.data.map(this.getDisplayTutorial);
            })
            .catch((e) => {
              console.log(e);
            });
      },

      getDisplayTutorial(course) {
        return {
          id: course.id,
          name: course.name,
          description: course.description,
          credits: course.credits,


        };
      }


    }
  }
}

</script>

<style scoped>

</style>