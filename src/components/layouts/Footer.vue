<template>
  <v-footer padless>
    <v-col class="text-center" cols="12">
      <v-avatar>
        <img :src="logo" alt="logo" />
      </v-avatar>
      <strong>DoorBook App</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "MainFooter",
  computed: {
    logo() {
      return this.$store.state.mainLogo;
    },
  },
};
</script>

<style scoped>
.logo {
  width: 230px;
}
</style>