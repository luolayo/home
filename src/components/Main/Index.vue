<script setup lang="ts">
</script>
<template>
  <main
    class="z-[1] absolute text-white flex justify-center items-center w-screen h-screen flex-col"
  >
    <img src="https://q1.qlogo.cn/g?b=qq&nk=1205027142&s=100" alt="qq" class="rounded-full" />
    <div class="text-xl py-8">众里寻她千百度，那人不在灯火阑珊处</div>
    <div class="flex md:flex-row flex-wrap md:w-[500px] flex-col">
      <div class="card">
        <a href="/">
          <v-icon name="hi-home" />
          <span class="text">Home</span>
        </a>
      </div>
      <div class="card">
        <a href="https://qm.qq.com/cgi-bin/qm/qr?k=1JIJUtOxMtYu56q2tpVlV1VwG-R4lVsI&s=1#">
          <v-icon name="ri-qq-line" /> <span class="text">QQ</span></a
        >
      </div>
      <div class="card">
        <a href="https://www.luola.me">
          <v-icon name="fa-blogger-b" /> <span class="text">Blog</span></a
        >
      </div>
      <div class="card">
        <a href="https://github.com/luolayo/">
          <v-icon name="bi-github" /> <span class="text">Github</span></a
        >
      </div>
    </div>
  </main>
</template>
<style>
.card {
  @apply w-full h-12 flex bg-[#00000040] px-4 bg-clip-content justify-center items-center rounded-lg md:w-1/4 my-4 md:my-0;
}
.card:nth-child(1) {
  background-color: #4158d0;
  background-image: linear-gradient(43deg, #4158d0 0%, #c850c0 46%, #ffcc70 100%);
}
.card:nth-child(2) {
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
}
.card:nth-child(3) {
  background-color: #85ffbd;
  background-image: linear-gradient(45deg, #85ffbd 0%, #fffb7d 100%);
}
.card:nth-child(4) {
  background-color: #fbda61;
  background-image: linear-gradient(45deg, #fbda61 0%, #ff5acd 100%);
}
.text {
  @apply ml-2;
}
</style>