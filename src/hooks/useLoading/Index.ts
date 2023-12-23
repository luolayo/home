import { ref } from 'vue'

const loading = ref(false)
export const useLoading = () => {
    const loaded = () => {
        console.log('background loaded.');
        loading.value = true
      }
  return {
    loading,
    loaded
  }
}
