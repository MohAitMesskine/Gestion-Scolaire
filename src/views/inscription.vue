<template class="container " >
  <NavBar />
  <Dialog  />
  <el-main class="container " style="margin-top:40px">
    <el-button text @click="showdialog">
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
          <el-button link type="primary" size="small" @click="handleClick( scope.$index, scope.row)">Detail</el-button>
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
  <el-footer style="margin-top:50px">
  <Footer />
  </el-footer>
</template>

<script lang="ts" setup>
  import {
    computed,
    ref
  } from 'vue';
  import NavBar from "../components/NavBar.vue"
  import Dialog from "../components/dialog.vue"
  import Footer from "../components/Footer.vue"
  import { useModalStore } from '../stores/modals'
  import { useDataStore } from '../stores/data'
    const modalStore = useModalStore()
    const dataStrore= useDataStore()
  
  const Visible = ref(true)
 
  const search = ref('')
  const filterTableData = computed(() =>
    dataStrore.tableData.filter(
      (data) =>
      !search.value ||
      data.name.toLowerCase().includes(search.value.toLowerCase())
    )
  )
  const handleEdit = (index: number, row) => {
    modalStore.titleDialog="edit"
    console.log(index, row)
     dataStrore.Fdata.name=row.name
  dataStrore.Fdata.niveau=row.niveau
  dataStrore.Fdata.annee=row.annee
  console.log( dataStrore.Fdata);
  console.log( dataStrore.Fdata);
  console.log( dataStrore.Fdata);
  console.log( dataStrore.Fdata);
  modalStore.showDialogue = true
  // dataStrore.Fdata.name=row.name
  // dataStrore.Fdata.niveau=row.niveau
  // dataStrore.Fdata.annee=row.annee
  // console.log( dataStrore.Fdata);
  // console.log( dataStrore.Fdata);
  // console.log( dataStrore.Fdata);
  // console.log( dataStrore.Fdata);
  
  // defineProps({
   // name:row.name.value,
  // niveau:row.name.value,
  // annee:row.annee.value
  // })
  
 
  }
const handleClick=( index: number, row: User)=>{
// console.log(index, row)
  
  // alert(i)

 
}

  
  const showdialog =()=>{
     modalStore.showDialogue = true
     modalStore.titleDialog="add"
  }
  const confirmEvent = (index: number,row: User) => {
  
    dataStrore.tableData.splice(index,1)
    console.log('confirm!')
}
const cancelEvent = () => {
  console.log('cancel!')
}

</script>