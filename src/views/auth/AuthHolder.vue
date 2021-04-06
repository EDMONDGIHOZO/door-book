<template>
  <div class="authentication">
    <top-bar />
    <div flat class="auth-card" id="authy">
      <router-view />
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/public/Topbar.vue";
export default {
  name: "authentication",
  components: {
    "top-bar": TopBar,
  },
};
</script>

<style scoped>
.auth-card {
  max-height: 350px;
  max-width: 420px;
  background: linear-gradient(
    166.08deg,
    rgba(229, 229, 229, 0.384) 9.95%,
    rgba(251, 195, 52, 0.288) 95.21%
  );
  z-index: 2;
  backdrop-filter: blur(3rem);
  backdrop-filter: drop-shadow(4px 1px 10px rgb(238, 238, 238));
  backdrop-filter: opacity(20%);
  padding: 30px;
  box-sizing: border-box;
  margin:auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 20px;
  box-shadow: 3px 5px 0px #fec534;
}

.auth-card:hover{
  background: linear-gradient(
    16.08deg,
    rgba(229, 229, 229, 0.53) 9.95%,
    rgba(251, 195, 52, 0.185) 95.21%
  );
}
</style>
