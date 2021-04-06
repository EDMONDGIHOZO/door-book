<template>
  <div class="login">
    <div class="auth-title">
      <h3>Login</h3>
    </div>
    <div class="auth-forms">
      <v-text-field
        label="email"
        type="text"
        rounded
        outlined
        dense
        background-color="white"
      >
      </v-text-field>
      <v-text-field
        label="password"
        type="password"
        rounded
        outlined
        dense
        background-color="white"
      >
      </v-text-field>
      <v-btn rounded depressed color="primary" class="black--text" block
        >Login</v-btn
      >
      <div class="forgot">
        <a href="forgot" class="forgot">forgot password?</a>
      </div>
    </div>
  </div>
</template>
<style scoped>
.forgot {
  padding: 4px;
  margin-top: 12px;
  text-align: right;
}


.forgot a {
  color: rgb(53, 53, 53);
}
</style>
