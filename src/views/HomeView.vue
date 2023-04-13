<template>
 <el-header >
       <NavBar  />
      </el-header>  
    <el-main >
     <div class="main">
        <h1 class="h1">
    {{ $t("main.hello") }} {{x}}
   
    </h1>
</div>
 </el-main>
 <Footer />
</template>




<script setup>
   import Footer from '../components/Footer.vue'
    import NavBar from '../components/NavBar.vue'
var x = localStorage.getItem('ms_username');


 




</script>
<style scoped>
.main {
background-image: url('../assets/home.png');
height: 400px;
}
.h1{
  font-size: 130px;
  text-align: center;
  color: blue;
}

</style>