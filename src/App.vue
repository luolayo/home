<script setup lang="ts">
import Loading from './components/loading/Index.vue'
import Background from './components/Background/Index.vue'
import Main from './components/Main/Index.vue'
import Footer from './components/footer/Index.vue'
import { useLoading } from './hooks/useLoading/Index'
import { ref,watch } from 'vue'
const { loading } = useLoading()
const show = ref(true)
watch(loading, async (val) => {
  setTimeout(() => {
    show.value = false
  }, 500);
})
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
