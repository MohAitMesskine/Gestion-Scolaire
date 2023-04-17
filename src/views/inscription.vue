<template>
  <NavBar />

  <Dialog :Visible="true" />
  <el-main class="container " style="margin-top:40px">
    <el-button text @click="Visible">
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
  defineProps({
    Visible: Boolean
  })
  const Visible = ref(true)
  interface User {
    date: string
    name: string
    address: string
    annee: number
    niveau: string

  }

  const search = ref('')
  const filterTableData = computed(() =>
    tableData.filter(
      (data) =>
      !search.value ||
      data.name.toLowerCase().includes(search.value.toLowerCase())
    )
  )
  const handleEdit = (index: number, row: User) => {
    // tableData.splice(index,1)
    // tableData.remove()
    console.log(index, row)
  }


  const tableData: User[] = [{
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
      annee: 2020,
      niveau: 'L3'
    },
    {
      date: '2016-05-02',
      name: 'John',
      address: 'No. 189, Grove St, Los Angeles',
      annee: 2021,
      niveau: 'L3'
    },
    {
      date: '2016-05-04',
      name: 'Morgan',
      address: 'No. 189, Grove St, Los Angeles',
      annee: 2020,
      niveau: 'L1'
    },
    {
      date: '2016-05-01',
      name: 'Jessy',
      address: 'No. 189, Grove St, Los Angeles',
      annee: 2020,
      niveau: 'L3'
    },
  ]
  const confirmEvent = () => {
  console.log('confirm!')
}
const cancelEvent = () => {
  console.log('cancel!')
}

</script>