<template>
    <el-header>
        <NavBar />
    </el-header>
    <el-main >
        <el-row :gutter="30">
            <el-col :span="11">
                <el-card shadow="always">
                    <h4>Les Donnée Personnel</h4>
                    <!-- <el-form :label-position="labelPosition" label-width="100px" :model="form1"
                        style="max-width: 460px"> -->
                    <el-card class="box-card2">

                        <el-form-item label="Name">
                            <el-input  v-model="form1.name"  disabled />
                            <!-- <b>{{form1.name}}</b> -->
                        </el-form-item>
                        <el-form-item label="email">
                            <el-input v-model="form1.email" disabled />
                        </el-form-item>
                        <el-form-item label="Password" prop="pass">
                            <el-input v-model="form1.password" type="text" autocomplete="off" disabled />
                        </el-form-item>

                    </el-card>
                    <el-button type="primary" style="margin-left:450px;margin-top:10px" plain @click="changerpass">
                        Changer</el-button>
                    <!-- </el-form> -->
                </el-card>
            </el-col>
            <el-col :span="30">


                <el-card shadow="always">
                    <h4>Les Donnée Profissionel</h4>
                    <el-card class="box-card">
                        <el-form :label-position="labelPosition" label-width="100px" :model="form2"
                            style="max-width: 460px">
                            <el-form-item label="Ecole" prop="ecole">
                                <el-input v-model="form2.ecole" disabled />
                            </el-form-item>
                            <el-form-item label="La branche" prop="branche">
                                <el-input v-model="form2.branche" disabled />



                            </el-form-item>

                            <el-form-item label="Niveau " prop="niveau">
                                <el-input v-model="form2.niveau" type="text" disabled />

                            </el-form-item>
                            <el-form-item label="Année " prop="annee">
                                <el-input v-model="form2.annee" type="text" disabled />

                            </el-form-item>

                        </el-form>
                    </el-card>
                    <el-button type="primary" style="margin-left:450px;margin-top:10px" plain @click="changerdonnee">
                        Changer</el-button>
                </el-card>
            </el-col>

        </el-row>
        <div class="dialog-form">
            <el-dialog v-model="dialogFormVisible" :title="Modifier" close-on-press-escape>
                <el-card shadow="always">
                    <h4>Les Donnée Personnel</h4>
                    <el-form :label-position="labelPosition" label-width="100px" :model="form1"
                        style="max-width: 460px">
                        <el-card class="box-card2">

                            <el-form-item label="Name">
                                <el-input v-model="name" />
                            </el-form-item>
                            <el-form-item label="email">
                                <el-input v-model="email" />
                            </el-form-item>
                            <el-form-item label="Password" prop="pass">
                                <el-input v-model="password" type="password" autocomplete="off" show-password />
                            </el-form-item>
                            <el-form-item label="Confirm" prop="checkPass">
                                <el-input v-model="checkPass" type="password" autocomplete="off" show-password />
                            </el-form-item>
                        </el-card>
                        <el-button @click="dialogFormVisible = false" style="margin-top:10px">annuler</el-button>
                        <el-button type="primary" style="margin-top:10px" plain @click="modifierpass">Modifier
                        </el-button>
                    </el-form>
                </el-card>
            </el-dialog>
        </div>

        <div class="dialog-form2">
            <el-dialog v-model="dialogForm2Visible" :title="Modifier" close-on-press-escape>
                <el-card shadow="always">
                    <h4>Les Donnée Profissionel</h4>
                    <el-card class="box-card">
                        <el-form :label-position="labelPosition" label-width="100px" :model="form2"
                            style="max-width: 460px">
                            <el-form-item label="Ecole" prop="ecole">
                                <el-input v-model="ecole" />
                            </el-form-item>
                            <el-form-item label="La branche" prop="branche">
                                <!-- <el-input v-model="form2.branche" /> -->


                                <el-select v-model="branche" placeholder="choix" style="width:860px">
                                    <el-option label="Informatique" value="informatique" />
                                    <el-option label="maths" value="maths" />
                                    <el-option label="physique" value="physique" />
                                </el-select>
                            </el-form-item>

                            <el-form-item label="Niveau " prop="niveau">
                                <!-- <el-input v-model="form2.niveau" type="text" /> -->
                                <el-select v-model="niveau" placeholder="choix" style="width:860px">
                                    <el-option label="L1" value="l1" />
                                    <el-option label="L2" value="l2" />
                                    <el-option label="L3" value="l3" />
                                </el-select>
                            </el-form-item>
                            <el-form-item label="Année " prop="annee">
                                <el-input v-model="annee"  type="text" value="2023" />
                                <!-- <el-select v-model="form2.annee" placeholder="choisir une annee" style="width:860px">
                                    <el-option label="L1" value="l1" />
                                    <el-option label="L2" value="l2" />
                                    <el-option label="L3" value="l3" />
                                </el-select> -->
                            </el-form-item>
                            <el-button @click="dialogForm2Visible = false" style="margin-top:10px">annuler</el-button>
                            <el-button type="primary" style="margin-top:10px" plain @click="modifierdonnee">Modifier</el-button>
                        </el-form>
                    </el-card>
                </el-card>
            </el-dialog>
        </div>

    </el-main>
    <Footer />
</template>

<script setup>
    import NavBar from '../components/NavBar.vue'
    import Footer from '../components/Footer.vue'
    const dialogFormVisible = ref(false)
    const dialogForm2Visible = ref(false)
    import {
        reactive,
        ref
    } from 'vue'

    const labelPosition = ref('left')
    const name = ref('')
    const email=ref('')
    const password=ref('')
    const checkPass=ref('')
    const annee =ref('');
    const ecole=ref('');
    const branche=ref('');
    const niveau=ref('');
    const form1 = reactive({
        name: '',
        email: '',
        password: '',
        checkPass: ''
    })
    const form2 = reactive({
        ecole: '',
        branche: '',
        niveau: '',
        annee: ''
    })


    const changerpass = () => {

        dialogFormVisible.value = true
        form1.value = {}
    }
    const modifierpass = () => {

        if (password.value === checkPass.value && isNaN(password && name)) {
            form1.name = name.value;
            form1.email=email.value;
            form1.password=password.value;
            console.log(form1.name);
            dialogFormVisible.value = false
        } else
            alert('les mots de passe sont invalid');


    }
    // const nom =form1.name;
    const changerdonnee = () => {

        dialogForm2Visible.value = true
        form2.value = {}
    }

    const modifierdonnee = ()=>{
  form2.annee=annee.value;
  form2.branche=branche.value;
  form2.ecole=ecole.value;
  form2.niveau=niveau.value;
  dialogForm2Visible.value=false
    }
</script>

<style scoped>
    .box-card {
        width: 580px;
    }

    .box-card2 {
        width: 580px;
    }
    .card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 140px;
  
}




</style>