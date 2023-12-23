<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'
import { ref, watch } from 'vue'
import { useLoading } from '../../hooks/useLoading/Index'

const { loaded, loading } = useLoading()
const isLargeScreen = useMediaQuery('(min-width: 768px)')
const link = !isLargeScreen
  ? 'https://cdn.luola.me/handsome/pc_bg'
  : 'https://cdn.luola.me/handsome/phone_bg2'
const imgLoading = ref(false)
watch(loading, (newQuestion) => {
  if (newQuestion) imgLoading.value = true
})
</script>
<template>
  <div class="absolute left-0 top-0 -z-[1] h-screen w-screen">
    <img
      :src="link"
      alt="background"
      class="object-cover absolute top-0 left-0 h-full w-full animate__animated"
      :class="{ animate__pulse: imgLoading }"
      @load="loaded"
    />
  </div>
</template>