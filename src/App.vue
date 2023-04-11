<script setup>
import { ref } from 'vue'
import NavBar from './components/NavBar.vue' 
import Footer from './components/Footer.vue'
const nav =ref(false);
</script>

<template>
           
     
 <!-- <div class="common-layout">
    <el-container>
      <el-header >
       <NavBar   />
      </el-header>   
   
    </el-container>
  </div> -->

<router-view/>


 
</template>

<style scoped >
@import './assets/base.css';



</style>