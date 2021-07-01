<template>
  <v-container>
    <v-row>
      <v-col>
        {{ this.tipo }}
      </v-col>
      <v-col>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "TutorLessonQualification",
  props: ['tipo']
}
</script>

<style scoped>

</style>