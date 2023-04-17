<template>
  <NavBar />

  <Dialog  />
  <el-main class="container " style="margin-top:40px">
    <el-button text @click="() => modalStore.showDialogue = true">
      ajouter un etudiant
    </el-button>
    <el-table :data="filterTableData" style="width: 100%">
      <el-table-column label="Nom" prop="name" />
      <el-table-column label="niveau" prop="niveau" />
      <el-table-column label="Annee Scolaire" prop="annee" />
      <el-table-column align="right">
        <template #header>
          <el-input v-model="search" size="small" placeholder="Type to search" />
        </template>
        <template #default="scope">
          <el-button link type="primary" size="small" @click="handleClick">Detail</el-button>
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-popconfirm confirm-button-text="Yes" cancel-button-text="No" :icon="InfoFilled" icon-color="#626AEF"
            title="Vous vraiment supprimer?" @confirm="confirmEvent" @cancel="cancelEvent">
            <template #reference>
              <el-button size="small" type="danger">Delete</el-button>
            </template>
          </el-popconfirm>


        </template>
      </el-table-column>
    </el-table>
  </el-main>
</template>

<script lang="ts" setup>
  import {
    computed,
    ref
  } from 'vue';
  import NavBar from "../components/NavBar.vue"
  import Dialog from "../components/dialog.vue"
  import { useModalStore } from '../stores/modals'
  import { useDataStore } from '../stores/data'
    const modalStore = useModalStore()
    const dataStrore= useDataStore()
  defineProps({
    Visible: Boolean
  })
  const Visible = ref(true)
 
  const search = ref('')
  const filterTableData = computed(() =>
    dataStrore.tableData.filter(
      (data) =>
      !search.value ||
      data.name.toLowerCase().includes(search.value.toLowerCase())
    )
  )
  const handleEdit = (index: number, row: User) => {
    console.log(index, row)
  }


  
  
  const confirmEvent = () => {
  console.log('confirm!')
}
const cancelEvent = () => {
  console.log('cancel!')
}

</script>