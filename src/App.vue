<template>

  <router-view></router-view>

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