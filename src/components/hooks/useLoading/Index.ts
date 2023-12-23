import { ref } from 'vue'

const loading = ref(false)
export const useLoading = () => {
  const loaded = async () => {
    console.log('background loaded.')
    setTimeout(() => {
      loading.value = true
    }, 1000)
  }
  return {
    loading,
    loaded
  }
}
