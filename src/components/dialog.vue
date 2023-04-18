<template >
  <el-dialog  v-model="modalStore.showDialogue" title="Ajouter Etudiant " class="bg-dark" style="text-align:center;color:#FFFFFF">
         <el-form :label-position="labelPosition" label-width="100px" :model="formdata"
                            style="max-width: 460px">
                            <el-form-item style="color:#FFFFFF" label="Nom" prop="nom">
                                <el-input v-model="formdata.nom" />
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
                                <el-input v-model="formdata.annee"  type="text" value="2023" />
                            </el-form-item>
                            
                        </el-form>

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="outerVisible = false">Cancel</el-button>
        <el-button type="primary" @click="add">
          Ajouter
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useModalStore } from '../stores/modals'
import { useDataStore } from '../stores/data'
const modalStore = useModalStore()
const dataStrore =useDataStore()

const  outerVisible = ref(false)
const formdata =ref({
    nom :'',
    niveau:'',
    annee:''
})
const add =()=>{
const data = {
    name : formdata.value.nom,
    niveau:formdata.value.niveau,
    annee:formdata.value.annee
}
dataStrore.form=data
dataStrore.tableData.push(data)
modalStore.showDialogue=false

}
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>