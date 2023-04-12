<template>

    <!-- <footer class="footer">
        <p>©aitmesskine</p>
    </footer> -->
     <el-card class="box-footer">
   <h3 style="text-align:center;" >Contacter Nous :</h3>
<el-row :gutter="12">
    <el-col :span="8">
        <el-card shadow="always">  <el-icon size="30px "  ><School /></el-icon> <p > Adresse:</p> <strong>Agadir</strong>  
 </el-card>
    </el-col>
    <el-col :span="8">
        <el-card shadow="hover">  <el-icon size="30px" ><PhoneFilled /></el-icon> <p > Telephone</p> <strong>00000000</strong></el-card>
      
    </el-col>
    <el-col :span="8">
      <el-card shadow="never">  <el-icon size="30px" ><PhoneFilled /></el-icon> <p > Email</p> <strong>mohamed@gmail.com</strong></el-card>
    </el-col>
  </el-row>
      <p style="text-align:center;">©aitmesskine</p>
   <!-- <el-icon size="30px"  ><School /></el-icon> <p > Adresse:</p> <strong>Agadir</strong> -->
 
  </el-card>
</template>

<script lang="ts" setup>




</script>

<style>
    /* .footer {
        display: flex;
        justify-content: center;
        padding: 5px;
        background-color: rgb(255, 255, 255);
        color: blue;
    } */
    .box-footer{
  width: 1500px; 
  height: 250px;
}

</style>