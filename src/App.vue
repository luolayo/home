<script setup lang="ts">
import Loading from './components/Loading/Index.vue'
import Background from './components/Background/Index.vue'
import Main from './components/Main/Index.vue'
import Footer from './components/footer/Index.vue'
import { useLoading } from '@/hooks/useLoading'
import { ref,watch } from 'vue'
const { loading } = useLoading()
const show = ref(true)
watch(loading, async () => {
  setTimeout(() => {
    show.value = false
  }, 500);
})
document.title = '罗拉哟'
</script>

<template>
  <div class="relative h-screen overflow-hidden">
    <Loading v-if="show" />
    <Background />
    <Main />
    <Footer />
  </div>
</template>

<style scoped>
</style>
