<script setup lang="ts">
import { ref } from 'vue'

const load = ref(false)
setTimeout(() => {
  load.value = true
}, 300)
</script>

<template>
  <div class="absolute h-screen w-screen overflow-hidden z-10">
    <div
      class="h-screen w-1/2 absolute bg-[#151320] top-0 left-0 animate__animated"
      :class="{ animate__fadeOutLeft: load }"
    ></div>
    <div
      class="h-screen w-1/2 absolute bg-[#151320] top-0 right-0 animate__animated"
      :class="{ animate__fadeOutRight: load }"
    ></div>
    <div
      class="flex flex-col h-screen w-full items-center justify-center absolute animate__animated"
      :class="{ animate__zoomOut: load }"
    >
      <div class="w-24 h-24 rounded-full perspective">
        <div class="children"></div>
        <div class="children"></div>
        <div class="children"></div>
      </div>
      <div class="mt-4 text-2xl text-sky-300/25 max-lg:text-xl">
        众里寻她千百度，那人却不在灯火阑珊处
      </div>
      <div class="mt-4 text-2xl text-sky-300/25 max-lg:text-xl">Loading...</div>
    </div>
  </div>
</template>

<style scoped>
.perspective {
  perspective: 800px;
}
.children {
  @apply absolute w-full h-full rounded-full;
}
.children:nth-child(1) {
  border-bottom: 6px solid #f13a8f;
  transform: rotateX(35deg) rotateY(-45deg);
  animation: rotate-one 1s linear infinite;
}
.children:nth-child(2) {
  border-right: 6px solid #4bc8e6;
  transform: rotateX(50deg) rotateY(10deg);
  animation: rotate-two 1s linear infinite;
}
.children:nth-child(3) {
  border-top: 6px solid #36f372;
  transform: rotateX(35deg) rotateY(55deg);
  animation: rotate-three 1s linear infinite;
}
@keyframes rotate-one {
  to {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}
@keyframes rotate-two {
  to {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}
@keyframes rotate-three {
  to {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}
</style>
