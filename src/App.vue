<template>
  <v-app>
    <v-main>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </v-main>
     <Footer />
  </v-app>
</template>

<script>
import Footer from "@/components/layouts/Footer.vue";
export default {
  name: "DoorBook",
  components: {
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>
#app {
  padding: 0;
  box-sizing: border-box;
  margin: auto;
  font-family: "Nunito", sans-serif;
}
</style>