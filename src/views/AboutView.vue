<template>
<el-header >
       <NavBar   />
      </el-header>  
    <el-main  >
 <div class="container">
      <div class="title">
        <h2>Les étudiant </h2>
        <el-alert v-if="showAlert" title="ajouter avec succés" type="success" />
        <el-alert v-if="alertmodify" title="modifier avec succés" type="success" />

      </div>
      <div class="queryInput">
        <el-input @input="handleQueryInput" v-model="queryInput" placeholder="chercher un étudiant" clearable />
        <div class="btns">
          <el-button type="primary"  plain @click="handleAddRow">Ajouter</el-button>
          <el-button type="danger" plain @click="handleDeMultipleRow" v-if="multipleSelection.length > 0">
            supprimer
          </el-button>
        </div>
      </div>
      <div class="table-info">
        <el-table border ref="multipleTableRef" :data="pageData" style="width: 1000px"
          @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="50" />
          <el-table-column prop="name" label="Name" width="180" />
          <el-table-column prop="email" label="Email" width="150" />
          <el-table-column prop="address" label="Address" width="150" show-overflow-tooltip />
          <el-table-column prop="note" label="note" width="50" show-overflow-tooltip />
          <el-table-column prop="tag" label="resultas" width="120" :filters="[
            { text: 'valider', value: 'valider' },
            { text: 'rattrapage', value: 'rattrapage' }
          ]" :filter-method="filterTag" filter-placement="bottom-end">
            <template #default="scope">
              <el-tag :type="scope.row.note >=10? 'green' : 'danger'" disable-transitions>
                {{ scope.row.note >=10? 'valide' : 'rattrapage'}}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="Operations" width="150">
            <template #default="scope">
              <el-button link type="danger" size="small" @click.prevent="handleDeleteRow(scope.row)">
                supprimer
              </el-button>
              <el-button link type="primary" size="small" @click.prevent="handleEditRow(scope.row)">
                modifier
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="overflow-auto">
          <div class="mt-3">
            <h6 class="text-center">pagination</h6>

            <el-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize" :page-sizes="[2, 4, 6, 8]"
              :small="small" :disabled="disabled" :background="background"
              layout="total, sizes, prev, pager, next, jumper" :total="totalRows" @size-change="handleSizeChange"
              @current-change="handleCurrentChange" />



          </div>
        </div>
      </div>
      <div class="dialog-form">
        <el-dialog v-model="dialogFormVisible" :title="dialogFormTitle === 'add' ? 'ajouter' : 'Modifier'"
          close-on-press-escape>
          <el-form :model="form">
            <el-form-item label="Nom" :label-width="formLabelWidth">
              <el-input name="name" v-model="form.name" />
            </el-form-item>
            <el-form-item label="email" :label-width="formLabelWidth">
              <el-input name="email" v-model="form.email" type="email" />
            </el-form-item>
            <el-form-item label="adresse" :label-width="formLabelWidth">
              <el-input name="adresse" v-model="form.address" />
            </el-form-item>
             <el-form-item label="La note" :label-width="formLabelWidth">
              <el-input name="note" v-model="form.note" />
            </el-form-item>
            <el-form-item label="Ajouter étudiant" :label-width="formLabelWidth">
              <el-select v-model="form.tag" placeholder="choix">
                <el-option label="valider" value="valider" />
                <el-option label="rattrapage" value="rattrapage" />
              </el-select>
            </el-form-item>
          </el-form>

          <template #footer>
            <span class="dialog-footer">
              <el-button @click="dialogFormVisible = false">annuler</el-button>
              <el-button type="primary" @click="handleConfirmClick">
                comfirmer
              </el-button>
            </span>
          </template>
        </el-dialog>
      </div>
    </div>
      <!-- <Main  /> -->
      </el-main>
      <el-footer><Footer /></el-footer>
</template>

<script setup>
 import NavBar from '../components/NavBar.vue'
// import Main from '../components/Main.vue'
import Footer from '../components/Footer.vue'
 import {
    ref,
    reactive,
    computed
  } from 'vue';

  const formLabelWidth = '300px'
  const dialogFormVisible = ref(false)
  const dialogFormTitle = ref('')
  const queryInput = ref('')
  const multipleSelection = ref([])
  const showAlert = ref(false)
  const alertmodify = ref(false)
  const errors = ref([])
  const from = ref(0)
const currentRowId = ref(0)
  // const form_name=ref(form.name.value);
  let tableData = ref([{
      id: '0',
      name: 'ait messkine',
      email: 'aitmeloul@163.com',
      address: 'lherch, ait meloul',
      note:10,
      tag: ''
    },
    {
      id: '1',
      name: 'mohmad',
      email: 'emaail@163.com',
      address: 'agadir',
      note: 9,
      tag: 'valider'
    },
    {
      id: '2',
      name: 'Alice2',
      email: '123@163.com',
      address: 'Ait meloul ',
      note: 10,
      tag: 'valider'
    },
    {
      id: '3',
      name: 'ait messkine',
      email: 'aitmeloul@163.com',
      address: 'lherch, ait meloul',
      note: 10,
      tag: 'ratrapage'
    },
    {
      id: '4',
      name: 'mohmad',
      email: 'emaail@163.com',
      address: 'agadir',
      note: 11,
      tag: 'valider'
    },
    {
      id: '5',
      name: 'Alice2',
      email: '123@163.com',
      address: 'Ait meloul ',
      note: 11,
      tag: 'valider'
    },
    {
      id: '6',
      name: 'ait messkine',
      email: 'aitmeloul@163.com',
      address: 'lherch, ait meloul',
      note: 11,
      tag: 'ratrapage'
    },
    {
      id: '7',
      name: 'mohmad',
      email: 'emaail@163.com',
      address: 'agadir',
      note: 11,
      tag: 'valider'
    },
    {
      id: '8',
      name: 'Alice2',
      email: '123@163.com',
      address: 'Ait meloul ',
      note: 11,
      tag: 'valider'
    },



  ])
  const form = reactive({
    id: currentRowId.value,
    name: '',
    email: '',
    address: '',
    note:'',
    tag: '',

  })

  computed(() => {

  })
  const totalRows = tableData.value.length;
  const pageSize = ref(2);
  const pageData = ref(tableData.value.slice(0, 2))

  const handleSizeChange = (s) => {
    pageSize.value = s;

    pageData.value = tableData.value.slice(from.value, s + from.value);
  }

  const handleCurrentChange = (i) => {
    let j = i - 1;
    pageData.value = tableData.value.slice(j * pageSize.value, j * pageSize.value + pageSize.value)
    from.value = j * pageSize.value;
    // alert(params.value.from);

  }


  const tableDataCopy = Object.assign(tableData.value)
  const handleQueryInput = val => {
    if (val.length > 0) {
      // alert(val.length)
        pageData.value = pageData.value.filter(item => {
        console.log('val----', val)
        return item.name.toLowerCase().match(val)
      })
    } else {
      tableData.value = tableDataCopy
    }
  }
  const handleSelectionChange = val => {
    multipleSelection.value = []
    val.forEach(item => {
      multipleSelection.value.push(item)
    })
  }
  const filterTag = (value, row) => {
    return row.tag === value
  }
  const handleAddRow = () => {
    dialogFormTitle.value = 'add'
    dialogFormVisible.value = true
    form.value = {}
  }
  const handleConfirmClick = () => {
    if (form.id === null || form.name === "" || form.email === "") {
      alert("remplir les champs !");
      form.name.focus();
      return false;
    } else {
      if (dialogFormTitle.value === 'add') {
        tableData.value.push({
          id: tableData.value.length,
          name: form.name,
          email: form.email,
          address: form.address,
          note:form.note,
          validation: form.note>=10?"valider":"rattrapage",


        })
        console.log(tableData);
        showAlert.value = true
      }
      if (dialogFormTitle.value === 'edit') {
        const index = tableData.value.findIndex(item => {
          //  alert(currentRowId.value)
          return item.id === currentRowId
          
        })
        tableData.value[index] = form
        console.log(tableData.value[index]);
        
        alertmodify.value = true
      }

      dialogFormVisible.value = false
    }
  }
  const handleDeleteRow = ({
    id
  }) => {
    let index = pageData.value.findIndex(item => {
      return item.id === id
    })
    pageData.value.splice(index, 1)


  }
  const handleDeMultipleRow = () => {
    multipleSelection.value.forEach(item => {
      handleDeleteRow(item)
      console.log(item)
    })
    multipleSelection.value = []
  }
  const handleEditRow = row => {
    currentRowId.value = row.id
    dialogFormTitle.value = 'edit'
    dialogFormVisible.value = true
    form.name=row.name
    form.email=row.email
    form.address=row.address
    form.note=row.note
    form.tag=row.tag
  
  }



</script>

<style scoped>
   .container {
    width: 800px;
    
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
  }

  .el-input {
    width: 200px;
  }

  .el-alert {
    margin: 20px 0 0;
  }

  .el-alert:first-child {
    margin: 0;
  }

  .queryInput {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
  }

  .btns {
    display: flex;
    justify-content: center;
    align-content: center;
  }

  .el-button--text {
    margin-right: 15px;
  }

  .el-select {
    width: 300px;
  }

  .el-input {
    width: 300px;
  }

  .dialog-footer button:first-child {
    margin-right: 10px;
  }

  .example-pagination-block+.example-pagination-block {
    margin-top: 10px;
  }

  .example-pagination-block .example-demonstration {
    margin-bottom: 16px;
  }
</style>
