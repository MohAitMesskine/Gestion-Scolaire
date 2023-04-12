<template>
<el-header >
       <NavBar   />
      </el-header>  
    <el-main style="height:450px" >
 
      <Main  />
      </el-main>
      <el-footer><Footer /></el-footer>
</template>

<script>
 import NavBar from '../components/NavBar.vue'
import Main from '../components/Main.vue'
import Footer from '../components/Footer.vue'
export default {
 components: {
  NavBar,
   Main,
  Footer,
  }


}
</script>

<style>
.footer{
margin: 200px;

}
</style>
