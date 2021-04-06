<template>
  <div class="container">
    <div flat class="auth-card">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "authentication",
};
</script>


<style scoped>
.auth-card {
  max-width: 420px;
  max-height: 350px;
  background: #f3f3f3;
  padding: 30px;
  box-sizing: border-box;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 20px;
  box-shadow: 3px 5px 0px #000000;
}
</style>