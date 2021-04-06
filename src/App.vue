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
  background-color: #FEC534;
  background-image: url('assets/authbg.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}
</style>