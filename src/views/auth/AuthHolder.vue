<template>
  <div class="authentication">
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
  background: linear-gradient(
    166.08deg,
    rgba(229, 229, 229, 0.53) 9.95%,
    rgba(251, 195, 52, 0.4) 95.21%
  );
  z-index: 2;
  backdrop-filter: blur(3rem);
  backdrop-filter: drop-shadow(4px 1px 10px rgb(238, 238, 238));
  backdrop-filter: opacity(20%);
  padding: 30px;
  box-sizing: border-box;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 20px;
  box-shadow: 3px 5px 0px #fec534;
}
</style>
