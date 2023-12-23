<script setup lang="ts">
const year = new Date().getFullYear()
</script>
<template>
  <footer class="absolute text-white w-screen bottom-0 text-center z-[1] py-2" id="footer">
    <span>©{{ year }} copyright</span>&nbsp;
    <a class="hover:text-cyan-400" href="https://www.luola.me">罗拉哟</a>&nbsp;
    <a class="hover:text-cyan-400" href="https://beian.miit.gov.cn/">赣ICP备2023014999号</a>
  </footer>
</template>
<style scoped>
#footer {
  background: rgba(0, 0, 0, 0.25);
}
</style>