<template>
  <div class="register">
    <v-row no-gutters>
      <v-col cols="5" class="hidden-sm-and-down">
        <div class="comp form-container">
          <v-img
            :src="logo"
            class="logo"
            max-width="150"
            max-height="150"
          ></v-img>
          <h1>DOORBOOK</h1>
        </div>
      </v-col>
      <v-col cols="12" md="7">
        <div class="comp">
          <h4 class="text-center">Register your Place</h4>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "register",
  computed: {
    logo() {
      return this.$store.state.mainLogo;
    },
  },
};
</script>
