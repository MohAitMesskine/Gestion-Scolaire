import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modals', () => {
  const showDialogue = ref(false)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { showDialogue, doubleCount, increment }
})
