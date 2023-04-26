<template>
  <el-dialog @click="showdata(index,row)" v-model="modalStore.showDialogue"
    :title="modalStore.titleDialog === 'add' ? 'ajouter etudiant' : 'Modifier etudiant'" class="bg-dark"
    style="text-align:center;color:#FFFFFF">
    <el-form :label-position="labelPosition" label-width="100px" :model="formdata" style="max-width: 460px">
      <el-form-item style="color:#FFFFFF" label="Nom" prop="nom">
        <el-input v-model="formdata.name" placeholder="your name" name="name" />
        <!-- <Inscr :name="name" /> -->
      </el-form-item>
      <el-form-item label="Niveau " prop="niveau">
        <!-- <el-input v-model="form2.niveau" type="text" /> -->
        <el-select v-model="formdata.niveau" placeholder="choix" style="width:860px">
          <el-option label="L1" value="l1" />
          <el-option label="L2" value="l2" />
          <el-option label="L3" value="l3" />
        </el-select>
      </el-form-item>
      <el-form-item label="Année " prop="annee">
        <el-input v-model="formdata.annee" type="text" placeholder="ex:2023" />
      </el-form-item>
    </el-form>

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="outerVisible = false">Cancel</el-button>
        <el-button type="primary" @click="add">
          submit
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
  import {
    ref,reactive
  } from 'vue'
  import {
    useModalStore
  } from '../stores/modals'
  import {
    useDataStore
  } from '../stores/data'
  // import Inscr from '../views/inscription.vue'
  const modalStore = useModalStore()
  const dataStrore = useDataStore()
console.log(dataStrore.Fdata);
console.log(dataStrore.Fdata);
console.log(dataStrore.Fdata);


  const outerVisible = ref(false)
  const formdata = reactive({
    name: dataStrore.Fdata.name,
    niveau: dataStrore.Fdata.niveau,
    annee: dataStrore.Fdata.annee
  })
  const add = () => {
    const data = {
      name: formdata.value.nom,
      niveau: formdata.value.niveau,
      annee: formdata.value.annee
    }
    dataStrore.form = data
    dataStrore.tableData.push(data)
    modalStore.showDialogue = false

  }
  const showdata = (index: number, row: User) => {
    name = formdata.value.nom
    // formdata.value.nom=dataStrore.form.name
  }
</script>
<style scoped>
  .dialog-footer button:first-child {
    margin-right: 10px;
  }
</style>