import { reactive, computed,ref } from 'vue'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', () => {
    const form = ref({
    
    })
    
    const tableData = ref([{
        // date: '2016-05-03',
        name: 'Tom',
        // address: 'No. 189, Grove St, Los Angeles',
        annee: 2020,
        niveau: 'L3'
      },
      {
        // date: '2016-05-02',
        name: 'John',
        // address: 'No. 189, Grove St, Los Angeles',
        annee: 2021,
        niveau: 'L3'
      },
      {
        // date: '2016-05-04',
        name: 'Morgan',
        // address: 'No. 189, Grove St, Los Angeles',
        annee: 2020,
        niveau: 'L1'
      },
      {
        // date: '2016-05-01',
        name: 'Jessy',
        // address: 'No. 189, Grove St, Los Angeles',
        annee: 2020,
        niveau: 'L3'
      },
    ])
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { form, tableData, doubleCount, increment }
})
