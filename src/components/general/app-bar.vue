<template>

</template>

<script>
export default {
  name: "app-bar",
  data: () => ({
      drawer: true,
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

</style>